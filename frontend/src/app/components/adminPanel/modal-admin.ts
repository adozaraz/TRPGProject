import {UserService} from "../../services/user.service";
import {Component} from "@angular/core";


@Component({
    selector: 'modal-admin',
    templateUrl: './modal-admin.html',
    styleUrls: ['./modal-admin.scss']
})
export class ModalAdminPanelComponent {
    curTab: number = 1;
    constructor(private userService: UserService) {
    }
}
