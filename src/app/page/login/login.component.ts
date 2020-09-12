import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './../../_model/user';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  HttpPostService,
  resDataIndex,
} from 'src/app/service/http-post.service';
import { environment } from './../../../environments/environment';

interface resData {
  Code: number;
  Data: Array<Object>;
  Msg: string;
  Success: boolean;
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
    this.http
      .post(`${environment.companyUrl}`, User)
      .subscribe((res: resData) => {
        console.log('res', res);
        this.list = res.Data;
      });

    // this.httpPostService.getCompany().subscribe((res: resDataIndex[]) => {
    //   console.log(res);
    //   this.list = resDataIndex;
    //   console.log(this.list);
    // });

    this.form = this.formBuilder.group({
      company: ['', [Validators.required]],
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
  }

  getSelect() {
    this.httpPostService.getCompany().subscribe((res: resDataIndex[]) => {
      console.log(res);
      this.list = resDataIndex;
      console.log(this.list);
    });
  }
}
