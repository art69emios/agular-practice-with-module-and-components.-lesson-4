import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensClothesComponent,WomensClothesComponent,ChildrenClothesComponent } from './index';
import { AddidasComponent } from './children-clothes/addidas/addidas.component';
import { NikeComponent } from './children-clothes/nike/nike.component';
import { PumaComponent } from './children-clothes/puma/puma.component';
import { BootsComponent } from './mens-clothes/boots/boots.component';
import { PantsComponent } from './mens-clothes/pants/pants.component';
import { SocksComponent } from './mens-clothes/socks/socks.component';
import { DressComponent } from './womens-clothes/dress/dress.component';
import { WomenStaffComponent } from './womens-clothes/women-staff/women-staff.component';



@NgModule({
  declarations: [
    MensClothesComponent,
    WomensClothesComponent,
    ChildrenClothesComponent,
    AddidasComponent,
    NikeComponent,
    PumaComponent,
    BootsComponent,
    PantsComponent,
    SocksComponent,
    DressComponent,
    WomenStaffComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClothesModule { }
