import { isPlatformBrowser } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable, PLATFORM_ID, inject } from "@angular/core";
import { AppService } from "../../app.service";

@Injectable({
    providedIn: 'root'
})
export class UrlService {
    private http = inject(HttpClient)
    private appService = inject(AppService)

    downloadLink(link: string) {
        return this.http.get(link,  { responseType: 'blob'})
    }

    goToUrl(url: string, target: string = '_blank') {
        if(this.appService.isBroswer) {
            window.open(url, target)
        }
    }
}