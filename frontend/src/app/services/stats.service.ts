import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Stats} from "../models/stats.model";

@Injectable({
    providedIn: "root",
})
export class StatsService {
    constructor(private http: HttpClient) {
    }

    save(stats: Stats) {
        return this.http.post("api/stats/save", stats);
    }
}
