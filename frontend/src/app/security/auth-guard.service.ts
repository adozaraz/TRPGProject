import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {TokenStorageService} from "./token-storage.service";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private token: TokenStorageService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.token.logged) {
            return true;
        } else {
            return false;
        }
    }

}
