import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-switch-language',
    imports: [NgClass],
    templateUrl: './switch-language.component.html',
    styleUrl: './switch-language.component.scss'
})
export class SwitchLanguageComponent {
  en: boolean = true;
  de: boolean = false;

  changeLanguage(language: string) {
    if (language == 'de') {
      this.de = true;
      this.en = false;
    } else {
      this.de = false;
      this.en = true;
    }
  }
}
