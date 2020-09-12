import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

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
  constructor(private http: HttpClient) {}

  // fetchApi(): Observable<ApiRes[]> {
  //   const url =
  //     'https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json';
  //   return this.http.get(url).pipe(
  //     map((res: ApiRes[]) => {
  //       return res;
  //     })
  //   );
  // }

  getCompany(): Observable<any> {
    const url = environment.companyUrl;
    return this.http.get(url).pipe(
      map((res: any) => {
        console.log('getCompany', res);
        return res;
      })
    );
  }

  postAccount(email, password): Observable<any> {
    const userUrl = environment.loginUrl;
    return this.http.post(userUrl).pipe(
      map((res: any) => {
        console.log('postAccount', res);
        return res;
      })
    );


  }
}
