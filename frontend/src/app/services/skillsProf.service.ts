import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {SkillsProf} from "../models/skillsProf.model";

@Injectable({
    providedIn: "root",
})
export class SkillsProfService {
    constructor(private http: HttpClient) {
    }

    save(skillsProf: SkillsProf) {
        return this.http.post("api/skillsProf/save", skillsProf);
    }

    updateSkillsProf(skillsProf: SkillsProf) {
        return this.http.post("api/skillsProf/update", skillsProf);
    }
}
