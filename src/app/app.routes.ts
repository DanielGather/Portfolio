import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AppComponent } from './app.component';
import { LegalNoticeComponent } from './main-page/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './main-page/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: '', component: MainPageComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];
