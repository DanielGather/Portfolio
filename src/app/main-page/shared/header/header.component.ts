import { Component, Renderer2 } from '@angular/core';
import { SwitchLanguageComponent } from '../../switch-language/switch-language.component';
import { TranslateModule } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [SwitchLanguageComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private scroller: ViewportScroller
  ) {}
  burgerMenuOpen: boolean = false;

  toggleBurgerMenu(event: Event) {
    setTimeout(() => {
      event.preventDefault();
      event?.stopPropagation();
      if (this.burgerMenuOpen) {
        this.renderer.removeStyle(this.document.body, 'overflow');
      } else {
        this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
      }
      this.burgerMenuOpen = !this.burgerMenuOpen;
    }, 10);
  }

  scrollToAnchor() {
    this.scroller.scrollToAnchor('skills');
  }

  closeBurgerMenu(event: Event) {
    event.stopPropagation();
  }
}
