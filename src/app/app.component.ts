import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { LegalNoticeComponent } from './main-page/legal-notice/legal-notice.component';

@Component({
  selector: 'app-root',
  imports: [
    MainPageComponent,
    LegalNoticeComponent,
    TranslateModule,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  title = 'Daniel Gather';
}
