import { Component, OnInit } from '@angular/core';

import { getServerTime } from './../../../_model/getServerTime';
import { HttpPostService } from 'src/app/service/http-post.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { addClock } from 'src/app/_model/addClock';

@Component({
  selector: 'app-aside-sign-in',
  templateUrl: './aside-sign-in.component.html',
  styleUrls: ['./aside-sign-in.component.scss'],
})
export class AsideSignInComponent implements OnInit {
  today: Date;
  date: string;
  Data: any;
  ServerTime: string;

  constructor(
    private http: HttpClient,
    private httpPostService: HttpPostService
  ) {}
  // 時鐘
  ngOnInit(): void {
    // 取得 server 時間
    this.today = new Date();
    setInterval(() => {
      this.today = new Date();
    }, 1000);

    // 用innerHTML渲染於網頁

    // 送出打卡時間
    this.http
      .post(environment.getServerTimeUrl, addClock)
      .subscribe((res: getServerTime) => {
        console.log('res', res);
        this.Data.ServerTime = res.Data.ServerTime;
      });
  }

  getClockTime() {
    // 點擊取得時間的值
    // 判斷時間區間
    // post 到後端
    // 回傳資料
    // const addClock: addClock = {
    //   TokenID: this.Data.TokenID.value,
    //   ClockType: this.Data.ClockType.value,
    //   AttendanceDatetime: this.Data.AttendanceDatetime.value,
    //   ReasonSeq: this.Data.ReasonSeq.value,
    // };
    // this.httpPostService.addClock().subscribe((res) => {
    //   console.log(res);
    // });
  }
}
