import {Component, OnInit} from "@angular/core";
import {UserService} from "../../services/user.service";
import {TokenStorageService} from "../../security/token-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.html',
  styleUrls: ['./app-header.scss']
})
export class AppHeaderComponent implements OnInit {
    constructor(public userService: UserService, public token: TokenStorageService) {
    }

    ngOnInit(): void {
        if (this.token.checkLoginStatus()) {
            this.userService.loadCurrentUserData(this.token.getUsername());
        }
    }

    signOut(): void {
        this.token.signOut();
        this.userService.signOut();
    }
}
