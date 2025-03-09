import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-switch-language',
  imports: [NgClass],
  templateUrl: './switch-language.component.html',
  styleUrl: './switch-language.component.scss',
})
export class SwitchLanguageComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    // this.translate.use(this.translate.getBrowserLang() || 'en');
  }
  en: boolean = true;
  de: boolean = false;

  useLanguage(language: string): void {
    if (language == 'de') {
      this.de = true;
      this.en = false;
    } else {
      this.de = false;
      this.en = true;
    }
    this.translate.use(language);
  }
}
