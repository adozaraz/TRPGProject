import {AfterViewInit, Component, Input} from "@angular/core";

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

    showRarity(itemRarity: string) {
        switch (itemRarity) {
            case "COMMON": return "Обычный";
            case "UNCOMMON": return "Необычный";
            case "RARE": return "Редкий";
            case "VERY_RARE": return "Очень редкий";
            case "LEGENDARY": return "Легендарный";
            case "ARTIFACT": return "Артифакт";
            default: return "Ошибка"
        }
    }

    showSize(itemSize: string) {
        switch (itemSize) {
            case "TINY": return "Крошечный";
            case "SMALL": return "Маленький";
            case "MEDIUM": return "Средний";
            case "LARGE": return "Большой";
            case "HUGE": return "Огромный";
            case "GARGANTUAN": return "Громадный";
            default: return "Ошибка"
        }
    }

    showAlignment(alignment: string) {
        switch (alignment) {
            case "LAWFUL_GOOD": return "Законно-добрый";
            case "LAWFUL_NEUTRAL": return "Законно-нейтральный";
            case "LAWFUL_EVIL": return "Законно-злой";
            case "NEUTRAL_GOOD": return "Нейтрально-добрый";
            case "TRUE_NEUTRAL": return "Нейтральный";
            case "NEUTRAL_EVIL": return "Нейтрально-злой";
            case "CHAOTIC_GOOD": return "Хаотично-добрый";
            case "CHAOTIC_NEUTRAL": return "Хаотично-нейтральный";
            case "CHAOTIC_EVIL": return "Хаотично-злой";
            default: return "Ошибка";
        }
    }
}
