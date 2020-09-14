import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './../../_model/user';

import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpPostService } from 'src/app/service/http-post.service';
import { environment } from './../../../environments/environment';
import { resData } from 'src/app/_model/resData';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  email = true;
  password = true;
  submitted = false;
  list: any;
  noValue = false;
  route: ActivatedRoute;

  // User = {
  //   CompanySeq: 'string',
  //   Account: 'string',
  //   Password: 'string',
  // };

  constructor(
    public formBuilder: FormBuilder,
    private http: HttpClient,
    private httpPostService: HttpPostService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // 匯入公司資料
    this.http.post(environment.companyUrl, User).subscribe((res: resData) => {
      console.log('res', res);
      this.list = res.Data;
    });
    // 表單驗證
    this.form = this.formBuilder.group({
      company: ['1', [Validators.required]], // 預設公司選項為第一個
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // tslint:disable-next-line: typedef
  get f() {
    return this.form.controls;
  }

  // tslint:disable-next-line: typedef
  onSubmit() {
    console.log('form', this.form);
    // 取得表單資料
    const userData: User = {
      CompanySeq: this.form.get('company').value,
      Account: this.form.get('email').value,
      Password: this.form.get('password').value,
    };
    // 送出按鈕點擊後事件
    this.submitted = true;
    console.log(this.submitted);

    // post
    this.httpPostService.login(userData).subscribe((res) => {
      if (res.Code === 101) {
        console.log(res.Code);
        // const INDEX = 'http://localhost:4200/index';
        this.router.navigate(['./index'], {
          relativeTo: this.route,
        });
      } else {
        console.log('error');
        alert('登入失敗，帳號密碼錯誤');
      }
    });
  }
}
