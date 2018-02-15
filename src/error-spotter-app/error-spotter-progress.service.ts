import * as _ from "lodash";
import * as moment from "moment";
import { Injectable } from "@angular/core";
import { StopWatch } from "./stopwatch";
import { ErrorSpotterAnswer, SentenceDisplay, SentenceDisplayWord } from "./sentence";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/interval";
import { Subscription } from "rxjs/Subscription";

@Injectable()
export class ErrorSpotterProgressService {

    private accountId: number = 0;
    private sessionStopWatch = new StopWatch();
    private answerStopWatch = new StopWatch();
    private activity: any;
    private answers: ErrorSpotterAnswer[] = [];
    private sessionTime: string;
    private subscriptions: Subscription[] = [];

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

        this.generateSessionTime();
        let subscription = Observable.interval(1000)
            .subscribe(() => {
                this.generateSessionTime();
            });
        this.subscriptions.push(subscription);

        this.sendStartEvent();
    }

    private generateSessionTime(): void {
        this.sessionTime = moment(this.sessionStopWatch.getTime()).format("mm:ss");
    }

    endSession(): void {
        this.sessionStopWatch.stop();
        this.sendCompletionEvent();
        _.map(this.subscriptions, subscription => subscription.unsubscribe());
    }

    getSessionTime(): string {
        return this.sessionTime;
    }

    startQuestion(): void {
        this.answerStopWatch.reset();
        this.answerStopWatch.start();
        this.sendQuestionStartEvent();
    }

    answer(sentence: SentenceDisplay, sentenceWord: SentenceDisplayWord, selectedIndex: number, correct: boolean): void {
        this.sendAnswerEvent(sentenceWord, selectedIndex, correct);
        this.answers.push({
            correct: correct,
            sentence: sentence,
            selectedIndex: selectedIndex
        });
    }

    getAnswers(): ErrorSpotterAnswer[] {
        return this.answers;
    }

    getTotalCorrectAnswers(): number {
        return _.filter(this.answers, answer => answer.correct).length;
    }

    sendStartEvent(): void {
        if (!this.activity) {
            return;
        }
    }

    sendCompletionEvent(): void {
        if (!this.activity) {
            return;
        }
    }

    sendQuestionStartEvent(): void {

    }

    sendAnswerEvent(sentenceWord: SentenceDisplayWord, selectedIndex: number, correct: boolean): void {
        this.answerStopWatch.stop();

        let event = {
            correct: correct,
            selectedIndex: selectedIndex,
            selectedWord: {
                wordHeadID: sentenceWord.word ? sentenceWord.word.wordHeadID : undefined, // undefined for space, need to define how we should store incprrect space events
                wordRootID: sentenceWord.word ? sentenceWord.word.wordHeadID : undefined,
                sequence: sentenceWord.sequence
            },
            timeOnTask: this.answerStopWatch.getTime()
        }
    }
}
