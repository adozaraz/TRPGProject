import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/app-home";
import {DatabaseComponent} from "./components/database/app-database";
import {AuthGuardService} from "./security/auth-guard.service";
import {ModalSettingsComponent} from "./components/settings/modal-settings";
import {ModalCharacterComponent} from "./components/characterListEditor/modal-character";

const routes: Routes = [
    { path: 'database', component: DatabaseComponent },
    { path: 'settings', component: ModalSettingsComponent, canActivate: [AuthGuardService]},
    { path: 'characterCreation', component: ModalCharacterComponent, canActivate: [AuthGuardService]},
    { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
    providers: [AuthGuardService]
})
export class AppRoutingModule { }
