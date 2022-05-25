import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

export enum QueryItem {
    Spells,
    MagicItems,
    Bestiary,
    CharacterList,
    OwnSpells,
    OwnMagicItems,
    OwnBestiary
}

@Component({
    selector: 'app-database',
    templateUrl: './app-database.html',
    styleUrls: ['./app-database.scss']
})

export class DatabaseComponent implements OnInit {
    queryItem: QueryItem = QueryItem.Bestiary;
    infoString: string = "Бестиарий"

    constructor(private route: ActivatedRoute) {
    }


    ngOnInit(): void {
        this.route.queryParams.subscribe((params:any) => {
            this.queryItem = JSON.parse(params.queryItem);
            switch (this.queryItem) {
                case QueryItem.Spells:
                    this.infoString = "Заклинания";
                    break;
                case QueryItem.MagicItems:
                    this.infoString = "Магические предметы";
                    break;
                case QueryItem.Bestiary:
                    this.infoString = "Бестиарий";
                    break;
                case QueryItem.CharacterList:
                    this.infoString = "Листы персонажей";
                    break;
                case QueryItem.OwnSpells:
                    this.infoString = "Мои аклинания";
                    break;
                case QueryItem.OwnMagicItems:
                    this.infoString = "Мои магические предметы";
                    break;
                case QueryItem.OwnBestiary:
                    this.infoString = "Мой бестиарий";
                    break;
                default:
                    this.infoString = "Пасхалка";
                    break;
            }
        })
    }

}
