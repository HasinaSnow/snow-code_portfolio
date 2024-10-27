import { Component, OnInit } from '@angular/core';

@Component({
    standalone: true,
    imports: [],
    selector: 'app-not-found-layout',
    template: `
    <p>Page not found</p>
    `
})

export class NotFoundLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}