import { ElementRef, Injectable, Signal, WritableSignal, computed, inject, signal } from "@angular/core";
import { AppService } from "../../app.service";

@Injectable({
    providedIn: 'root'
})
export class ScrollService {
    private appService = inject(AppService)
    private verticalOffset: WritableSignal<number> = signal(0);
    screenWidth = this.appService.isBroswer ? window.innerWidth : 0
    private scrollThreshold =  this.screenWidth < 1024 ? 850 : this.screenWidth < 1230 ? 380 : 389 // Changez cette valeur selon vos besoins
    isScrolled: Signal<boolean> = computed(() => this.verticalOffset() > this.scrollThreshold)
    isAbsolute: WritableSignal<boolean> = signal(false)


    checkPosition(element: HTMLElement) {
        const rect = element.getBoundingClientRect();
        if(rect.bottom <= 0) console.log('rect is', rect.bottom)
        this.isAbsolute.set(rect.bottom <= 0);
    }

    scrollToElement(target: ElementRef) {
        if(this.appService.isBroswer)
            target.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
}