import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenClothesComponent } from './children-clothes.component';

describe('ChildrenClothesComponent', () => {
  let component: ChildrenClothesComponent;
  let fixture: ComponentFixture<ChildrenClothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenClothesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
