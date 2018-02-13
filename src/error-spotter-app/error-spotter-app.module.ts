import { NgModule } from "@angular/core";
import { ErrorSpotterAppComponent } from "./error-spotter-app.component";
import { ErrorSpotterStateService } from "./error-spotter-state.service";
import { ErrorSpotterProgressService } from "./error-spotter-progress.service";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports: [
        BrowserModule
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
