import { CommonModule } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { DynamicDialogConfig } from "primeng/dynamicdialog";
import {CarouselModule } from "primeng/carousel"
import { GalleriaModule } from "primeng/galleria"
import { FieldsetModule } from 'primeng/fieldset';
import { ChipModule } from 'primeng/chip';
import { TagModule } from "primeng/tag";
import { IProjectDetail } from "../project.interface";
import { ProjectService } from "../project.service";
import { MarkdownService } from "../../../shared/services/markdown.service";
import { marked } from "marked"
import { ImageModule } from "primeng/image";

@Component({
    selector: 'app-project-details',
    standalone: true,
    imports: [
        CommonModule,
        CarouselModule,
        GalleriaModule,
        FieldsetModule,
        ChipModule,
        TagModule,
        ImageModule
    ],
    template: `
        <div class="w-full h-full">
            @if (projectDetails) {
                <section class="w-full flex gap-2 justify-center overflow-x-auto">
                    @for (image of projectDetails.images; track $index) {
                        <p-image [src]="image.src" [alt]="image.alt"  height="200" [preview]="true"/>
                    }
                </section>
                <!-- <p-carousel headerText="Images" [value]="projectDetails.images">
                    <ng-template let-image pTemplate="item">
                        <p-image [src]="image.src" [alt]="image.alt"  height="200" [preview]="true"/>
                    </ng-template>
                </p-carousel> -->

                <!-- descriptions -->
                <p-fieldset legend="Description" styleClass="my-2" [collapsed]="true" [toggleable]="true">
                    <p class="text-justify" [innerHTML]="projectDescription"></p>
                </p-fieldset>

                <!-- features -->
                <p-fieldset legend="Features" styleClass="my-2" [collapsed]="false" [toggleable]="true">
                    <p class="flex flex-col gap-2">
                        @for (feature of projectDetails.features; track $index) {
                            <p-tag [value]="feature"  styleClass="text-lg" severity="info" icon="pi pi-check" />
                        }
                    </p>
                </p-fieldset>

                <!-- stacks -->
                <p-fieldset legend="Stacks" styleClass="my-2" [toggleable]="false">
                    <p class="flex flex-wrap gap-2 items-center">
                        @for (stack of projectDetails.stacks; track $index) {
                            <p-chip [label]="stack" />
                        }
                    </p>
                </p-fieldset>

           <!-- links -->
            } @else {
                <p-tag styleClass="text-lg mx-auto my-5" value="project not found" icon="pi pi-info" severity="warning"/>
            }
        </div>
    `
})
export class ProjectDetailsComponent implements OnInit{
    private config = inject(DynamicDialogConfig)
    private projectService = inject(ProjectService)
    private mdService = inject(MarkdownService)
    images!: any[]
    projectDetails: IProjectDetail | undefined
    projectDescription: string = ''

    ngOnInit(): void {
        console.log('on init compoenent detail', this.config.data)
        this.projectDetails = this.projectService.getOne(this.config.data)?.details

        if(this.projectDetails?.description) {
            this.loadProjectDescription(this.projectDetails.description)
        }
    }

    loadProjectDescription(ref: string) {
        this.mdService.getMDContent(ref).subscribe(
            data => this.projectDescription = marked(data) as string,
            error => console.error('error markdown file to loading', error)
        )
    }

}