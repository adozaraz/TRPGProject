import {UserService} from "../../services/user.service";
import {Component} from "@angular/core";


@Component({
    selector: 'modal-admin',
    templateUrl: './modal-admin.html',
    styleUrls: ['./modal-admin.scss']
})
export class ModalAdminPanelComponent {
    constructor(private userService: UserService) {
    }
}
