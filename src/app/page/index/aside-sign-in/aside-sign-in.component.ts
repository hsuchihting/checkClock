import { addClock, getClockDayData, getServerTime } from './../../../_model/user';
import { HttpPostService } from 'src/app/service/http-post.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aside-sign-in',
  templateUrl: './aside-sign-in.component.html',
  styleUrls: ['./aside-sign-in.component.scss'],
})
export class AsideSignInComponent implements OnInit {
  today: Date;
  list: any;
  Data: any;

  // timeObservable$: Observable<any>;

  constructor(
    private http: HttpClient,
    private httpPostService: HttpPostService
  ) {}
  // 時鐘
  ngOnInit(): void {
    this.today = new Date();
    setInterval(() => {
      this.today = new Date();
    }, 1000);

    // 取得打卡時間
    this.http
      .post(environment.addClockUrl, addClock)
      .subscribe((res: addClock) => {
        console.log('res', res);
        this.list = res.Data.ServerTime;
      });
  }

  clockIn() {
    const getServerTime: getServerTime = {
      serverTime: this.Data.post('Data.serverTime').value,
    };
    this.httpPostService.addClock(getServerTime).subscribe((res) => {
      console.log(res.Data.ServerTime);
    });
  }

  clockOut() {
    alert('errors');
  }
}
