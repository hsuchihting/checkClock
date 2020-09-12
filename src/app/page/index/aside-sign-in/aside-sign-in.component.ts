import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-aside-sign-in',
  templateUrl: './aside-sign-in.component.html',
  styleUrls: ['./aside-sign-in.component.scss'],
})
export class AsideSignInComponent implements OnInit {
  today = Date.now();

  timeObservable$: Observable<any>;

  constructor() {}

  ngOnInit(): void {
    this.timeObservable$ = interval(1000);
  }

  clockIn() {
    // 與後端時間接收格式
    alert('OK');
  }

  clockOut() {
    alert('errors');
  }
}
