import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildrenstaffModule } from './childrenstaff/childrenstaff.module';
import { ClothesModule } from './clothes/clothes.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChildrenstaffModule,
    ClothesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
