import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AppComponent } from './app.component';
import { LegalNoticeComponent } from './main-page/legal-notice/legal-notice.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: '', component: MainPageComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
];
