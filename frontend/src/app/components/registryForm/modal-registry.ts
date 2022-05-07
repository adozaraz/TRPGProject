import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
    selector: 'modal-registry',
    templateUrl: './modal-registry.html',
    styleUrls: ['./modal-registry.scss']
})
export class ModalRegistryComponent {
    registryForm: FormGroup;
    passwordVisibility: Boolean = false;

    constructor(
        private formBuilder: FormBuilder

    ) {
        this.registryForm = this.formBuilder.group({
            login: ["", Validators.required],
            email: ["", [Validators.email, Validators.required]],
            password: ""
        });
    }

    onSubmit(): void {
        this.registryForm.reset();
    }
}
