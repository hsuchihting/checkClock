import { HttpPostService } from 'src/app/service/http-post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './page/login/login.component';
import { IndexComponent } from './page/index/index.component';

import { AsideComponent } from './page/aside/aside.component';
import { AsideSignInComponent } from './page/index/aside-sign-in/aside-sign-in.component';
import { AsideRecordComponent } from './page/index/aside-record/aside-record.component';
import { AsideResignComponent } from './page/index/aside-resign/aside-resign.component';
import { AsideReportComponent } from './page/index/aside-report/aside-report.component';
import { AsideSettingComponent } from './page/index/aside-setting/aside-setting.component';
import { AsideNavComponent } from './component/aside-nav/aside-nav.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsideSettingReasonableComponent } from './page/index/aside-setting/aside-setting-reasonable/aside-setting-reasonable.component';
import { AsideSettingWorkdaysettingComponent } from './page/index/aside-setting/aside-setting-workdaysetting/aside-setting-workdaysetting.component';
import { AsideSettingUsersettingComponent } from './page/index/aside-setting/aside-setting-usersetting/aside-setting-usersetting.component';
import { AsideSettingUserSearchboxComponent } from './page/index/aside-setting/aside-setting-usersetting/aside-setting-user-searchbox/aside-setting-user-searchbox.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    AsideComponent,
    AsideSignInComponent,
    AsideRecordComponent,
    AsideResignComponent,
    AsideReportComponent,
    AsideSettingComponent,
    AsideNavComponent,
    AsideSettingReasonableComponent,
    AsideSettingWorkdaysettingComponent,

    AsideSettingUsersettingComponent,

    AsideSettingUserSearchboxComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [HttpPostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
