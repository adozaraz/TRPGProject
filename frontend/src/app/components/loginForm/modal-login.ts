import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {AuthLoginInfo} from "../../security/login-info";
import {TokenStorageService} from "../../security/token-storage.service";

@Component({
    selector: 'modal-login',
    templateUrl: './modal-login.html',
    styleUrls: ['./modal-login.scss']
})
export class ModalLoginComponent {
    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        public userService: UserService,
        public tokenStorage: TokenStorageService
    ) {
        this.loginForm = this.formBuilder.group({
            login: new FormControl(),
            password: new FormControl()
        });
    }

    onSubmit(): void {
        let loginInfo = new AuthLoginInfo(null, this.loginForm.get("login")?.value, this.loginForm.get("password")?.value);
        this.userService.attemptAuth(loginInfo).subscribe((data) => {
            this.tokenStorage.saveToken(data.token);
            this.tokenStorage.saveUsername(data.username);
            this.tokenStorage.saveAuthorities(data.authorities);
            this.tokenStorage.saveExpirationDate(data.expirationDate)
            this.userService.loadCurrentUserData(loginInfo.username);
        });
        this.loginForm.reset();
    }
}
