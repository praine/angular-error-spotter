import * as _ from "lodash";
import { Injectable } from "@angular/core";
import { Sentence } from "./sentence";

@Injectable()
export class ErrorSpotterStateService {
    private sentences: Sentence[];
    private currentSentence: Sentence;

    constructor() {
    }

    setSentences(sentences: Sentence[]): void {
        this.sentences = _.shuffle(sentences);
    }

    getCurrentSentence(): Sentence {
        return this.currentSentence;
    }

    onAnswer(sentenceId: number) {
        if (this.currentSentence.sentenceID == sentenceId) {
            this.generateNextSentence();
        }
    }

    generateNextSentence(): Sentence {
        this.currentSentence = _.head(this.sentences);
        this.sentences = _.tail(this.sentences);
        return this.currentSentence;
    }
}
