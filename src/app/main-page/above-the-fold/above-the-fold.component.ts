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

  changeImage(image: string) {
    if (image == 'github') {
      this.githubImage = './../../../assets/img/hoverGithub.webp';
    } else {
      this.linkedInImage = './../../../assets/img/hoverLinkedIn.webp';
    }
  }
  resetImage(image: string) {
    if (image == 'github') {
      this.githubImage = './../../../assets/img/greenGithub.webp';
    } else {
      this.linkedInImage = './../../../assets/img/greenLinkedIn.webp';
    }
  }
}
