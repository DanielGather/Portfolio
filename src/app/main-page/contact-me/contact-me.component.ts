import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('textAreaInput') textAreaInput!: ElementRef;

  privacyAccepted = false;

  yourName: string = 'Your name goes here';

  http = inject(HttpClient);

  checkNameInput() {
    if (this.nameInput.nativeElement.value == '') {
      this.yourName = 'Your name is missing';
      this.renderer.addClass(this.nameInput.nativeElement, 'empty');
    } else {
      this.renderer.removeClass(this.nameInput.nativeElement, 'empty');
    }
    console.log('test', this.nameInput.nativeElement.value);
  }

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
