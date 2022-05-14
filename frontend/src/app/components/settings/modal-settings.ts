import { Component, Input } from "@angular/core";
import {UserService} from "../../services/user.service";

@Component({
    selector: 'modal-settings',
    templateUrl: './modal-settings.html',
    styleUrls: ['./modal-settings.scss']
})

export class ModalSettingsComponent {
    constructor(private userService: UserService) {
    }
}
