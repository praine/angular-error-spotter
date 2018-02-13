import { Component } from "@angular/core";
import { ErrorSpotterStateService } from "./error-spotter-state.service";
import { ErrorSpotterProgressService } from "./error-spotter-progress.service";

@Component({
    selector: "ec-error-spotter-app",
    templateUrl: "error-spotter-app.component.html"
})
export class ErrorSpotterAppComponent {

    constructor(
        private errorSpotterState: ErrorSpotterStateService,
        private errorSpotterProgressService: ErrorSpotterProgressService) {

    }

}
