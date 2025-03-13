import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { WhatMyColleaguesSayAboutMeComponent } from './what-my-colleagues-say-about-me/what-my-colleagues-say-about-me.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

@Component({
  selector: 'app-main-page',
  imports: [
    HeaderComponent,
    AboutMeComponent,
    AboveTheFoldComponent,
    ContactMeComponent,
    MySkillsComponent,
    ProjectsComponent,
    WhatMyColleaguesSayAboutMeComponent,
    FooterComponent,
    HeaderComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  host: { class: 'main-page' },
})
export class MainPageComponent {}
