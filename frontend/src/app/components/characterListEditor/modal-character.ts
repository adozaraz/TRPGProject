import {Component, OnInit} from "@angular/core";
import {UserService} from "../../services/user.service";
import {TokenStorageService} from "../../security/token-storage.service";
import {Router} from "@angular/router";
import {Role} from "../../models/user.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'modal-component',
    templateUrl: './modal-character.html',
    styleUrls: ['./modal-character.scss']
})
export class ModalCharacterComponent {
    //characterList: FormGroup;
    stats: FormGroup;
    skillsProf: FormGroup;
    savingThrowsProf: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        // this.characterList = this.formBuilder.group();
        this.stats = this.formBuilder.group({
            strength: "",
            dexterity: "",
            constitution: "",
            intelligence: "",
            wisdom: "",
            charisma: ""
        });
        this.skillsProf = this.formBuilder.group({

        });
        this.savingThrowsProf = this.formBuilder.group({
            strength: false,
            dexterity: false,
            constitution: false,
            intelligence: false,
            wisdom: false,
            charisma: false
        });
    }

    calculateModificator(number: number) {
        // @ts-ignore
        if (number != "") return Math.floor((number - 10) / 2);
        else return " ";
    }

}
