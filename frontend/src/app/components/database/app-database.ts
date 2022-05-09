import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

export enum QueryItem {
    Spells,
    MagicItems,
    Bestiary
}

@Component({
    selector: 'app-database',
    templateUrl: './app-database.html',
    styleUrls: ['./app-database.scss']
})

export class DatabaseComponent implements OnInit {
    queryItem: QueryItem = QueryItem.Bestiary;


    constructor(private route: ActivatedRoute) {
    }


    ngOnInit(): void {
        this.route.queryParams.subscribe((params:any) => {
            this.queryItem = JSON.parse(params.queryItem);
        })
    }

}
