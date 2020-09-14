import { User } from './../_model/user';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { addClock } from '../_model/addClock';
import { getClockDayData } from '../_model/getClockDayData';
import { getServerTime } from '../_model/getServerTime';

export class resCompany {
  Code: number;
  Data: string;
  Success: boolean;
}

export class resDataIndex {
  Data = [
    {
      CompanyName: '東捷資訊(ITTS)',
      CompanySeq: 1,
    },
    {
      CompanyName: '優捷勝(UNIS)',
      CompanySeq: 2,
    },
    {
      CompanyName: '无锡东捷(WUXI)',
      CompanySeq: 3,
    },
    {
      CompanyName: '東元電機測試',
      CompanySeq: 4,
    },
  ];
}

@Injectable({
  providedIn: 'root',
})
export class HttpPostService {
  constructor(public http: HttpClient) {}

  // 取得公司清單
  getCompany(): Observable<any> {
    const url = environment.companyUrl;
    return this.http.get(url).pipe(
      map((res: any) => {
        console.log('getCompany', res);
        return res;
      })
    );
  }

  // 傳送帳號密碼
  postAccount(params: User): Observable<any> {
    const url = environment.GetUserDataUrl;
    return this.http.post(url, params).pipe(
      map((res: any) => {
        console.log('postAccount', res);
        return res;
      })
    );
  }

  // 登入

  login(params: User): Observable<any> {
    const url = environment.loginUrl;
    return this.http.post(url, params).pipe(
      map((res: any) => {
        console.log('login', res);
        return res;
      })
    );
  }

  // 新增打卡時間
  addClock(params: addClock): Observable<any> {
    const url = environment.addClockUrl;
    return this.http.post(url, params).pipe(
      map((res: any) => {
        console.log('addClock', res);
        return res;
      })
    );
  }

  // 取得 server 時間
  getServerTime(params: getServerTime): Observable<any> {
    const url = environment.getServerTimeUrl;
    return this.http.get(url).pipe(
      map((res: any) => {
        console.log('getServerTime', res);
        return res;
      })
    );
  }

  // 取得當日打卡資訊
  getClockDayData(params: getClockDayData): Observable<any> {
    const url = environment.getClockDataUrl;
    return this.http.post(url, params).pipe(
      map((res: any) => {
        console.log('getClockDayData', res);
        return res;
      })
    );
  }
}
