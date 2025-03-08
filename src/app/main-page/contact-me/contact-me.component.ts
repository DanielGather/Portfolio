import {
  Component,
  inject,
  OnInit,
  AfterViewInit,
  viewChild,
  ViewChild,
} from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact-me',
  imports: [FormsModule, NgIf],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent implements AfterViewInit {
  constructor(private renderer: Renderer2, el: ElementRef) {}
  applyUserNotification = false;
  // @ViewChild('textAreaInput') textAreaInput!: ElementRef;

  nameRef = viewChild.required<ElementRef>('nameRef');
  emailRef = viewChild.required<ElementRef>('emailRef');
  textAreaRef = viewChild.required<ElementRef>('textareaRef');

  nameInputNgModel = viewChild.required<NgModel>('nameModel');
  emailInputNgModel = viewChild.required<NgModel>('emailModel');
  textAreaInputNgModel = viewChild.required<NgModel>('textareaModel');

  ngAfterViewInit() {
    this.nameRef();
  }

  privacyAccepted = false;

  mailIsValid: boolean = true;
  nameIsValid: boolean = true;
  textareaIsValid: boolean = true;

  yourName: string = 'Your name goes here';

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest = false;

  post = {
    endPoint: 'https://daniel-gather.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }
}
