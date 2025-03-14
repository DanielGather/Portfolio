import {
  AfterRenderOptions,
  Component,
  Renderer2,
  afterRender,
} from '@angular/core';
import { SwitchLanguageComponent } from '../../switch-language/switch-language.component';
import { TranslateModule } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { AfterViewInit } from '@angular/core';
import { afterNextRender } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import { AfterViewChecked } from '@angular/core';
import { filter } from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [SwitchLanguageComponent, TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  burgerMenuOpen: boolean = false;
  scrollPending: boolean = false;
  constructor(
    public sharedService: SharedService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private scroller: ViewportScroller
  ) {}

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

  ngAfterViewInit(): void {
    if (this.sharedService.impressum()) {
      setTimeout(() => {
        this.scrollToAnchor(null);
      }, 100);
    }
  }

  scrollToAnchor(section: 'aboutMe' | 'skills' | 'projects' | null) {
    if (section !== null) {
      this.setSection(section);
    }
    let elementId: string | null = null;
    if (this.sharedService.aboutMe()) {
      elementId = 'aboutMe';
    } else if (this.sharedService.skills()) {
      elementId = 'skills';
    } else if (this.sharedService.projects()) {
      elementId = 'projects';
    }
    if (elementId) {
      const element = this.document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  setSection(section: 'aboutMe' | 'skills' | 'projects' | null) {
    if (section === 'aboutMe') {
      this.sharedService.aboutMe.set(true);
      this.sharedService.skills.set(false);
      this.sharedService.projects.set(false);
    } else if (section === 'skills') {
      this.sharedService.skills.set(true);
      this.sharedService.aboutMe.set(false);
      this.sharedService.projects.set(false);
    } else if (section === 'projects') {
      this.sharedService.projects.set(true);
      this.sharedService.aboutMe.set(false);
      this.sharedService.skills.set(false);
    }
  }

  closeBurgerMenu(event: Event) {
    event.stopPropagation();
  }
}
