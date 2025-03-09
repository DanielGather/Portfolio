import { Component } from '@angular/core';
import { SwitchLanguageComponent } from '../../switch-language/switch-language.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [SwitchLanguageComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
