import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoolComponent } from './shool.component';

describe('ShoolComponent', () => {
  let component: ShoolComponent;
  let fixture: ComponentFixture<ShoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
