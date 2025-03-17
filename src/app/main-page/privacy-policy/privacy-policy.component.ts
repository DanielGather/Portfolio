import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SharedService } from '../../services/shared.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  imports: [HeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
  host: {
    class: 'page',
  },
})
export class PrivacyPolicyComponent {
  constructor(public sharedService: SharedService) {}

  ngOnDestroy() {
    this.sharedService.impressum.set(true);
  }
}
