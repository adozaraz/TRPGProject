import {Injectable} from "@angular/core";

const TOKEN_KEY = "AuthToken";
const USERNAME_KEY = "AuthUsername";
const AUTHORITIES_KEY = "AuthAuthorities";

@Injectable({
    providedIn: "root"
})
export class TokenStorageService {
    private userRoles: Array<string> = [];
    public logged: boolean = false;

    constructor() {}

    signOut() {
        window.sessionStorage.clear();
        this.logged = false;
    }

    public saveToken(token: string) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
        this.logged = true;
    }

    public getToken() {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }

    public saveUsername(username: string) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, username);
    }

    public getUsername() {
        return sessionStorage.getItem(USERNAME_KEY);
    }

    public saveAuthorities(authorities: string[]) {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    }

    public getAuthorities(): string[] {
        this.userRoles = [];

        if (sessionStorage.getItem(TOKEN_KEY)) {
            // @ts-ignore
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
                this.userRoles.push(authority.authority);
            });
        }

        return this.userRoles;
    }

}

