import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideResignComponent } from './aside-resign.component';

describe('AsideResignComponent', () => {
  let component: AsideResignComponent;
  let fixture: ComponentFixture<AsideResignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideResignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideResignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
