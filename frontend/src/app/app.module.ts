import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppHeaderComponent} from "./components/header/app-header";
import {HomeComponent} from "./components/home/app-home";
import {ModalLoginComponent} from "./components/loginForm/modal-login";
import {ReactiveFormsModule} from "@angular/forms";
import {ModalRegistryComponent} from "./components/registryForm/modal-registry";
import {DatabaseComponent} from "./components/database/app-database";
import { RouterModule } from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./security/authInterceptor";


@NgModule({
    declarations: [
        AppComponent,
        AppHeaderComponent,
        DatabaseComponent,
        HomeComponent,
        ModalLoginComponent,
        ModalRegistryComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule
    ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
