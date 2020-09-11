import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideReportComponent } from './aside-report.component';

describe('AsideReportComponent', () => {
  let component: AsideReportComponent;
  let fixture: ComponentFixture<AsideReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
