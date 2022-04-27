import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppHeaderComponent} from "./components/header/app-header";
import {HomeComponent} from "./components/home/home";

@NgModule({
    declarations: [
        AppComponent,
        AppHeaderComponent,
        HomeComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
