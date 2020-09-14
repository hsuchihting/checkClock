import { Component, OnInit } from '@angular/core';
import { HttpPostService } from 'src/app/service/http-post.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-aside-setting',
  templateUrl: './aside-setting.component.html',
  styleUrls: ['./aside-setting.component.scss'],
})
export class AsideSettingComponent implements OnInit {
  active: boolean;
  constructor(
    private http: HttpClient,
    private httpPostService: HttpPostService
  ) {}

  ngOnInit(): void {}

  reasonableBtn() {
    this.active = true;
    return this.active;
  }

  workBtn() {
    this.active = true;
    return this.active;
  }

  userSettingBtn() {
    this.active = true;
    return this.active;
  }
}
