import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenStaffComponent } from './women-staff.component';

describe('WomenStaffComponent', () => {
  let component: WomenStaffComponent;
  let fixture: ComponentFixture<WomenStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
