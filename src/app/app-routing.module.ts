import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './page/index/index.component';
import { LoginComponent } from './page/login/login.component';
import { AsideSignInComponent } from './page/index/aside-sign-in/aside-sign-in.component';
import { AsideRecordComponent } from './page/index/aside-record/aside-record.component';
import { AsideResignComponent } from './page/index/aside-resign/aside-resign.component';
import { AsideSettingComponent } from './page/index/aside-setting/aside-setting.component';
import { AsideReportComponent } from './page/index/aside-report/aside-report.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'index',
    component: IndexComponent,
    children: [
      {
        path: 'aside-sign-in',
        component: AsideSignInComponent,
      },
      {
        path: 'aside-record',
        component: AsideRecordComponent,
      },
      {
        path: 'aside-resign',
        component: AsideResignComponent,
      },
      {
        path: 'aside-report',
        component: AsideReportComponent,
      },
      {
        path: 'aside-setting',
        component: AsideSettingComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
