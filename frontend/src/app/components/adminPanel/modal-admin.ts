import {UserService} from "../../services/user.service";
import {Component} from "@angular/core";
import {DatabaseService} from "../../services/database.service";
import {QueryItem} from "../database/app-database";


@Component({
    selector: 'modal-admin',
    templateUrl: './modal-admin.html',
    styleUrls: ['./modal-admin.scss']
})
export class ModalAdminPanelComponent {
    queryList: any[] = [];

    constructor(private userService: UserService, private databaseService: DatabaseService) {
    }

    loadData(query: number) {
        switch (query) {
            case 0:
                // @ts-ignore
                this.databaseService.getAllData(QueryItem.Spells)?.subscribe((data: any[]) => {
                    this.queryList = data;
                });
                break;
            case 1:
                // @ts-ignore
                this.databaseService.getAllData(QueryItem.MagicItems)?.subscribe((data: any[]) => {
                    this.queryList = data;
                });
                break;
            case 2:
                // @ts-ignore
                this.databaseService.getAllData(QueryItem.Bestiary)?.subscribe((data: any[]) => {
                    this.queryList = data;
                });
                break;
        }
    }
}
