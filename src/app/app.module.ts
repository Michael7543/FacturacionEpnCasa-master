import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrimengModule } from "./primeng/primeng.module";//A


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PrimengModule,//A
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
