import {FormGroup} from "@angular/forms";

export class Stats {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;

    constructor(statsGroup: FormGroup) {
        this.strength = statsGroup.get("strength")?.value;
        this.dexterity = statsGroup.get("dexterity")?.value;
        this.constitution = statsGroup.get("constitution")?.value;
        this.intelligence = statsGroup.get("intelligence")?.value;
        this.wisdom = statsGroup.get("wisdom")?.value;
        this.charisma = statsGroup.get("charisma")?.value;
    }
}
