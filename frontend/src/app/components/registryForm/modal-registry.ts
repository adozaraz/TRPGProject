import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
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
    userAlreadyTaken: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,

    ) {
        this.registryForm = this.formBuilder.group({
            login: new FormControl("", [Validators.required]),
            email: new FormControl("", [Validators.email, Validators.required]),
            password: ""
        });
    }

    onSubmit(): void {
        console.log(this.registryForm.get("email")?.errors);
        this.userService.signUp(new SignUpInfo(this.registryForm.get("login")?.value, this.registryForm.get("email")?.value, this.registryForm.get("password")?.value)).subscribe(() => {
            console.log("Registered successfully");
            this.userAlreadyTaken = false;
        },
            (error) => {
            console.log(error);
            if (error.status == 409) this.userAlreadyTaken = true;
            });
        this.registryForm.reset();
    }
}
