import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'modal-registry',
    templateUrl: './modal-registry.html',
    styleUrls: ['./modal-registry.scss']
})
export class ModalRegistryComponent {
    registryForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder

    ) {
        this.registryForm = this.formBuilder.group({
            login: "",
            email: "",
            password: ""
        });
    }

    onSubmit(): void {
        this.registryForm.reset();
    }
}
