import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, OnInit, WritableSignal, inject, signal } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ContactService } from "../contact.service";
import { ToastModule } from "primeng/toast";

declare const grecaptcha: any;
@Component({
    selector: 'app-contact-form',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        InputTextModule,
        InputTextareaModule,
        ButtonModule,
        ToastModule
    ],
    providers: [MessageService],
    template: `
    <form [formGroup]="contactForm" (submit)="onSubmit($event)" class="flex flex-col gap-3">
        <!-- name -->
        <div class="flex flex-col gap-2">
            <label for="name" class="m-0 p-0">Your Name :</label>
            <input name="name" formControlName="name" id="name" type="text" [ngClass]="{'ng-invalid ng-dirty' : contactForm.controls['name'].touched && contactForm.controls['name'].errors }" pInputText/>
            <div class="error-container text-end text-sm error-container">
                @if(contactForm.controls['name'].touched && contactForm.controls['name'].errors) {
                    <small id="idCateg-error" *ngIf="contactForm.controls['name'].errors?.['required']" class="ml-2 text-red-500 font-semibold">Your name is required*</small>
                    <small id="idCateg-error" *ngIf="contactForm.controls['name'].errors?.['minlength']" class="ml-2 text-red-500 font-semibold">min length 3*</small>
                } @else {
                    <span class="invisible"></span>
                }
            </div>
        </div>

        <!-- email -->
        <div class="flex flex-col gap-2">
            <label for="email" class="m-0 p-0">Your Email :</label>
            <input name="email" formControlName="email" id="email" type="email" [ngClass]="{'ng-invalid ng-dirty' : contactForm.controls['email'].touched && contactForm.controls['email'].errors }" pInputText/>
            <div class="error-container text-end text-sm">
                @if(contactForm.controls['email'].touched && contactForm.controls['email'].errors) {
                    <small id="idCateg-error" *ngIf="contactForm.controls['email'].touched && contactForm.controls['email'].errors?.['required']" class="ml-2 text-red-500 font-semibold">Your email is required*</small>
                    <small id="idCateg-error" *ngIf="contactForm.controls['email'].errors?.['pattern']" class="ml-2 text-red-500 font-semibold">email invalid*</small>
                } @else {
                    <span class="invisible"></span>
                }
            </div>
        </div>

        <!-- message -->
        <div class="flex flex-col gap-2">
            <label for="sms" class="m-0 p-0">Your Message :</label>
            <textarea name="message" formControlName="message" id="sms" [ngClass]="{'ng-invalid ng-dirty' : contactForm.controls['message'].touched && contactForm.controls['message'].errors }" rows="5" cols="30" pInputTextarea></textarea>
            <div class="error-container text-end text-sm">
                @if(contactForm.controls['message'].touched && contactForm.controls['message'].errors) {
                    <small id="idCateg-error" *ngIf="contactForm.controls['message'].errors?.['required']" class="ml-2 text-red-500 font-semibold">Your message is required*</small>
                    <small id="idCateg-error" *ngIf="contactForm.controls['message'].errors?.['minlength']" class="ml-2 text-red-500 font-semibold">min length 3*</small>
                    <small id="idCateg-error" *ngIf="contactForm.controls['message'].errors?.['maxlength']" class="ml-2 text-red-500 font-semibold">max length 1000*</small>
                } @else {
                    <span class="invisible"></span>
                }
            </div>
        </div>

        <div class="text-end">
            <p-toast position="top-left" styleClass="text-start"/>
            <!-- <div class="g-recaptcha" data-sitekey="6LcaSVkqAAAAAOwDFL-sf6iQQPyf861f6P0whxod" data-callback="onCaptchaVerified"></div> -->
            <div id="recaptcha"></div>
            <br/>
            <p-button icon="pi pi-send" [disabled]="contactForm.invalid || !isCaptchaVerified()" label="Send" type="submit"></p-button>
        </div>
    </form> `
})
export class ContactFormComponent implements OnInit, AfterViewInit {
    messageService = inject(MessageService)
    contactService = inject(ContactService)
    contactForm!: FormGroup
    isCaptchaVerified: WritableSignal<boolean> = signal(false);

    ngOnInit() {
        if(typeof window !== 'undefined')
            (window as any).onCaptchaVerified = this.onCaptchaVerified.bind(this);
        this.contactForm = new FormGroup({
            name: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
            email: new FormControl<string>('', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]),
            message: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.maxLength(1000)]),
        })
    }

    ngAfterViewInit() {
        if(typeof window !== 'undefined')
            (window as any).onCaptchaLoad = this.onCaptchaLoad.bind(this);
        this.loadRecaptcha();
    }

    onCaptchaVerified() {
        if (grecaptcha.getResponse()) {
            this.isCaptchaVerified.set(true)
        }
    }

    loadRecaptcha() {
        if(typeof window !== 'undefined') {
            const script = document.createElement('script');
            script.src = `https://www.google.com/recaptcha/api.js?onload=onCaptchaLoad&render=explicit`;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        }
    }

    onCaptchaLoad() {
        // Callback de reCAPTCHA lorsque le script est chargé
        if (typeof grecaptcha !== 'undefined') {
            grecaptcha.render('recaptcha', {
              'sitekey': '6LcaSVkqAAAAAOwDFL-sf6iQQPyf861f6P0whxod',
              'callback': this.onCaptchaVerified.bind(this),
            });
          } else {
            console.error('grecaptcha est indéfini.');
          }
    }

    onSubmit($event: Event) {
        this.contactForm.markAllAsTouched()

        if(this.contactForm.invalid) {
            this.messageService.add({ severity: 'error', summary: 'Error informations', detail: "Please verify your informations." })
        } else {
            if(!this.isCaptchaVerified()) {
                this.messageService.add({ severity: 'warn', summary: 'Recaptcha unchecked', detail: "Please verify that you are not a robot by checking the reCAPTCHA box." })
            } else {
                this.contactService.sendMessage($event, this.messageService)
                this.resetContactForm() // Reset the form after successful submission
            }
        }
    }

    resetContactForm() {
        grecaptcha.reset();
        this.isCaptchaVerified.set(false)
        this.contactForm.reset();
    }
}