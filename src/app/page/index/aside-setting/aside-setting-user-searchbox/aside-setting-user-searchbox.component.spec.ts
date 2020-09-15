import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideSettingUserSearchboxComponent } from './aside-setting-user-searchbox.component';

describe('AsideSettingUserSearchboxComponent', () => {
  let component: AsideSettingUserSearchboxComponent;
  let fixture: ComponentFixture<AsideSettingUserSearchboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideSettingUserSearchboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideSettingUserSearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
