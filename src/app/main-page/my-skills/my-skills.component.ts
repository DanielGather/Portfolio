import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  skills: any = [
    {
      img: './../../../assets/img/skills/HTML.webp',
      tag: 'HTML',
    },
    {
      img: './../../../assets/img/skills/CSS.webp',
      tag: 'CSS',
    },
    {
      img: './../../../assets/img/skills/JavaScript.webp',
      tag: 'JavaScript',
    },
    {
      img: './../../../assets/img/skills/Material-Design.webp',
      tag: 'Material Design',
    },
    {
      img: './../../../assets/img/skills/TypeScript.webp',
      tag: 'TypeScript',
    },
    {
      img: './../../../assets/img/skills/Angular.webp',
      tag: 'Angular',
    },
    {
      img: './../../../assets/img/skills/Firebase.webp',
      tag: 'Firebase',
    },
    {
      img: './../../../assets/img/skills/Git.webp',
      tag: 'Git',
    },
    {
      img: './../../../assets/img/skills/Rest-Api.webp',
      tag: 'Rest-Api',
    },
    {
      img: './../../../assets/img/skills/Scrum.webp',
      tag: 'Scrum',
    },
    {
      img: './../../../assets/img/skills/GrowthMindset.webp',
      tag: 'Growth mindest',
    },
  ];
}
