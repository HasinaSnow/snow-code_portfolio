import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DownloaderService {
    private http = inject(HttpClient)

    download(url: string): Observable<Blob> {
        return this.http.get(url,  { responseType: 'blob'})
    }
}