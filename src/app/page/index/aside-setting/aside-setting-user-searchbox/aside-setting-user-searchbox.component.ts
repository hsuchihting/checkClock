import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { resData } from 'src/app/_model/resData';
import { User } from 'src/app/_model/user';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aside-setting-user-searchbox',
  templateUrl: './aside-setting-user-searchbox.component.html',
  styleUrls: ['./aside-setting-user-searchbox.component.scss'],
})
export class AsideSettingUserSearchboxComponent implements OnInit {
  @Input()
  hidden: boolean;

  list: any;
  account: string = '';
  name: string = '';
  email: string = '';
  form: FormGroup;
  submitted = false;
  route: ActivatedRoute;
  constructor(private http: HttpClient, public formBuilder: FormBuilder) {}

  closeBtn() {
    this.hidden = true;
  }

  accessBtn() {
    this.hidden = true;
  }

  // get f() {
  //   return this.form.controls;
  // }

  ngOnInit(): void {
    this.http.post(environment.companyUrl, User).subscribe((res: resData) => {
      console.log('res', res);
      this.list = res.Data;
    });

    this.form = this.formBuilder.group({
      company: ['1', [Validators.required]],
    });
  }

  // onSubmit() {
  //   console.log('form', this.form);
  //   // 取得表單資料
  //   const userData: User = {
  //     CompanySeq: this.form.get('company').value,
  //     Account: this.form.get('account').value,
  //     name: this.form.get('name').value,
  //     email: this.form.get('email').value,

  //   };
  //   // 送出按鈕點擊後事件
  //   this.submitted = true;
  //   console.log(this.submitted);

  //   // post
  //   this.httpPostService.login(userData).subscribe((res) => {
  //     if (res.Code === 101) {
  //       console.log(res.Code);
  //       // const INDEX = 'http://localhost:4200/index';
  //     } else {
  //       console.log('error');
  //       alert('登入失敗，帳號密碼錯誤');
  //     }
  //   });
  // }
}
