import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-aside-setting',
  templateUrl: './aside-setting.component.html',
  styleUrls: ['./aside-setting.component.scss'],
})
export class AsideSettingComponent implements OnInit {
  // tslint:disable-next-line: member-ordering
  @Output()
  hidden = new EventEmitter<any>();

  active: boolean = false;
  constructor(
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
    this.hidden.emit(this.hidden);
  }
}
