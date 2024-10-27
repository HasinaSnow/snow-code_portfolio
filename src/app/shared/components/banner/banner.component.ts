import { CommonModule } from '@angular/common';
import { Component, InputSignal, InputSignalWithTransform, ModelSignal, OnInit, inject, input, model, signal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card'
import { ImageModule } from 'primeng/image'
import { SocialLinksComponent } from '../social-links/social-links.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { ButtonModule } from 'primeng/button';
import { AppService } from '../../../app.service';
import { NgxTypedWriterModule } from 'ngx-typed-writer';

@Component({
    standalone: true,
    selector: 'app-banner',
    template: `
        <div class="w-full lg:ml-6 lg:mr-5 flex flex-col lg:flex-row gap-2 justify-center items-center">
            <!-- img profile -->
            <figure class="m-0">
                <p-image
                    imageClass="border-top"
                    src="assets/images/profile_hasina_bg_remove2.png" 
                    alt="Image"
                    width="350"/>
            </figure>

            <!-- description -->
            <p-card styleClass="px:3 sm:px-5 w-full shadow-none">
                <ng-template pTemplate="content">
                    <h2 class="text-center lg:text-left">{{'{ _ }'}} Fullstack Javascript</h2>
                    <p class="p-0 text-center lg:text-left text-3xl my-3">Hasina Niaina Snow</p>
                    <p class="text-lg leading-7 text-center lg:text-justify my-3">
                        Welcome to my web development world! As a full-stack JavaScript developer, I excel in <span class="p-avatar p-1 py-0 border leading-none font-semibold gap-1 items-center inline-flex"> <p-image styleClass="p-avatar-image " imageClass="inline" src="assets/images/angular.svg" alt="angular" width="16"></p-image>Angular</span>
                        for creating dynamic interfaces and in <span class="p-avatar p-1 py-0 border leading-none font-semibold gap-1 items-center w-fit inline-flex"><p-image styleClass="p-avatar-image " imageClass="inline" src="assets/images/node.js.svg" alt="node" width="15"></p-image>NodeJs</span> for robust server-side solutions. Let’s explore your ideas together and turn them into digital successes!
                    </p>
                    <app-social-links></app-social-links>
                </ng-template>
            </p-card>
        </div>`,
    imports: [
        CommonModule,
        CardModule,
        ImageModule,
        AvatarModule,
        SocialLinksComponent,
        ButtonModule,
        NgxTypedWriterModule
    ]
})

export class BannerComponent implements OnInit {
    mail: string = 'rakotohasinasnow@gmail.com';
    isCSR: boolean = inject(AppService).isBroswer
    textTyping: ModelSignal<string[]> = model<string[]>(['This a Angular Library', 'Angular Universal Friendly'])
    cursorTyping: InputSignal<string> = input<string>('_')
    backSpeedTyping: InputSignal<number> = input<number>(30)
    typeSpeedTyping: InputSignal<number> = input<number>(30)
    isShowCursorTyping: InputSignalWithTransform<boolean, unknown> = input(true, {
        transform: (value: unknown) => {
          // Transform the input value to a boolean
          return typeof value === 'boolean' ? value : false;
        }
    });
    isHTMLTyping: InputSignalWithTransform<boolean, unknown> = input(true, {
        transform: (value: unknown) => {
          // Transform the input value to a boolean
          return typeof value === 'boolean' ? value : false;
        }
    });
    smartBackspaceTyping: InputSignalWithTransform<boolean, unknown> = input(true, {
        transform: (value: unknown) => {
          // Transform the input value to a boolean
          return typeof value === 'boolean' ? value : false;
        }
    });

    ngOnInit() { }
}