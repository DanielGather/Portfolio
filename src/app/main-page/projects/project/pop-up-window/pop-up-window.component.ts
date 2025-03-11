import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Projects } from '../projects';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-pop-up-window',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './pop-up-window.component.html',
  styleUrl: './pop-up-window.component.scss',
})
export class PopUpWindowComponent {
  @Input() popupProject!: Projects | null;

  @Output() closeDialog = new EventEmitter<boolean>();

  @Output() nextProject = new EventEmitter<boolean>();

  closePopUp(event: MouseEvent, shouldClose: boolean): void {
    event.stopPropagation();
    this.closeDialog.emit(shouldClose);
  }

  showNextProject() {
    this.nextProject.emit();
  }
}
