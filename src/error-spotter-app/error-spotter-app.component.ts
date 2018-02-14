import * as _ from "lodash";
import { Component } from "@angular/core";
import { ErrorSpotterStateService } from "./error-spotter-state.service";
import { ErrorSpotterProgressService } from "./error-spotter-progress.service";
import { TEST_SENTENCES } from "../test-data/test-sentences";
import { SentenceDisplay } from "./sentence";


@Component({
    selector: "ec-error-spotter-app",
    templateUrl: "error-spotter-app.component.html",
    styleUrls: ["error-spotter-app.component.css"]
})
export class ErrorSpotterAppComponent {
    private selectedIndex?: number;
    private checked: boolean = false;

    constructor(
        private errorSpotterStateService: ErrorSpotterStateService,
        private errorSpotterProgressService: ErrorSpotterProgressService) {
        this.initialize();
    }

    initialize(): void {
        this.errorSpotterStateService.setSentences(TEST_SENTENCES);
    }

    reset(): void {
        this.checked = false;
        this.selectedIndex = undefined;
    }

    isStarted(): boolean {
        return this.errorSpotterStateService.isStarted();
    }

    isCompleted(): boolean {
        return this.errorSpotterStateService.isCompleted();
    }

    startQuiz(): void {
        this.errorSpotterStateService.startQuiz();
    }

    getCurrentSentence(): SentenceDisplay | undefined {
        return this.errorSpotterStateService.getCurrentSentenceDisplay();
    }

    selectDisplayWord(index: number): void {
        this.selectedIndex = index;
    }

    hasSelected(): boolean {
        return !_.isUndefined(this.selectedIndex);
    }

    isSelected(index: number): boolean {
        return this.selectedIndex === index;
    }

    checkAnswer(): void {
        if (!this.hasSelected()) {
            return;
        }
        this.checked = true;
    }

    isChecked(): boolean {
        return this.checked;
    }

    nextQuestion(): void {
        if (!this.isChecked()) {
            return;
        }
        this.reset();
        this.errorSpotterStateService.generateNextSentence();
    }
}
