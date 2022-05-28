import {HttpClient} from "@angular/common/http";
import {QueryItem} from "../components/database/app-database";

export class DatabaseService {
    constructor(private http: HttpClient) {
    }

    getGlobalData(type: QueryItem) {
        switch (type) {
            case QueryItem.Spells:
                return this.http.get("");
        }

    }
}
