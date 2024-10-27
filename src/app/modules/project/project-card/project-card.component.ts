import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { IProjectIndex } from '../project.interface';
import { UrlService } from '../../../shared/services/url.service';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuItem, TooltipOptions } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';

@Component({
    standalone: true,
    imports: [
        CommonModule,
        CardModule,
        ButtonModule,
        ImageModule,
        SplitButtonModule,
        ToastModule,
        MenuModule
    ],
    selector: 'app-project-card',
    template: `
        <p-card styleClass="border rounded-t-xl w-full">
            <ng-template pTemplate="header">
                @if (item.imgRef) {
                    <p-image
                    imageClass="rounded-t-lg w-full "
                    styleClass="w-full"
                    [src]="item.imgRef"
                    alt="Image"/>
                }
                <div class="px-4 pt-2 flex flex-wrap gap-2 justify-start items-center">
                    <p-splitButton menuStyleClass="top-2" [tooltipOptions]="'top'" severity="secondary" label="Go to" [model]="gotoItems"></p-splitButton>
                    <p-button (onClick)="showDetail.emit(item.id)" label="Detail" size="small" raised="true"/>
                </div>
            </ng-template>
            <ng-template pTemplate="content">
                <div class="">
                    <div class="p-card-title line-clamp-2">{{ item.title }}</div>
                    <div class="p-card-subtitle m-0">{{ item.subtitle }}</div>
                </div>

            </ng-template>
        </p-card>
    `
})

export class 
ProjectCardComponent implements OnInit{
  
    private urlService = inject(UrlService)
    @Output() showDetail: EventEmitter<string> = new EventEmitter()
    @Input({required: true}) item!: IProjectIndex
    gotoItems: MenuItem[] = []
    tooltipOptions: TooltipOptions = {
        tooltipZIndex: "1000",
        tooltipPosition: "top"
    }

    ngOnInit(): void {
        this.generateLinks()
    }

    gotToRepo() {
        this.urlService.goToUrl(this.item.links?.repo || '')
    }

    generateLinks() {
        if(this.item.links?.repo) this.gotoItems.push({
            url: this.item.links.repo,
            label: 'Repo',
            icon: 'pi pi-github',
        })
        if(this.item.links?.site) this.gotoItems.push({
            url: this.item.links.site,
            label: 'Website',
            icon: 'pi pi-globe'
        })
        if(this.item.links?.demo) this.gotoItems.push({
            url: this.item.links.demo,
            label: 'Demo',
            icon: 'pi pi-bolt'
        })
    }
}