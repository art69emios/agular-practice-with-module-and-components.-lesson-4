import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PampersComponent } from './childrenstaff/pampers/pampers.component';
import { ShoolComponent } from './childrenstaff/shool/shool.component';
import { ToysComponent } from './childrenstaff/toys/toys.component';
import { ChildrenClothesComponent } from './clothes/children-clothes/children-clothes.component';
import { MensClothesComponent } from './clothes/mens-clothes/mens-clothes.component';
import { WomensClothesComponent } from './clothes/womens-clothes/womens-clothes.component';

const routes: Routes = [
  {path:'pampers', component:PampersComponent},
  {path:'shool', component:ShoolComponent},
  {path:'toys', component:ToysComponent},
  {path:'ChildrenClothes', component:ChildrenClothesComponent},
  {path:'MensClothes', component:MensClothesComponent},
  {path:'WomensClothes', component:WomensClothesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
