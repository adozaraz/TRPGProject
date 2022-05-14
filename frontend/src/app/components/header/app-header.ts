import {Component, OnInit} from "@angular/core";
import {UserService} from "../../services/user.service";
import {TokenStorageService} from "../../security/token-storage.service";
import {Role} from "../../models/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.html',
  styleUrls: ['./app-header.scss']
})
export class AppHeaderComponent implements OnInit {
    constructor(public userService: UserService, public token: TokenStorageService, private router: Router) {
    }

    ngOnInit(): void {
        if (this.token.checkLoginStatus()) {
            this.userService.loadCurrentUserData(this.token.getUsername());
        }
    }

    signOut(): void {
        this.token.signOut();
        this.userService.signOut();
        location.replace("");
        this.router.navigate([""]).then();
    }

    checkAdminRole(): boolean {
        return this.userService.currentUser.userRole == Role.ADMIN;
    }
}
