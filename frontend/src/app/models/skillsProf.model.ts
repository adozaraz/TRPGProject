import {FormGroup} from "@angular/forms";

export class SkillsProf {
    id: string;
    strength: boolean;
    dexterity: boolean;
    constitution: boolean;
    intelligence: boolean;
    wisdom: boolean;
    charisma: boolean;

    // @ts-ignore
    constructor(statsGroup: FormGroup, id: string=null) {
        this.strength = statsGroup.get("strength")?.value;
        this.dexterity = statsGroup.get("dexterity")?.value;
        this.constitution = statsGroup.get("constitution")?.value;
        this.intelligence = statsGroup.get("intelligence")?.value;
        this.wisdom = statsGroup.get("wisdom")?.value;
        this.charisma = statsGroup.get("charisma")?.value;
        this.id = id;
    }
}
