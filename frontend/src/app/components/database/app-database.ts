import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {DatabaseService} from "../../services/database.service";
import {UserService} from "../../services/user.service";

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
    // @ts-ignore
    queryList: any[];
    itemToShow: any;

    constructor(private route: ActivatedRoute, private databaseService: DatabaseService, public userService: UserService) {
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
                    this.infoString = "Мои заклинания";
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

            switch (this.queryItem) {
                case QueryItem.Spells:
                case QueryItem.MagicItems:
                case QueryItem.Bestiary:
                    // @ts-ignore
                    this.databaseService.getGlobalData(this.queryItem)?.subscribe((data: any[]) => {
                        this.queryList = data;
                    });
                    break;
                case QueryItem.OwnSpells:
                case QueryItem.OwnMagicItems:
                case QueryItem.OwnBestiary:
                    // @ts-ignore
                    this.databaseService.getUserCreatedData(this.queryItem)?.subscribe((data: any[]) => {
                        this.queryList = data;
                    });
                    break;
                case QueryItem.CharacterList:
                    // @ts-ignore
                    this.databaseService.getUserCharacterLists().subscribe((data: any[]) => {
                        console.log(data);
                        this.queryList = data;
                    })
            }
        })
    }

    checkData() {
        console.log(this.queryList);
    }

    changeShowedItem(item: any) {
        this.itemToShow = item;
    }

    createParams(item: any) {
        return {
            saveThrowId: item.savingThrowsProf.id,
            statsId: item.stats.id,
            skillId: item.skillsProf.id,
            characterList: true,
            name: item.name,
            charClass: item.charClass,
            race: item.race,
            charLevel: item.charLevel,
            alignment: item.alignment,
            speed: item.speed,
            armorClass: item.armorClass,
            proficiencyBonus: item.proficiencyBonus,
            maxHitPoints: item.maxHitPoints,
            curHitPoints: item.curHitPoints,
            statsStrength: item.stats.strength,
            statsDexterity: item.stats.dexterity,
            statsConstitution: item.stats.constitution,
            statsIntelligence: item.stats.intelligence,
            statsWisdom: item.stats.wisdom,
            statsCharisma: item.stats.charisma,
            skillsProfAthletics: item.savingThrowsProf.athletics,
            skillsProfAcrobatics: item.savingThrowsProf.acrobatics,
            skillsProfSleightOfHands: item.savingThrowsProf.sleightOfHands,
            skillsProfStealth: item.savingThrowsProf.stealth,
            skillsProfArcana: item.savingThrowsProf.arcana,
            skillsProfHistory: item.savingThrowsProf.history,
            skillsProfInvestigation: item.savingThrowsProf.investigation,
            skillsProfNature: item.savingThrowsProf.nature,
            skillsProfReligion: item.savingThrowsProf.religion,
            skillsProfAnimalHandling: item.savingThrowsProf.animalHandling,
            skillsProfInsight: item.savingThrowsProf.insight,
            skillsProfMedicine: item.savingThrowsProf.medicine,
            skillsProfPerception: item.savingThrowsProf.perception,
            skillsProfSurvival: item.savingThrowsProf.survival,
            skillsProfDeception: item.savingThrowsProf.deception,
            skillsProfIntimidation: item.savingThrowsProf.intimidation,
            skillsProfPerformance: item.savingThrowsProf.performance,
            skillsProfPersuasion: item.savingThrowsProf.persuasion,
            savingThrowsProfStrength: item.skillsProf.strength,
            savingThrowsProfDexterity: item.skillsProf.dexterity,
            savingThrowsProfConstitution: item.skillsProf.constitution,
            savingThrowsProfIntelligence: item.skillsProf.intelligence,
            savingThrowsProfWisdom: item.skillsProf.wisdom,
            savingThrowsProfCharisma: item.skillsProf.charisma
        };
    }

}
