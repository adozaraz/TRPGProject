import {User} from "./user.model";
import {FormGroup} from "@angular/forms";

export class Spell {
    owner: User;
    name: string;
    description: string;
    globalDatabase: boolean;
    level: number;
    school: string;
    actionTime: string;
    distance: string;
    verbalComp: boolean;
    somaticComp: boolean;
    materialComp: boolean;
    material: string;
    availableClasses: string;

    constructor(owner: User, spellGroup: FormGroup, addToGlobalDatabase: boolean = false) {
        this.owner = owner;
        this.name = spellGroup.get("name")?.value;
        this.description = spellGroup.get("description")?.value;
        this.level = spellGroup.get("level")?.value;
        this.school = spellGroup.get("school")?.value;
        this.actionTime = spellGroup.get("actionTime")?.value;
        this.distance = spellGroup.get("distance")?.value;
        this.verbalComp = spellGroup.get("verbalComp")?.value;
        this.somaticComp = spellGroup.get("somaticComp")?.value;
        this.materialComp = spellGroup.get("materialComp")?.value;
        this.material = spellGroup.get("material")?.value;
        this.availableClasses = spellGroup.get("availableClasses")?.value;
        this.globalDatabase = addToGlobalDatabase;
    }
}
