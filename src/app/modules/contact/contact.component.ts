import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CardModule } from 'primeng/card';
import { SocialLinksComponent } from "../../shared/components/social-links/social-links.component";

@Component({
    standalone: true,
    selector: 'app-contact',
    template: `
        <div class="flex flex-col md:flex-row ">
            <!-- location -->
            <p-card styleClass="p-0 w-full shadow-none">
                <ng-template pTemplate="title">
                    <p class="my-0">Contact me</p>
                </ng-template>
                <ng-template pTemplate="content">
                    <p class="text-md leading-6 text-justify my-0">
                        Passionate about development and always ready for new challenges, i'm available to discuss innovative and collaborative projects.
                        Whether you have a project idea need technical advice, or simplu want to connect over programming, feel free ro reach out. I'll be
                        glad to respond as soon as possible.
                    </p>
                    <app-social-links></app-social-links>
                </ng-template>
            </p-card>
            <p-fieldset legend="Send Me a message" styleClass="p-4 md:mt-4">
                <app-contact-form></app-contact-form>
            </p-fieldset>
        </div>
    `,
    imports: [
        CommonModule,
        FieldsetModule,
        CardModule,
        ContactFormComponent,
        SocialLinksComponent
    ]
})
export class ContactComponent {}