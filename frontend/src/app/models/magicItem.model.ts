import {User} from "./user.model";
import {FormGroup} from "@angular/forms";

export class MagicItem {
    owner: User;
    name: string;
    description: string;
    attunementRequirement: boolean;
    rarity: number;
    globalDatabase: boolean;

    // @ts-ignore
    constructor(owner: User, magicItemGroup: FormGroup, addToGlobalDatabase: boolean = false) {
        this.owner = owner;
        this.name = magicItemGroup.get("name")?.value;
        this.description = magicItemGroup.get("description")?.value;
        this.attunementRequirement = magicItemGroup.get("attunementRequired")?.value;
        this.rarity = magicItemGroup.get("rarity")?.value;
        this.globalDatabase = addToGlobalDatabase;
    }
}
