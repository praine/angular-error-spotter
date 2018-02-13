import { Component } from "@angular/core";
import { IdentityService } from "../../core/identity.service";
import { ErrorSpotterStateService } from "./error-spotter-state.service";
import { ErrorSpotterProgressService } from "./error-spotter-progress.service";

@Component({
    selector: "ec-error-spotter-app",
    templateUrl: "error-spotter-app.component.html"
})
export class ErrorSpotterAppComponent {

    constructor(
        private errorSpotterState: ErrorSpotterStateService,
        private errorSpotterProgressService: ErrorSpotterProgressService,
        private identityService: IdentityService) {

    }

    isAnonymous(): boolean {
        return this.identityService.isAnonymous();
    }

}
