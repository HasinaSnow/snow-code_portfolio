import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, Signal, ViewChild, WritableSignal, computed, inject, signal } from '@angular/core';
import { ProjectFiltersComponent } from "./project-filters/project-filters.component";
import { ProjectCardComponent } from "./project-card/project-card.component";
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { IProjectIndex, TCategProject } from './project.interface';
import { ProjectService } from './project.service';
import { CarouselModule } from 'primeng/carousel';

@Component({
    standalone: true,
    selector: 'app-project',
    template: `
        <div class="projects">
            <!-- filters -->
            <div class="w-full overflow-auto">
                <app-project-filters (filterSearch)="onSearchFilter($event)" (filterCateg)="onSelectFilter($event)"></app-project-filters>
            </div>
            <!-- list -->
            <div #sliderRef class="mb-3">
                <p-carousel 
                    [value]="projects()" 
                    [numVisible]="projects().length <= 1 ? 1 : 2" 
                    [numScroll]="1" 
                    [circular]="true"
                    [responsiveOptions]="responsiveOptions">
                        <ng-template let-project pTemplate="item">
                            <div class="mx-3">
                                <app-project-card [item]="project" (showDetail)="showDetail($event)"></app-project-card>
                            </div>
                        </ng-template>
                </p-carousel>

            </div>
        </div>
    `,
    providers: [DialogService],
    imports: [
        CommonModule,
        ProjectFiltersComponent,
        ProjectCardComponent,
        DynamicDialogModule,
        CarouselModule
    ]
})

export class ProjectComponent implements OnInit{

    private dialogService = inject(DialogService)
    private projectService = inject(ProjectService)
    ref: DynamicDialogRef | undefined

    filterCateg: WritableSignal<TCategProject> = signal('All')
    filterSearch: WritableSignal<string> = signal('')

    projects: Signal<IProjectIndex[]> = computed(() => {
        let projects = this.projectService.getAll()
        if(this.filterCateg() !== 'All') {
            console.log('filter value', this.filterCateg())
            projects = projects.filter(project => project.category == this.filterCateg())
        }
        if(this.filterSearch()) {
            const search = this.filterSearch().split(' ').map(keyword => keyword.replace(/\s+/g, ' ').trim().toLowerCase()); 
            projects = projects.filter(project => {
                const title = String(project.title).replace(/\s+/g, ' ').trim().toLowerCase()
                const subtitle = String(project.subtitle).replace(/\s+/g, ' ').trim().toLowerCase()
                return search.some(word => title.includes(word) || subtitle.includes(word))
            })
            console.log(search, projects)
        }
        return projects
    })

    responsiveOptions: any[] | undefined;

    ngOnInit(): void {
        this.responsiveOptions = [
            {
                breakpoint: '900px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '770px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    showDetail(idDetail: string) {
        console.log('on show detail', idDetail)
        this.ref = this.dialogService.open(ProjectDetailsComponent, {
            closeOnEscape: true,
            header: this.projects().find(project => project.id == idDetail)?.title || 'title project not found',
            data: idDetail,
            dismissableMask: true,
            modal: true,
            width: '75vw',
            breakpoints: {
                '768px': '90vw'
            },
            maskStyleClass: 'backdrop-blur-sm'
        })
    }

    onSelectFilter(value: TCategProject) {
        this.filterCateg.set(value)
    }

    onSearchFilter(searchValue: string) {
        this.filterSearch.set(searchValue)
        console.log('on search filter', searchValue)
    }
}