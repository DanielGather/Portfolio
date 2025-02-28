import { Component, Input } from '@angular/core';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  Projects = [
    {
      projectName: 'Join',
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
      projectName: 'Sharkie',
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
      projectName: 'Sharkie',
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
  ];
}
