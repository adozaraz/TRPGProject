import {UserService} from "../../services/user.service";
import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
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

    constructor(private userService: UserService,
                private databaseService: DatabaseService,
                private elementRef: ElementRef) {
    }

    ngOnInit(): void {
        this.loadData(this.queryNumber);
        let element = this.elementRef.nativeElement.getElementById('information');
        element.addEventListener('show.bs.modal', function handleEvent(event: any) {
            let argument = event.relatedTarget.getAttribute('data-bs-item');
            const informationModal = element.querySelector('.information');
            informationModal.setAttribute("[itemToShow]", argument);
        })
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
}
