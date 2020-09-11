import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-sign-in',
  templateUrl: './aside-sign-in.component.html',
  styleUrls: ['./aside-sign-in.component.scss'],
})
export class AsideSignInComponent implements OnInit {
  today = Date.now();
  constructor() {}

  ngOnInit(): void {}
}
