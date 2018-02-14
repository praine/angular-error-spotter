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

    constructor(
        private errorSpotterStateService: ErrorSpotterStateService,
        private errorSpotterProgressService: ErrorSpotterProgressService) {
        this.initialize();
    }

    initialize(): void {
        this.errorSpotterStateService.setSentences(TEST_SENTENCES);
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

}
