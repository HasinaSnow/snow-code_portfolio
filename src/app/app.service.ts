import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, WritableSignal, inject, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AppService {

    #document = inject(DOCUMENT)
    isDarkMode: WritableSignal<boolean> = signal(false)

    private plateformId = inject(PLATFORM_ID)
    isBroswer: boolean = isPlatformBrowser(this.plateformId)

    toggleLightDarkMode() {
        const bodyElement = this.#document.getElementById('app-theme') as HTMLBodyElement
        if(bodyElement.classList.contains('light')) {
            bodyElement.classList.replace('light', 'dark')
            this.isDarkMode.set(true)

        } else {
            bodyElement.classList.replace('dark', 'light')
            this.isDarkMode.set(false)
        }
    }
}