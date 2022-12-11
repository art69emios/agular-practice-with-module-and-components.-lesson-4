import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PampersComponent } from './pampers.component';

describe('PampersComponent', () => {
  let component: PampersComponent;
  let fixture: ComponentFixture<PampersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PampersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PampersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
