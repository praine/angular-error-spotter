import { NgModule } from "@angular/core";
import { CoreModule } from "../../core/core.module";
import { SharedActivityModule } from "../shared-activity/shared-activity.module";
import { ErrorSpotterAppComponent } from "./error-spotter-app.component";
import { ErrorSpotterStateService } from "./error-spotter-state.service";
import { ErrorSpotterProgressService } from "./error-spotter-progress.service";

@NgModule({
    imports: [
        CoreModule,
        SharedActivityModule
    ],
    providers: [
        ErrorSpotterStateService,
        ErrorSpotterProgressService
    ],
    declarations: [
        ErrorSpotterAppComponent
    ],
    bootstrap: [
        ErrorSpotterAppComponent
    ],
    exports: [
        ErrorSpotterAppComponent
    ]
})
export class ErrorSpotterAppModule {
}
