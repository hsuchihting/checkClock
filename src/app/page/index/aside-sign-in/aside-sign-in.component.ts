import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-sign-in',
  templateUrl: './aside-sign-in.component.html',
  styleUrls: ['./aside-sign-in.component.scss'],
})
export class AsideSignInComponent implements OnInit {
  today: Date;

  // timeObservable$: Observable<any>;

  constructor() {}

  ngOnInit(): void {
    // this.timeObservable$ = interval(1000);
    this.today = new Date();
    setInterval(() => {
      this.today = new Date();
    }, 1000);
  }

  clockIn() {
    // 與後端時間接收格式
    alert('OK');
  }

  clockOut() {
    alert('errors');
  }
}
