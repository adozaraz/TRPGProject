import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'modal-login',
    templateUrl: './modal-login.html',
    styleUrls: ['./modal-login.scss']
})
export class ModalLoginComponent {
    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder

    ) {
        this.loginForm = this.formBuilder.group({
            login: "",
            password: ""
        });
    }

    onSubmit(): void {
        this.loginForm.reset();
    }
}
