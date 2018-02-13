import * as _ from "lodash";
import { Injectable } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { StopWatch } from "../shared-activity/stopwatch.service";
import { Emitter } from "../../core/emitters/emitter";
import { Activity } from "../../model/types/activity";
import { EventFactoryService } from "../../common-app/progress-app/event-factory.service";
import { ProgressQueueService } from "../../common-app/progress-app/progress-queue.service";


@Injectable()
export class ErrorSpotterProgressService {

    private accountId: number = 0;
    private emitter = new Emitter();
    private sessionStopWatch = new StopWatch();
    private answerStopWatch = new StopWatch();
    private activity?: Activity;

    constructor(private eventFactoryService: EventFactoryService,
                private progressQueueService: ProgressQueueService) {
    }

    setAccountId(accountId: number): void {
        this.accountId = accountId;
    }

    setActivity(activity: Activity): void {
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
