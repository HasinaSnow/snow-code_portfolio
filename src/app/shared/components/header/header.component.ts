import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, PLATFORM_ID, WritableSignal, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar'
import { AvatarModule } from 'primeng/avatar'
import { AppService } from '../../../app.service';
import { MenuItem } from 'primeng/api';
import { UrlService } from '../../services/url.service';

@Component({
    standalone: true,
    imports: [
        CommonModule,
        MenubarModule,
        ButtonModule,
        AvatarModule,
        MenubarModule
    ],
    selector: 'app-header',
    template: `
        <div class="flex w-full py-2 sm:px-4 justify-between items-center">
            <div class="flex gap-3 items-enter rounded-md">
                <!-- logo -->
                <img width="150" height="40" src="assets/images/{{ isDarkMode() ? 'logo-snow-dark.svg' : 'logo-snow-light.svg'}}" alt="SnowCode">
            </div>


            <div class="flex w-fit gap-3 items-center">
                <!-- menu -->
                <p-menubar [model]="menuItems" class="border-none" styleClass="hidden lg:block border-none bg-transparent"/>
                <!-- cv download -->
                <p-button (click)="downloadCV()" icon="pi pi-download" label="CV" severity="primary"></p-button>
                <!-- github link -->
                <p-button (click)="goToGithub()" icon="pi pi-github" outlined="true"></p-button>
                <!-- theme -->
                <p-button (click)="toggleTheme()" icon="pi {{ isDarkMode() ? 'pi-sun' : 'pi-moon'}}" outlined="true"></p-button>

            </div>
        </div>
    `
})

export class HeaderComponent implements OnInit {

    readonly appService = inject(AppService)
    private plateformId = inject(PLATFORM_ID)
    private urlService = inject(UrlService)
    isDarkMode: WritableSignal<boolean> = this.appService.isDarkMode

    @Output() toggleAboutMe: EventEmitter<void> = new EventEmitter();
    @Output() scrollIntoViewContent: EventEmitter<void> = new EventEmitter();
    menuItems: MenuItem[] | undefined

    ngOnInit() { 
        this.menuItems = [
            {
                label: 'Projects',
                routerLink: "projects",
                command: () => {
                    this.scrollIntoViewContent.emit()
                }
            },
            {
                label: 'Resume',
                routerLink: "resume",
                command: () => {
                    this.scrollIntoViewContent.emit()
                }
            },
            {
                label: 'Contact',
                routerLink: "contact",
                command: () => {
                    this.scrollIntoViewContent.emit()
                }
            },
        ]
    }

    toggleTheme() {
        this.appService.toggleLightDarkMode()
    }

    downloadCV() {
        const url = 'assets/files/CV.pdf'
        this.urlService.downloadLink(url).subscribe(
            blob => {
                const fileUrl = URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.href = fileUrl
                a.download = 'CV - Hasina Snow.pdf'
                a.click()
                URL.revokeObjectURL(fileUrl)
            },
            error => console.error('Error to download file', error)
        )
    }

    goToGithub() {
        if(isPlatformBrowser(this.plateformId)) {
            this.urlService.goToUrl('https://github.com/hasinaSnow')
        }
    }

}