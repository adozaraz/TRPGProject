import {User} from "./user.model";
import {Stats} from "./stats.model";
import {SavingThrowsProf} from "./savingThrowsProf.model";
import {SkillsProf} from "./skillsProf.model";
import {FormGroup} from "@angular/forms";

export class CharacterList {
    owner: User;
    name: string;
    charClass: string;
    race: string;
    alignment: string;
    speed: string;
    proficiencyBonus: string;
    maxHitPoints: string;
    charLevel: string;
    curHitPoints: string;
    stats: Stats;
    savingThrowsProf: SavingThrowsProf;
    skillsProf: SkillsProf;
    armorClass: string;

    constructor(owner: User, mainInformation: FormGroup, stats: FormGroup, savingThrowsProf: FormGroup,
                skillsProf: FormGroup) {
        this.owner = owner;
        this.stats = new Stats(stats);
        this.savingThrowsProf = new SavingThrowsProf(savingThrowsProf);
        this.skillsProf = new SkillsProf(skillsProf);
        this.name = mainInformation.get("name")?.value;
        this.charClass = mainInformation.get("charClass")?.value;
        this.race = mainInformation.get("race")?.value;
        this.alignment = mainInformation.get("alignment")?.value;
        this.speed = mainInformation.get("speed")?.value;
        this.proficiencyBonus = mainInformation.get("proficiencyBonus")?.value;
        this.maxHitPoints = mainInformation.get("maxHitPoints")?.value;
        this.curHitPoints = mainInformation.get("curHitPoints")?.value;
        this.charLevel = mainInformation.get("charLevel")?.value;
        this.armorClass = mainInformation.get("armorClass")?.value;
    }
}
