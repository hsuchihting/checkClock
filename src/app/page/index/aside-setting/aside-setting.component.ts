import { Component, OnInit } from '@angular/core';
import { HttpPostService } from 'src/app/service/http-post.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-aside-setting',
  templateUrl: './aside-setting.component.html',
  styleUrls: ['./aside-setting.component.scss'],
})
export class AsideSettingComponent implements OnInit {
  active: boolean = false;
  showBox = false;
  constructor(
    private http: HttpClient,
    private httpPostService: HttpPostService
  ) {}

  ngOnInit(): void {}

  reasonableBtn() {
    this.active = true;

  }

  workBtn() {
    this.active = true;
  }

  userSettingBtn() {
    this.active = true;

  }

  btnShowBox() {
    this.showBox = true;

  }
}

