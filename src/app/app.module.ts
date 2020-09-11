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
import { AlertComponent } from './component/alert/alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    AlertComponent,
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
