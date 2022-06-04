import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {SavingThrowsProf} from "../models/savingThrowsProf.model";

@Injectable({
    providedIn: "root",
})
export class SavingThrowsProfService {
    constructor(private http: HttpClient) {
    }

    save(savingThrowsProf: SavingThrowsProf) {
        return this.http.post("api/savingThrowsProf/save", savingThrowsProf);
    }
}
