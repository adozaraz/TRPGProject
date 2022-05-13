import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {SignUpInfo} from "../../security/signup-info";

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
        public userService: UserService

    ) {
        this.registryForm = this.formBuilder.group({
            login: ["", Validators.required],
            email: ["", [Validators.email, Validators.required]],
            password: ""
        });
    }

    onSubmit(): void {
        console.log(this.registryForm);
        this.userService.signUp(new SignUpInfo(this.registryForm.get("login")?.value, this.registryForm.get("email")?.value, this.registryForm.get("password")?.value)).subscribe((data) => {
            console.log(data)
        });
        this.registryForm.reset();
    }
}
