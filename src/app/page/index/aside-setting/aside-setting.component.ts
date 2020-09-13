import { Component, OnInit } from '@angular/core';
import { HttpPostService } from 'src/app/service/http-post.service';
import { HttpClient } from '@angular/common/http';
import { resData, User } from 'src/app/_model/user';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-aside-setting',
  templateUrl: './aside-setting.component.html',
  styleUrls: ['./aside-setting.component.scss'],
})
export class AsideSettingComponent implements OnInit {
  reasonable = false;
  clockIn = false;
  userSetting = false;
  showBox = false;
  list: any;

  constructor(
    private http: HttpClient,
    private httpPostService: HttpPostService
  ) {}

  ngOnInit(): void {
    this.http
      .post(`${environment.companyUrl}`, User)
      .subscribe((res: resData) => {
        console.log('res', res);
        this.list = res.Data;
      });
  }

  reasonableBtn() {
    if (this.reasonable) {
      this.reasonable = !this.reasonable;
      return this.reasonable;
    }
  }

  clockInBtn() {
    this.clockIn = !this.clockIn;
    return this.clockIn;
  }

  userSettingBtn() {
    this.userSetting = !this.userSetting;
    return this.userSetting;
  }

  btnShowBox() {
    this.showBox = true;
    return this.showBox;
  }

  closeBox() {
    this.showBox = false;
  }
}
