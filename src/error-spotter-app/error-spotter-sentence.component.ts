import * as _ from "lodash";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { SentenceDisplay } from "./sentence";


@Component({
    selector: "ec-error-spotter-sentence",
    templateUrl: "error-spotter-sentence.component.html",
    styleUrls: ["error-spotter-sentence.component.css"]
})
export class ErrorSpotterSentenceComponent {
    @Input() currentSentence?: SentenceDisplay;
    @Input() selectedIndex?: number;
    @Input() checked: boolean = false;
    @Input() deletion: boolean = false;
    @Output() onWordSelect = new EventEmitter<number>();


    getCurrentSentence(): SentenceDisplay | undefined {
        return this.currentSentence;
    }

    isChecked() {
        return this.checked;
    }

    isSelected(index: number): boolean {
        return this.selectedIndex === index;
    }

    isErrorTypeDeletion(): boolean {
        return this.deletion;
    }

    selectDisplayWord(index: number): void {
        if (this.isChecked()) {
            return;
        }
        this.onWordSelect.emit(index);
    }
}
