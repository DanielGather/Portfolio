import { Component } from '@angular/core';
import { SwitchLanguageComponent } from '../../switch-language/switch-language.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SwitchLanguageComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
