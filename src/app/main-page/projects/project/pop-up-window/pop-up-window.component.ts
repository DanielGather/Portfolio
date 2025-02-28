import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Projects } from '../projects';

@Component({
  selector: 'app-pop-up-window',
  standalone: true,
  imports: [],
  templateUrl: './pop-up-window.component.html',
  styleUrl: './pop-up-window.component.scss',
})
export class PopUpWindowComponent {
  @Input() popupProject!: Projects | null;

  @Output() closeDialog = new EventEmitter<null>();

  closePopUp() {
    this.closeDialog.emit(null);
  }
}
