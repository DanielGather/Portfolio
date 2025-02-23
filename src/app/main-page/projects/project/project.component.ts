import { Component, Input } from '@angular/core';
import { Projects } from './projects';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  @Input() test: string = 'Ich funktioniere';

  borderColor = '1px solid #3dcfb6';

  @Input() featuredProjects: Projects[] = [];
}
