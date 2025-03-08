import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @ViewChild('textAreaInput') textAreaInput!: ElementRef;

  @ViewChild('nameRef') nameInputRef!: ElementRef;
  @ViewChild('emailRef') emailInputRef!: ElementRef;
  @ViewChild('textAreaRef') textAreaInputRef!: ElementRef;

  @ViewChild('nameModel') nameInputNgModel!: NgModel;
  @ViewChild('emailModel') emailInputNgModel!: NgModel;
  @ViewChild('textareaModel') textAreaInputNgModel!: NgModel;

  ngAfterViewInit() {}

  privacyAccepted = false;

  mailIsValid: boolean = true;
  nameIsValid: boolean = true;
  textareaIsValid: boolean = true;

  nameRef!: ElementRef;
  emailRef!: ElementRef;
  textareaRef!: ElementRef;

  yourName: string = 'Your name goes here';

  http = inject(HttpClient);

  checkNameInput() {
    if (!this.nameInputNgModel.valid) {
      this.nameRef = this.nameInputRef;
      this.nameIsValid = false;
    }
  }

  checkMailInput() {
    if (!this.emailInputNgModel.valid) {
      this.mailIsValid = false;
    }
  }

  checkTextAreaInput() {
    if (!this.textAreaInputNgModel.valid) {
      this.textareaIsValid = false;
    }
  }

  switchToInput(ref: String) {
    if (ref == 'name') {
      this.nameIsValid = true;
    } else if (ref == 'mail') {
      this.mailIsValid = true;
    } else if (ref == 'textarea') {
      this.textareaIsValid = true;
    }
    // setTimeout(() => {
    //   this.nameInputRef.nativeElement.focus();
    // }, 125);
  }

  checkEmail() {}

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
