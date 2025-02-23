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
  projects = [
    {
      projectName: 'Join',
      technologiesUsed: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    },
    {
      projectName: 'El Pollo Loco',
      technologiesUsed: ['HTML', 'CSS', 'JavaScript'],
    },
  ];
}
