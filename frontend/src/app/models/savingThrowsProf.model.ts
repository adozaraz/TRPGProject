import {FormGroup} from "@angular/forms";

export class SavingThrowsProf {
    id: string;
    athletics: boolean;
    acrobatics: boolean;
    sleightOfHands: boolean;
    stealth: boolean;
    arcana: boolean;
    history: boolean;
    investigation: boolean;
    nature: boolean;
    religion: boolean;
    animalHandling: boolean;
    insight: boolean;
    medicine: boolean;
    perception: boolean;
    survival: boolean;
    deception: boolean;
    intimidation: boolean;
    performance: boolean;
    persuasion: boolean;

    // @ts-ignore
    constructor(savingThrowsGroup: FormGroup, id: string = null) {
        this.athletics = savingThrowsGroup.get("athletics")?.value;
        this.acrobatics = savingThrowsGroup.get("acrobatics")?.value;
        this.sleightOfHands = savingThrowsGroup.get("sleightOfHands")?.value;
        this.stealth = savingThrowsGroup.get("stealth")?.value;
        this.arcana = savingThrowsGroup.get("arcana")?.value;
        this.history = savingThrowsGroup.get("history")?.value;
        this.investigation = savingThrowsGroup.get("investigation")?.value;
        this.nature = savingThrowsGroup.get("nature")?.value;
        this.religion = savingThrowsGroup.get("religion")?.value;
        this.animalHandling = savingThrowsGroup.get("animalHandling")?.value;
        this.insight = savingThrowsGroup.get("insight")?.value;
        this.medicine = savingThrowsGroup.get("medicine")?.value;
        this.perception = savingThrowsGroup.get("perception")?.value;
        this.survival = savingThrowsGroup.get("survival")?.value;
        this.deception = savingThrowsGroup.get("deception")?.value;
        this.intimidation = savingThrowsGroup.get("intimidation")?.value;
        this.performance = savingThrowsGroup.get("performance")?.value;
        this.persuasion = savingThrowsGroup.get("persuasion")?.value;
        this.id = id;
    }
}
