import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { resData, User } from './../../_model/user';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  HttpPostService,
  resDataIndex,
} from 'src/app/service/http-post.service';
import { environment } from './../../../environments/environment';

interface backData {
  Account: string;
  UserName: string;
  UserRole: number;
  IsLeader: number;
  TokenID: string;
}

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
    // 取得 select 資料
    this.http
      .post(`${environment.companyUrl}`, User)
      .subscribe((res: resData) => {
        console.log('res', res);
        this.list = res.Data;
      });

    this.form = this.formBuilder.group({
      company: ['1', [Validators.required]],
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

    this.httpPostService.postAccount(userData).subscribe((res) => {
      if (res.Success) {
        console.log('success');
      } else {
        console.log('error');
      }
    });
  }

  getSelect() {
    this.httpPostService.getCompany().subscribe((res: resDataIndex) => {
      console.log(res);
      this.list = resDataIndex;
      console.log(this.list);
    });
  }
}
