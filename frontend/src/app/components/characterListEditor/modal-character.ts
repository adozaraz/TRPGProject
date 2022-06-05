import {Component, OnInit} from "@angular/core";
import {UserService} from "../../services/user.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CharacterList} from "../../models/characterList.model";
import {DatabaseService} from "../../services/database.service";
import {QueryItem} from "../database/app-database";
import {ActivatedRoute, Router} from "@angular/router";
import {StatsService} from "../../services/stats.service";
import {SkillsProfService} from "../../services/skillsProf.service";
import {SavingThrowsProfService} from "../../services/savingThrowsProf.service";

@Component({
    selector: 'modal-component',
    templateUrl: './modal-character.html',
    styleUrls: ['./modal-character.scss']
})
export class ModalCharacterComponent implements OnInit {
    // @ts-ignore
    stats: FormGroup;
    // @ts-ignore
    skillsProf: FormGroup;
    // @ts-ignore
    savingThrowsProf: FormGroup;
    // @ts-ignore
    mainInformation: FormGroup;
    updateInfo: boolean = false;
    tableIds: any = {};


    constructor(private formBuilder: FormBuilder,
                private userService: UserService,
                private databaseService: DatabaseService,
                private statsService: StatsService,
                private skillsProfService: SkillsProfService,
                private savingThrowsProfService: SavingThrowsProfService,
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((params: any) => {
                this.stats = this.formBuilder.group({
                    strength: new FormControl("8"),
                    dexterity: new FormControl("8"),
                    constitution: new FormControl("8"),
                    intelligence: new FormControl("8"),
                    wisdom: new FormControl("8"),
                    charisma: new FormControl("8")
                });
                this.skillsProf = this.formBuilder.group({
                    athletics: new FormControl(false),
                    acrobatics: new FormControl(false),
                    sleightOfHands: new FormControl(false),
                    stealth: new FormControl(false),
                    arcana: new FormControl(false),
                    history: new FormControl(false),
                    investigation: new FormControl(false),
                    nature: new FormControl(false),
                    religion: new FormControl(false),
                    animalHandling: new FormControl(false),
                    insight: new FormControl(false),
                    medicine: new FormControl(false),
                    perception: new FormControl(false),
                    survival: new FormControl(false),
                    deception: new FormControl(false),
                    intimidation: new FormControl(false),
                    performance: new FormControl(false),
                    persuasion: new FormControl(false)
                });
                this.savingThrowsProf = this.formBuilder.group({
                    strength: new FormControl(false),
                    dexterity: new FormControl(false),
                    constitution: new FormControl(false),
                    intelligence: new FormControl(false),
                    wisdom: new FormControl(false),
                    charisma: new FormControl(false)
                });
                this.mainInformation = this.formBuilder.group({
                    name: new FormControl(""),
                    charClass: new FormControl(""),
                    race: new FormControl(""),
                    charLevel: new FormControl("1"),
                    alignment: new FormControl(""),
                    speed: new FormControl(),
                    armorClass: new FormControl("0"),
                    proficiencyBonus: new FormControl(""),
                    maxHitPoints: new FormControl(),
                    curHitPoints: new FormControl()
                });
                if (params.hasOwnProperty("characterList")) {
                    this.updateInfo = true;
                    this.stats.setValue({
                        strength: params.statsStrength,
                        dexterity: params.statsDexterity,
                        constitution: params.statsConstitution,
                        intelligence: params.statsIntelligence,
                        wisdom: params.statsWisdom,
                        charisma: params.statsCharisma
                    });
                    this.savingThrowsProf.setValue({
                        strength: JSON.parse(params.savingThrowsProfStrength),
                        dexterity: JSON.parse(params.savingThrowsProfDexterity),
                        constitution: JSON.parse(params.savingThrowsProfConstitution),
                        intelligence: JSON.parse(params.savingThrowsProfIntelligence),
                        wisdom: JSON.parse(params.savingThrowsProfWisdom),
                        charisma: JSON.parse(params.savingThrowsProfCharisma)
                    });
                    this.skillsProf.setValue({
                        athletics: JSON.parse(params.skillsProfAthletics),
                        acrobatics: JSON.parse(params.skillsProfAcrobatics),
                        sleightOfHands: JSON.parse(params.skillsProfSleightOfHands),
                        stealth: JSON.parse(params.skillsProfStealth),
                        arcana: JSON.parse(params.skillsProfArcana),
                        history: JSON.parse(params.skillsProfHistory),
                        investigation: JSON.parse(params.skillsProfInvestigation),
                        nature: JSON.parse(params.skillsProfNature),
                        religion: JSON.parse(params.skillsProfReligion),
                        animalHandling: JSON.parse(params.skillsProfAnimalHandling),
                        insight: JSON.parse(params.skillsProfInsight),
                        medicine: JSON.parse(params.skillsProfMedicine),
                        perception: JSON.parse(params.skillsProfPerception),
                        survival: JSON.parse(params.skillsProfSurvival),
                        deception: JSON.parse(params.skillsProfDeception),
                        intimidation: JSON.parse(params.skillsProfIntimidation),
                        performance: JSON.parse(params.skillsProfPerformance),
                        persuasion: JSON.parse(params.skillsProfPersuasion)
                    });
                    this.mainInformation.setValue({
                        name: params.name,
                        charClass: params.charClass,
                        charLevel: params.charLevel,
                        race: params.race,
                        alignment: params.alignment,
                        speed: params.speed,
                        armorClass: params.armorClass,
                        proficiencyBonus: params.proficiencyBonus,
                        maxHitPoints: params.maxHitPoints,
                        curHitPoints: params.curHitPoints,
                    });
                    this.tableIds = {
                        statsId: params.statsId,
                        saveThrowsId: params.saveThrowId,
                        skillsId: params.skillId
                    }
                }
        });
    }

    calculateModificator(number: number) {
        // @ts-ignore
        if (number != "") return Math.floor((number - 10) / 2);
        else return " ";
    }

    calculateAbilityModifier(value: any, proficient: any) {
        let modifier = this.calculateModificator(value);
        if (proficient == true && this.mainInformation.get("proficiencyBonus")?.value != null) { // @ts-ignore
            modifier += parseInt(this.mainInformation.get("proficiencyBonus")?.value);
        }
        return modifier;

    }

    onSubmit() {
        switch (this.mainInformation.get("alignment")?.value) {
            case "LAWFUL_GOOD":
                this.mainInformation.patchValue({alignment: "0"});
                break;
            case "LAWFUL_NEUTRAL":
                this.mainInformation.patchValue({alignment: "1"});
                break;
            case "LAWFUL_EVIL":
                this.mainInformation.patchValue({alignment: "2"});
                break;
            case "NEUTRAL_GOOD":
                this.mainInformation.patchValue({alignment: "3"});
                break;
            case "TRUE_NEUTRAL":
                this.mainInformation.patchValue({alignment: "4"});
                break;
            case "NEUTRAL_EVIL":
                this.mainInformation.patchValue({alignment: "5"});
                break;
            case "CHAOTIC_GOOD":
                this.mainInformation.patchValue({alignment: "6"});
                break;
            case "CHAOTIC_NEUTRAL":
                this.mainInformation.patchValue({alignment: "7"});
                break;
            case "CHAOTIC_EVIL":
                this.mainInformation.patchValue({alignment: "8"});
                break;
        }
        console.log(this.mainInformation.get("race")?.value);
        let characterList: CharacterList = new CharacterList(this.userService.currentUser,
            this.mainInformation,
            this.stats,
            this.skillsProf,
            this.savingThrowsProf);
        characterList.stats.id = this.tableIds.statsId;
        characterList.skillsProf.id = this.tableIds.skillsId;
        characterList.savingThrowsProf.id = this.tableIds.saveThrowsId;
        if (this.updateInfo) {
            this.statsService.updateStats(characterList.stats).subscribe(() => {
                this.savingThrowsProfService.updateSavingThrowsProf(characterList.savingThrowsProf).subscribe(() => {
                    this.skillsProfService.updateSkillsProf(characterList.skillsProf).subscribe(() => {
                        this.databaseService.updateCharacterList(characterList)?.subscribe(() => {
                            console.log("Saved successfully");
                            this.router.navigate(['']);
                        });
                    })
                })
            })
        } else {
            this.statsService.save(characterList.stats).subscribe(() => {
                this.savingThrowsProfService.save(characterList.savingThrowsProf).subscribe(() => {
                    this.skillsProfService.save(characterList.skillsProf).subscribe(() => {
                        this.databaseService.save(QueryItem.CharacterList, characterList)?.subscribe(() => {
                            console.log("Saved successfully");
                            this.router.navigate(['']);
                        });
                    })
                })
            });
        }
    }

}
