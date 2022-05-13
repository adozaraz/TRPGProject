import { Component } from "@angular/core";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.html',
  styleUrls: ['./app-header.scss']
})

export class AppHeaderComponent {
    constructor(public userService: UserService) {
    }
}
