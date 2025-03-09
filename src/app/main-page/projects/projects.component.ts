import { Component, Input } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  Projects = [
    {
      projectNumber: '01',
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
      projectNumber: '02',
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
      projectNumber: '03',
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
