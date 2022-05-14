import {Component, OnInit} from "@angular/core";
import {UserService} from "../../services/user.service";
import {TokenStorageService} from "../../security/token-storage.service";
import {Router} from "@angular/router";
import {Role} from "../../models/user.model";

@Component({
    selector: 'modal-component',
    templateUrl: './modal-character.html',
    styleUrls: ['./modal-character.scss']
})
export class ModalCharacterComponent {
}
