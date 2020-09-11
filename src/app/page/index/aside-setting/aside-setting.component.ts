import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-setting',
  templateUrl: './aside-setting.component.html',
  styleUrls: ['./aside-setting.component.scss'],
})
export class AsideSettingComponent implements OnInit {
  reasonable = false;
  clockIn = false;
  userSetting = false;
  showBox = false;

  constructor() {}

  reasonableBtn() {
    if (this.reasonable) {
      this.reasonable = !this.reasonable;
      return this.reasonable;
    }
  }

  clockInBtn() {
    this.clockIn = !this.clockIn;
    return this.clockIn;
  }

  userSettingBtn() {
    this.userSetting = !this.userSetting;
    return this.userSetting;
  }

  btnShowBox() {
    this.showBox = true;
    return this.showBox;
  }


  closeBox(){
    this.showBox = false;
  }
  ngOnInit(): void {}
}
