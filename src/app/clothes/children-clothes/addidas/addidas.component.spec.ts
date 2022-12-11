import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddidasComponent } from './addidas.component';

describe('AddidasComponent', () => {
  let component: AddidasComponent;
  let fixture: ComponentFixture<AddidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
