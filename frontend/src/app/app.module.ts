import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppHeaderComponent} from "./components/header/app-header";
import {HomeComponent} from "./components/home/app-home";
import {ModalLoginComponent} from "./components/loginForm/modal-login";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        AppHeaderComponent,
        HomeComponent,
        ModalLoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
