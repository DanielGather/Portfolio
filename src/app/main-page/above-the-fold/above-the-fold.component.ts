import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  githubImage: string = './../../../assets/img/greenGithub.webp';
  linkedInImage: string = './../../../assets/img/greenLinkedIn.webp';
  mailImage: string = './../../../assets/img/mail.webp';

  changeImage(image: string) {
    if (image == 'github') {
      this.githubImage = './../../../assets/img/hoverGithub.webp';
    } else if (image == 'linkedIn') {
      this.linkedInImage = './../../../assets/img/hoverLinkedIn.webp';
    } else {
      this.mailImage = './../../../assets/img/hoverMail.webp';
    }
  }
  resetImage(image: string) {
    if (image == 'github') {
      this.githubImage = './../../../assets/img/greenGithub.webp';
    } else if (image == 'linkedIn') {
      this.linkedInImage = './../../../assets/img/greenLinkedIn.webp';
    } else {
      this.mailImage = './../../../assets/img/mail.webp';
    }
  }
}
