import { Component, Input } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  Projects = [
    {
      projectNumber: '01',
      projectName: 'Join',
      active: true,
      description:
        'A task manager inspired by the Kanban system: create and organize tasks using drag-and-drop functionality, assign users, and categorize tasks.',
      technologyUsed: [
        {
          technology: 'HTML',
          technologyImg: './../../../../../assets/img/pop-up-window/HTML.webp',
        },
        {
          technology: 'CSS',
          technologyImg: './../../../../../assets/img/pop-up-window/CSS.webp',
        },
        {
          technology: 'JavaScript',
          technologyImg:
            './../../../../../assets/img/pop-up-window/JavaScript.webp',
        },
        {
          technology: 'Firebase',
          technologyImg:
            './../../../../../assets/img/pop-up-window/Firebase.webp',
        },
      ],
      hover: false,
      imgProject: './../../../../assets/img/joinProject.webp',
    },
    {
      projectNumber: '02',
      projectName: 'Sharkie',
      active: true,
      description:
        'Take control of Sharkie, the fearless fish, and battle your way through the depths of the ocean! Collect coins and use bottles to execute powerful attacks. Defeat smaller fish and face an increasingly challenging final boss in each level.',
      technologyUsed: [
        {
          technology: 'HTML',
          technologyImg: './../../../../../assets/img/pop-up-window/HTML.webp',
        },
        {
          technology: 'CSS',
          technologyImg: './../../../../assets/img/pop-up-window/CSS.webp',
        },
        {
          technology: 'JavaScript',
          technologyImg:
            './../../../../../assets/img/pop-up-window/JavaScript.webp',
        },
      ],
      hover: false,
      imgProject: './../../../../assets/img/sharkieProject.webp',
    },
    {
      projectNumber: '03',
      projectName: 'DABubble COMING SOON',
      active: false,
      description:
        'This application, inspired by Slack, provides an intuitive solution for enhancing internal communication. With real-time messaging and a well-organized channel structure, team interaction is significantly simplified.',
      technologyUsed: [
        {
          technology: 'Angular',
          technologyImg:
            './../../../../../assets/img/pop-up-window/Angular.webp',
        },
        {
          technology: 'Firebase',
          technologyImg:
            './../../../../../assets/img/pop-up-window/Firebase.webp',
        },
        {
          technology: 'HTML',
          technologyImg: './../../../../../assets/img/pop-up-window/HTML.webp',
        },
        {
          technology: 'CSS',
          technologyImg: './../../../../assets/img/pop-up-window/CSS.webp',
        },
        {
          technology: 'Typescript',
          technologyImg:
            './../../../../../assets/img/pop-up-window/TypeScript.webp',
        },
      ],
      hover: false,
      imgProject: './../../../../assets/img/comingSoon.webp',
    },
  ];
}
