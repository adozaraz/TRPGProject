import {HttpClient, HttpHeaders} from "@angular/common/http";
import {QueryItem} from "../components/database/app-database";
import {Injectable} from "@angular/core";
import {CharacterList} from "../models/characterList.model";

const httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
};


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

    getUserCharacterLists() {
        return this.http.get("/api/characterList/list/data/user");
    }

    getUserCreatedData(type: QueryItem) {
        switch (type) {
            case QueryItem.OwnSpells:
                return this.http.get("/api/spells/list/data/user");
            case QueryItem.OwnMagicItems:
                return this.http.get("/api/items/list/data/user");
            case QueryItem.OwnBestiary:
                return this.http.get("/api/monster/list/data/user");
            default:
                return null;
        }
    }

    getAllData(type: QueryItem) {
        switch (type) {
            case QueryItem.Spells:
                return this.http.get("/api/spells/list/data/all");
            case QueryItem.MagicItems:
                return this.http.get("/api/items/list/data/all");
            case QueryItem.Bestiary:
                return this.http.get("/api/monster/list/data/all");
            default:
                return null;
        }
    }

    save(type: QueryItem, data: any) {
        switch (type) {
            case QueryItem.Spells:
                return this.http.post("/api/spells/save", data);
            case QueryItem.MagicItems:
                return this.http.post("/api/items/save", data);
            case QueryItem.Bestiary:
                return this.http.post("/api/monster/save", data);
            case QueryItem.CharacterList:
                return this.http.post("/api/characterList/save", data);
            default:
                return null;
        }
    }

    addToGlobalDatabase(item: string, query: number) {
        switch (query) {
            case 0:
                // @ts-ignore
                return this.http.post(`/api/spells/globalDatabase/add/${item}`).subscribe();
            case 1:
                // @ts-ignore
                return this.http.post(`/api/items/globalDatabase/add/${item}`).subscribe();
            case 2:
                // @ts-ignore
                return this.http.post(`/api/monster/globalDatabase/add/${item}`).subscribe();
            default:
                return null;
        }
    }

    removeFromGlobalDatabase(item: string, query: number) {
        switch (query) {
            case 0:
                // @ts-ignore
                return this.http.post(`/api/spells/globalDatabase/remove/${item}`).subscribe();
            case 1:
                // @ts-ignore
                return this.http.post(`/api/items/globalDatabase/remove/${item}`).subscribe();
            case 2:
                // @ts-ignore
                return this.http.post(`/api/monster/globalDatabase/remove/${item}`).subscribe();
            default:
                return null;
        }
    }

    remove(item: string, query: number) {
        switch (query) {
            case 0:
                // @ts-ignore
                return this.http.post(`/api/spells/remove/${item}`).subscribe();
            case 1:
                // @ts-ignore
                return this.http.post(`/api/items/remove/${item}`).subscribe();
            case 2:
                // @ts-ignore
                return this.http.post(`/api/monster/remove/${item}`).subscribe();
            case 3:
                // @ts-ignore
                return this.http.post(`/api/characterList/remove/${item}`).subscribe();
            default:
                return null;
        }
    }

    updateCharacterList(characterList: CharacterList) {
        return this.http.post("/api/characterList/update", characterList);
    }
}
