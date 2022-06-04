import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {QueryItem} from "../database/app-database";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DatabaseService} from "../../services/database.service";
import {Spell} from "../../models/spell.model";
import {UserService} from "../../services/user.service";
import {MagicItem} from "../../models/magicItem.model";
import {Monster} from "../../models/monster.model";

export enum Rarity {
    COMMON,
    UNCOMMON,
    RARE,
    VERY_RARE,
    LEGENDARY,
    ARTIFACT
}

@Component({
    selector: 'modal-creator',
    templateUrl: './modal-creator.html',
    styleUrls: ['./modal-creator.scss']
})
export class ModalCreatorComponent implements OnInit, OnChanges {
    // @ts-ignore
    @Input("itemType") itemType: QueryItem;
    // @ts-ignore
    itemCreator: FormGroup;
    // @ts-ignore
    stats: FormGroup;
    // @ts-ignore
    savingThrowsProf: FormGroup;
    // @ts-ignore
    skillsProf: FormGroup;

    constructor(private formBuilder: FormBuilder, private databaseService: DatabaseService, private userService: UserService) {
    }

    ngOnInit(): void {
        // @ts-ignore
        switch (this.itemType) {
            case QueryItem.Spells:
                this.itemCreator = this.formBuilder.group({
                    name: new FormControl("", [Validators.requiredTrue]),
                    description: new FormControl(),
                    spellLevel: new FormControl(),
                    school: new FormControl(),
                    actionTime: new FormControl(),
                    distance: new FormControl(),
                    verbalComp: new FormControl(),
                    somaticComp: new FormControl(),
                    materialComp: new FormControl(),
                    material: new FormControl("")
                });
                break;
            case QueryItem.MagicItems:
                this.itemCreator = this.formBuilder.group({
                    name: new FormControl("", [Validators.requiredTrue]),
                    attunementRequired: new FormControl(),
                    rarity: new FormControl(0),
                    description: new FormControl(),
                });
                break;
            case QueryItem.Bestiary:
                this.itemCreator = this.formBuilder.group({
                    name: new FormControl("", [Validators.requiredTrue]),
                    size: new FormControl(0),
                    race: new FormControl(),
                    alignment: new FormControl(0), //Integer type
                    armorClass: new FormControl(),
                    hitPoints: new FormControl(),
                    speed: new FormControl(),
                    challengeRating: new FormControl(),
                    masteryBonus: new FormControl(),
                    description: new FormControl()
                });
                this.stats = this.formBuilder.group({
                    strength: new FormControl(1),
                    dexterity: new FormControl(1),
                    constitution: new FormControl(1),
                    intelligence: new FormControl(1),
                    wisdom: new FormControl(1),
                    charisma: new FormControl(1)
                });
                this.skillsProf = this.formBuilder.group({
                    athletics: false,
                    acrobatics: false,
                    sleightOfHands: false,
                    stealth: false,
                    arcana: false,
                    history: false,
                    investigation: false,
                    nature: false,
                    religion: false,
                    animalHandling: false,
                    insight: false,
                    medicine: false,
                    perception: false,
                    survival: false,
                    deception: false,
                    intimidation: false,
                    performance: false,
                    persuasion: false
                });
                this.savingThrowsProf = this.formBuilder.group({
                    strength: false,
                    dexterity: false,
                    constitution: false,
                    intelligence: false,
                    wisdom: false,
                    charisma: false
                });
                break;
            default:
                this.itemCreator = this.formBuilder.group({});
                break;
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        switch (this.itemType) {
            case QueryItem.Spells:
                this.itemCreator = this.formBuilder.group({
                    name: new FormControl("", [Validators.requiredTrue]),
                    description: new FormControl(),
                    spellLevel: new FormControl(),
                    school: new FormControl(),
                    actionTime: new FormControl(),
                    distance: new FormControl(),
                    verbalComp: new FormControl(),
                    somaticComp: new FormControl(),
                    materialComp: new FormControl(),
                    material: new FormControl("")
                });
                break;
            case QueryItem.MagicItems:
                this.itemCreator = this.formBuilder.group({
                    name: new FormControl("", [Validators.requiredTrue]),
                    attunementRequired: new FormControl(),
                    rarity: new FormControl(0),
                    description: new FormControl(),
                });
                break;
            case QueryItem.Bestiary:
                this.itemCreator = this.formBuilder.group({
                    name: new FormControl("", [Validators.requiredTrue]),
                    size: new FormControl(0),
                    race: new FormControl(),
                    alignment: new FormControl(0), //Integer type
                    armorClass: new FormControl(),
                    hitPoints: new FormControl(),
                    speed: new FormControl(),
                    challengeRating: new FormControl(),
                    masteryBonus: new FormControl(),
                    description: new FormControl()
                });
                this.stats = this.formBuilder.group({
                    strength: new FormControl(1),
                    dexterity: new FormControl(1),
                    constitution: new FormControl(1),
                    intelligence: new FormControl(1),
                    wisdom: new FormControl(1),
                    charisma: new FormControl(1)
                });
                this.skillsProf = this.formBuilder.group({
                    athletics: false,
                    acrobatics: false,
                    sleightOfHands: false,
                    stealth: false,
                    arcana: false,
                    history: false,
                    investigation: false,
                    nature: false,
                    religion: false,
                    animalHandling: false,
                    insight: false,
                    medicine: false,
                    perception: false,
                    survival: false,
                    deception: false,
                    intimidation: false,
                    performance: false,
                    persuasion: false
                });
                this.savingThrowsProf = this.formBuilder.group({
                    strength: false,
                    dexterity: false,
                    constitution: false,
                    intelligence: false,
                    wisdom: false,
                    charisma: false
                });
                break;
            default:
                this.itemCreator = this.formBuilder.group({});
                break;
        }
    }

    onSubmit() {
        let outputData;
        switch (this.itemType) {
            case QueryItem.Spells:
                outputData = new Spell(this.userService.currentUser, this.itemCreator);
                break;
            case QueryItem.MagicItems:
                outputData = new MagicItem(this.userService.currentUser, this.itemCreator);
                break;
            case QueryItem.Bestiary:
                outputData = new Monster(this.userService.currentUser,
                    this.itemCreator,
                    this.stats,
                    this.skillsProf,
                    this.savingThrowsProf);
                break;
        }
        this.databaseService.save(this.itemType, outputData)?.subscribe((data) => {
            console.log("Added successfully");
        });
        this.itemCreator.reset();
        this.skillsProf.reset();
        this.savingThrowsProf.reset();
        this.stats.reset();
    }
}
