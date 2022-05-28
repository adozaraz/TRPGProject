import { Component, Input } from "@angular/core";
import {UserService} from "../../services/user.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PasswordFormModel} from "../../models/passwordForm.model";

export enum PasswordStatus {
    PENDING,
    CHANGED_SUCCESSFULLY,
    FAILED
}

@Component({
    selector: 'modal-settings',
    templateUrl: './modal-settings.html',
    styleUrls: ['./modal-settings.scss']
})
export class ModalSettingsComponent {
    passwordChangeForm: FormGroup;
    passwordChangeStatus: PasswordStatus = PasswordStatus.PENDING;


    constructor(private userService: UserService, private formBuilder: FormBuilder) {
        this.passwordChangeForm = formBuilder.group(
            {
                "oldPassword": new FormControl(null, [Validators.nullValidator]),
                "newPassword": new FormControl(null, [Validators.nullValidator]),
                "confirmNewPassword": new FormControl(null, [Validators.nullValidator])});
    }

    showFormData() {
        console.log(this.passwordChangeForm.get("oldPassword")?.value);
        console.log(this.passwordChangeForm.get("newPassword")?.value);
        console.log(this.passwordChangeForm.get("confirmNewPassword")?.value);
        console.log(this.checkData());
    }

    checkData() {
        return ((this.passwordChangeForm.get('newPassword')?.value == this.passwordChangeForm.get('confirmNewPassword')?.value)
            && this.passwordChangeForm.get("oldPassword")?.value != null
            && this.passwordChangeForm.get("newPassword")?.value != null
            && this.passwordChangeForm.get("confirmNewPassword")?.value != null);
    }

    onSubmit() {
        this.userService.changePassword(new PasswordFormModel(this.passwordChangeForm.get('oldPassword')?.value,
            this.passwordChangeForm.get('newPassword')?.value,
            this.passwordChangeForm.get('confirmNewPassword')?.value)).subscribe((data: any) => {
                this.passwordChangeStatus = PasswordStatus.CHANGED_SUCCESSFULLY;
        }, (error:any) => {
                this.passwordChangeStatus = PasswordStatus.FAILED;
        });
        this.passwordChangeForm.reset();
    }
}
