import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {SignUpInfo} from "../../security/signup-info";
import {AuthLoginInfo} from "../../security/login-info";
import {TokenStorageService} from "../../security/token-storage.service";

@Component({
    selector: 'modal-registry',
    templateUrl: './modal-registry.html',
    styleUrls: ['./modal-registry.scss']
})
export class ModalRegistryComponent {
    registryForm: FormGroup;
    passwordVisibility: Boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private tokenStorage: TokenStorageService

    ) {
        this.registryForm = this.formBuilder.group({
            login: ["", Validators.required],
            email: ["", [Validators.email, Validators.required]],
            password: ""
        });
    }

    onSubmit(): void {
        this.userService.signUp(new SignUpInfo(this.registryForm.get("login")?.value, this.registryForm.get("email")?.value, this.registryForm.get("password")?.value)).subscribe(() => {
            this.userService.attemptAuth(new AuthLoginInfo(this.registryForm.get("email"), this.registryForm.get("login"), this.registryForm.get("password"))).subscribe((data) => {
                this.tokenStorage.saveToken(data.token);
                this.tokenStorage.saveUsername(data.username);
                this.tokenStorage.saveAuthorities(data.authorities);
                this.tokenStorage.saveExpirationDate(data.expirationDate)
                this.userService.loadCurrentUserData(data.username);
            });
        });
        this.registryForm.reset();
    }
}
