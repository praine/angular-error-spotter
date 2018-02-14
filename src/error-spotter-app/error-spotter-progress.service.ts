import * as _ from "lodash";
import { Injectable } from "@angular/core";
import { StopWatch } from "./stopwatch";
import { SentenceDisplayWord } from "./sentence";


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

    answer(correct: boolean, sentenceWord: SentenceDisplayWord): void {
        let event = {
            correct: correct,
            selectedWord: {
                wordHeadID: sentenceWord.word.wordHeadID, // undefined for space, need to define how we should store incprrect space events
                wordRootID: sentenceWord.word.wordHeadID,
                sequence: sentenceWord.sequence
            }
        }
    }

    sendStartEvent(): void {

    }

    sendCompletionEvent(): void {

    }

    sendAnswerEvent(): void {

    }
}
