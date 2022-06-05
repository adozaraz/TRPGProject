import {UserService} from "../../services/user.service";
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {DatabaseService} from "../../services/database.service";
import {QueryItem} from "../database/app-database";
import {Spell} from "../../models/spell.model";
import {Monster} from "../../models/monster.model";
import {MagicItem} from "../../models/magicItem.model";


@Component({
    selector: 'modal-admin',
    templateUrl: './modal-admin.html',
    styleUrls: ['./modal-admin.scss']
})
export class ModalAdminPanelComponent implements OnInit {
    queryList: any[] = [];
    queryNumber: number = 0;
    itemToShow: any;
    @ViewChild("information") modalWindow: any;

    constructor(private userService: UserService,
                private databaseService: DatabaseService) {
    }

    ngOnInit(): void {
        this.loadData(this.queryNumber);
    }

    loadData(query: number) {
        this.queryNumber = query;
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

    addToGlobalDatabase(id: string) {
        this.databaseService.addToGlobalDatabase(id, this.queryNumber);
    }

    removeFromGlobalDatabase(id: string) {
        this.databaseService.removeFromGlobalDatabase(id, this.queryNumber);
    }

    changeShowedItem(item: any) {
        this.itemToShow = item;
    }
}
