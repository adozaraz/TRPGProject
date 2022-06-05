import {Component, Input} from "@angular/core";

@Component({
    selector: 'modal-information',
    templateUrl: './modal-information.html',
    styleUrls: ['./modal-information.scss']
})
export class ModalInformation {
    @Input("itemToShow") itemToShow: any;
    // @ts-ignore
    @Input("itemType") itemType: number;

    constructor() {
    }

    showRarity(itemRarity: number) {
        switch (itemRarity) {
            case 0: return "Обычный";
            case 1: return "Необычный";
            case 2: return "Редкий";
            case 3: return "Очень редкий";
            case 4: return "Легендарный";
            case 5: return "Артифакт";
            default: return "Ошибка"
        }
    }

    showSize(itemSize: number) {
        switch (itemSize) {
            case 0: return "Крошечный";
            case 1: return "Маленький";
            case 2: return "Средний";
            case 3: return "Большой";
            case 4: return "Огромный";
            case 5: return "Громадный";
            default: return "Ошибка"
        }
    }
}
