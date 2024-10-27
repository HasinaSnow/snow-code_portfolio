import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';

@Component({
    standalone: true,
    imports: [
        CommonModule,
        CardModule,
        AvatarModule,
        ImageModule,
        ButtonModule
    ],
    selector: 'app-about-me',
    template: `
        <p-card styleClass="p-0 w-full {{ styleClass }}">
            <ng-template pTemplate="title">
                <p class="my-0 text-2xl">About me</p>
            </ng-template>
            <ng-template pTemplate="subtitle">
                <p class="my-0">I'm Fullstack developper</p>
            </ng-template>
            <ng-template pTemplate="content">
                <p class="text-md leading-6 text-justify my-0">
                    As a passionate fullstack JavaScript developer, 
                    I have a strong expertise in <span class="p-avatar p-1 py-0 border leading-none font-semibold gap-1 items-center inline-flex"> <p-image styleClass="p-avatar-image " imageClass="inline" src="assets/images/angular.svg" alt="angular" width="16"></p-image>Angular</span> 
                    and <span class="p-avatar p-1 py-0 border leading-none font-semibold gap-1 items-center w-fit inline-flex"><p-image styleClass="p-avatar-image " imageClass="inline" src="assets/images/node.js.svg" alt="node" width="15"></p-image>NodeJs</span>. 
                    Holding a bachelor's degree in computer science and currently a Master's student, 
                    I focus on creating high-performance, user-friendly web applications. 
                    My academic background has allowed me to deepen my skills in database design, 
                    both SQL and NoSQL, enabling me to develop robust and scalable solutions.
                </p>
                <!-- <div class="flex gap-2 justify-center items-center mt-5">
                    <p-button icon="pi pi-github" styleClass="" size="large" outlined="true"></p-button>
                    <p-button icon="pi pi-facebook" styleClass="" size="large" outlined="true"></p-button>
                    <p-button icon="pi pi-twitter" styleClass="" size="large" outlined="true"></p-button>
                    <p-button icon="pi pi-instagram" styleClass="" size="large" outlined="true"></p-button>
                </div> -->
            </ng-template>
        </p-card>
    `

})

export class AboutMeComponent implements OnInit {
    @Input() styleClass: string = ''
    constructor() { }

    ngOnInit() { }
}