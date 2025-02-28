import { Component, Input } from '@angular/core';
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
}
