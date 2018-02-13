import * as _ from "lodash";
import { Injectable } from "@angular/core";
import { StopWatch } from "./stopwatch";


@Injectable()
export class ErrorSpotterProgressService {

    private accountId: number = 0;
    private sessionStopWatch = new StopWatch();
    private answerStopWatch = new StopWatch();
    private activity: any;

    constructor() {
    }

    setAccountId(accountId: number): void {
        this.accountId = accountId;
    }

    setActivity(activity: any): void {
        this.activity = activity;
    }

    getAccountId(): number {
        return this.accountId;
    }

    startSession(): void {
        this.sessionStopWatch.start();

        if (!this.activity) {
            return;
        }

    }

    endSession(): void {
        this.sendCompletionEvent();
    }

    answer(): void {
        
    }

    sendStartEvent(): void {

    }

    sendCompletionEvent(): void {

    }

    sendAnswerEvent(): void {

    }
}
