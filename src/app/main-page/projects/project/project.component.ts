import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { Projects } from './projects';
import { NgStyle } from '@angular/common';
import { PopUpWindowComponent } from './pop-up-window/pop-up-window.component';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgStyle, PopUpWindowComponent, NgIf],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  @ViewChild('popupContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  @Input() featuredProjects: Projects[] = [];

  activeProject: Projects | null = null;
  borderColor = '1px solid #3dcfb6';
  shouldClose!: boolean;

  hoverProject(project: Projects) {
    project.hover = true;
  }

  leaveHover(project: Projects) {
    project.hover = false;
  }

  openPopup(project: Projects, featuredProjects: any) {
    console.log(project);
    console.log(featuredProjects);

    this.activeProject = null;
    this.activeProject = project;
    console.log(this.activeProject);
  }

  closePopUp(shouldClose: boolean) {
    if (shouldClose) {
      this.activeProject = null;
    }
  }
}
