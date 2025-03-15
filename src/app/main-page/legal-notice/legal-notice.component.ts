import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { OnDestroy } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  imports: [HeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
  host: {
    class: 'page',
  },
})
export class LegalNoticeComponent implements OnDestroy {
  constructor(public sharedService: SharedService) {}
  ngOnDestroy() {
    this.sharedService.impressum.set(true);
  }
}
