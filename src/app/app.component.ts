import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { AboveTheFoldComponent } from "./above-the-fold/above-the-fold.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { MySkillsComponent } from "./my-skills/my-skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { WhatMyColleaguesSayAboutMeComponent } from "./what-my-colleagues-say-about-me/what-my-colleagues-say-about-me.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, AboveTheFoldComponent, AboutMeComponent, MySkillsComponent,ProjectsComponent, WhatMyColleaguesSayAboutMeComponent, ContactMeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Daniel Gather';
}
