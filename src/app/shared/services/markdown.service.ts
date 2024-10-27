import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MarkdownService {
    private http = inject(HttpClient)

    getMDContent(filepath: string): Observable<string> {
        return this.http.get(filepath, { responseType: 'text'})
    }
}