import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
  Renderer2,
  Inject,
} from '@angular/core';
import { Projects } from './projects';
import { NgStyle } from '@angular/common';
import { PopUpWindowComponent } from './pop-up-window/pop-up-window.component';
import { NgIf } from '@angular/common';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgStyle, PopUpWindowComponent, NgIf],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}
  @ViewChild('popupContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  @Input() featuredProjects: Projects[] = [];

  activeProject: Projects | null = null;
  borderColor = '1px solid #3dcfb6';
  activeIndex: number = -1;
  shouldClose!: boolean;
  nextProject!: boolean;

  hoverProject(project: Projects) {
    project.hover = true;
  }

  leaveHover(project: Projects) {
    project.hover = false;
  }

  openPopup(index: number) {
    this.activeIndex = index;
    this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
    this.activeProject = this.featuredProjects[index];
  }

  closePopUp(shouldClose: boolean) {
    if (shouldClose) {
      this.activeProject = null;
      this.activeIndex = -1;
      this.renderer.removeStyle(this.document.body, 'overflow');
    }
  }

  showNextProject() {
    if (this.activeIndex < this.featuredProjects.length - 1) {
      this.activeIndex++; // Nächstes Projekt setzen
      this.activeProject = this.featuredProjects[this.activeIndex];
    } else {
      this.activeProject = this.featuredProjects[0];
      this.activeIndex = 0;
    }
  }
}
