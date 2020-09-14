import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideSettingWorkdaysettingComponent } from './aside-setting-workdaysetting.component';

describe('AsideSettingWorkdaysettingComponent', () => {
  let component: AsideSettingWorkdaysettingComponent;
  let fixture: ComponentFixture<AsideSettingWorkdaysettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideSettingWorkdaysettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideSettingWorkdaysettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
