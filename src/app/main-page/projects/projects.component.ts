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
      technologiesUsed: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      hover: false,
      imgProject: './../../../../assets/img/joinProject.webp',
    },
    {
      projectName: 'Sharkie',
      technologiesUsed: ['HTML', 'CSS', 'JavaScript'],
      hover: false,
      imgProject: './../../../../assets/img/sharkieProject.webp',
    },
    {
      projectName: 'Join',
      technologiesUsed: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      hover: false,
      imgProject: './../../../../assets/img/joinProject.webp',
    },
    {
      projectName: 'Join',
      technologiesUsed: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      hover: false,
      imgProject: './../../../../assets/img/joinProject.webp',
    },
  ];
}
