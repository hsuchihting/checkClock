import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideRecordComponent } from './aside-record.component';

describe('AsideRecordComponent', () => {
  let component: AsideRecordComponent;
  let fixture: ComponentFixture<AsideRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
