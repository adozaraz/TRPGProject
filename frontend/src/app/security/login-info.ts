import {AbstractControl} from "@angular/forms";

export class AuthLoginInfo {
    email: string;
    username: string;
    password: string;

    // @ts-ignore
    constructor(email, username, password) {
        this.email = email;
        this.username = username;
        this.password = password;
    }
}
