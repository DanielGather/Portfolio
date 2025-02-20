import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent implements OnInit, OnDestroy {
  constructor() {}

  resizeSubscription?: Subscription;

  githubImage: string = './../../../assets/img/greenGithub.webp';
  linkedInImage: string = './../../../assets/img/greenLinkedIn.webp';
  mailImage: string = './../../../assets/img/mail.webp';

  responsive?: boolean;

  ngOnInit(): void {
    this.resizeSubscription = fromEvent(window, 'resize')
      .pipe(debounceTime(200)) // Verhindert, dass zu viele Events hintereinander verarbeitet werden
      .subscribe((event: Event) => {
        console.log('Resize-Event erkannt:', event);
        if (window.innerWidth < 700) {
          this.responsive = true;
        } else if (window.innerWidth > 700) {
          this.responsive = false;
        }
        // Hier kannst du weitere Logik einfügen
      });
  }

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

  checkResize() {}

  ngOnDestroy(): void {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
}
