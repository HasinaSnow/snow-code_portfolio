import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
    selector: 'app-social-links',
    standalone: true,
    imports: [
        CommonModule,
        ButtonModule,
    ],
    template: `
    <div class="flex gap-2 justify-center md:justify-left items-center mt-4">
        <p-button icon="pi pi-github" styleClass="" size="large" outlined="true"></p-button>
        <p-button icon="pi pi-facebook" styleClass="" size="large" outlined="true"></p-button>
        <p-button icon="pi pi-twitter" styleClass="" size="large" outlined="true"></p-button>
        <p-button icon="pi pi-instagram" styleClass="" size="large" outlined="true"></p-button>
    </div>
    `
})
export class SocialLinksComponent {}