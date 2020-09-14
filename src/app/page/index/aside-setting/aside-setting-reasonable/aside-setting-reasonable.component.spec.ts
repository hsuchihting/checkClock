import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideSettingReasonableComponent } from './aside-setting-reasonable.component';

describe('AsideSettingReasonableComponent', () => {
  let component: AsideSettingReasonableComponent;
  let fixture: ComponentFixture<AsideSettingReasonableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideSettingReasonableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideSettingReasonableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
