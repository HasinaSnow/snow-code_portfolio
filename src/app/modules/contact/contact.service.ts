import { Injectable } from "@angular/core";
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    sendMessage($event: Event, messageService: MessageService) {
        $event.preventDefault();

    emailjs
      .sendForm('service_wq11s98', 'template_749ignc', $event.target as HTMLFormElement, {
        publicKey: 'HNhPhfBmWT1kFZ9ZS',
      })
      .then(
        () => {
            messageService.add({ severity: 'success', summary: 'Success', detail: 'Message successfully sended' })
            console.log('SUCCESS!');
        },
        (error) => {
            messageService.add({ severity: 'error', summary: 'Error', detail: `Failed to send message: ${(error as EmailJSResponseStatus).text}` })
            console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
    }
}