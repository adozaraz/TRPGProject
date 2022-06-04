import {User} from "./user.model";
import {Stats} from "./stats.model";
import {SkillsProf} from "./skillsProf.model";
import {SavingThrowsProf} from "./savingThrowsProf.model";
import {FormGroup} from "@angular/forms";

export class Monster {
    owner: User;
    name: string;
    size: number;
    race: string;
    alignment: number;
    armorClass: number;
    hitPoints: number;
    speed: number;
    stats: Stats;
    skillsProf: SkillsProf;
    savingThrowsProf: SavingThrowsProf;
    challengeRating: number;
    masteryBonus: number;
    description: string;
    globalDatabase: boolean;

    constructor(owner: User,
                monsterGroup: FormGroup,
                statsGroup: FormGroup,
                skillsProfGroup: FormGroup,
                savingThrowsGroup: FormGroup,
                addToGlobalDatabase: boolean = false) {
        this.owner = owner;
        this.name = monsterGroup.get("name")?.value;
        this.size = monsterGroup.get("size")?.value;
        this.race = monsterGroup.get("race")?.value;
        this.alignment = monsterGroup.get("alignment")?.value;
        this.armorClass = monsterGroup.get("armorClass")?.value;
        this.hitPoints = monsterGroup.get("hitPoints")?.value;
        this.speed = monsterGroup.get("speed")?.value;
        this.challengeRating = monsterGroup.get("challengeRating")?.value;
        this.masteryBonus = monsterGroup.get("masteryBonus")?.value;
        this.description = monsterGroup.get("description")?.value;
        this.stats = new Stats(statsGroup);
        this.skillsProf = new SkillsProf(skillsProfGroup);
        this.savingThrowsProf = new SavingThrowsProf(savingThrowsGroup);
        this.globalDatabase = addToGlobalDatabase;
    }
}
