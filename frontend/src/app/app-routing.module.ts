import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/app-home";
import {DatabaseComponent} from "./components/database/app-database";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'database', component: DatabaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
