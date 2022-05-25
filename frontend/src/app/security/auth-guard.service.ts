import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {TokenStorageService} from "./token-storage.service";
import {UserService} from "../services/user.service";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private token: TokenStorageService, private userService: UserService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.token.checkLoginStatus()) {
            this.userService.loadCurrentUserData(this.token.getUsername());
            return true;
        }
        this.router.navigate([""])
        return false;
    }

}
