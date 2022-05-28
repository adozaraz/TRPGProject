import {Injectable} from "@angular/core";
import {User} from "../models/user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthLoginInfo} from "../security/login-info";
import {Observable} from "rxjs";
import {JwtResponse} from "../security/jwt-response";
import {SignUpInfo} from "../security/signup-info";
import {FormGroup} from "@angular/forms";
import {PasswordFormModel} from "../models/passwordForm.model";

const httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
    providedIn: "root",
})
export class UserService {
    // @ts-ignore
    public currentUser: User;

    constructor(private http: HttpClient, private router: Router) {
    }

    private loginUrl = "/api/users/auth/signIn";
    private signupUrl = "/api/users/auth/signUp";

    // @ts-ignore
    attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
        return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
    }

    // @ts-ignore
    signUp(info: SignUpInfo): Observable<string> {
        return this.http.post<string>(this.signupUrl, info, httpOptions);
    }
    // @ts-ignore
    loadCurrentUserData(login, callback?) {
        this.http.get<User>(`/api/users/find/username/${login}`).subscribe((value: User) => {
            this.currentUser = value;
            if (callback) callback();
        });
    }

    loadUsers() {
        return this.http.get("/api/users/");
    }
    // @ts-ignore
    searchByNameContaining(req){
        return this.http.get(`/api/users/search/${req}`);
    }
    // @ts-ignore
    getUser(id) {
        return this.http.get(`/api/users/get/${id}`);
    }
    saveUser(user: User) {
        return this.http.post(`/api/users/save`, user);
    }

    signOut() {
        // @ts-ignore
        this.currentUser = null;
    }

    changePassword(passwordChangeForm: PasswordFormModel) {
        return this.http.post("/api/users/auth/password/change", passwordChangeForm);
    }
}

