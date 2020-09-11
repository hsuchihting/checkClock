import { User } from './../../_model/user';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpPostService, ApiRes } from 'src/app/service/http-post.service';

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
  ) {
    this.http.post(`${environment.companyUrl}`, User).subscribe((data) => {
      console.log(data);
    });


  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // tslint:disable-next-line: typedef
  get f() {
    return this.form.controls;
  }

  // tslint:disable-next-line: typedef
  onSubmit() {}

  getSelect() {
    this.httpPostService.getCompany().subscribe((res: ApiRes[]) => {
      console.log(res);
    });
  }
}
