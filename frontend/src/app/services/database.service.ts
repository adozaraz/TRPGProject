import {HttpClient} from "@angular/common/http";
import {QueryItem} from "../components/database/app-database";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class DatabaseService {
    constructor(private http: HttpClient) {
    }

    getGlobalData(type: QueryItem) {
        switch (type) {
            case QueryItem.Spells:
                return this.http.get("/api/spells/list/data/global");
            case QueryItem.MagicItems:
                return this.http.get("/api/items/list/data/global");
            case QueryItem.Bestiary:
                return this.http.get("/api/monster/list/data/global");
            default:
                return null;
        }

    }
}
