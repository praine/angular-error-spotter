import * as _ from "lodash";
import { Injectable } from "@angular/core";
import {
    ERROR_TYPE_DELETION, ERROR_TYPE_SUBSTITUTION, Sentence, SentenceDisplay,
    SentenceDistractor
} from "./sentence";
import { Word } from "./word";

@Injectable()
export class ErrorSpotterStateService {
    private sentences: Sentence[];
    private currentSentenceDisplay: SentenceDisplay;
    private currentDistractor: SentenceDistractor;
    private started: boolean = false;
    private completed: boolean = false;

    constructor() {
    }

    startQuiz(): void {
        this.generateNextSentence();
        this.started = true;
    }

    setSentences(sentences: Sentence[]): void {
        this.sentences = _.shuffle(sentences);
    }

    getCurrentSentenceDisplay(): SentenceDisplay {
        return this.currentSentenceDisplay;
    }

    generateNextSentence(): SentenceDisplay {
        if (_.isEmpty(this.sentences)) {
            this.completed = true;
            return;
        }

        let currentSentence = _.head(this.sentences);
        this.currentDistractor = _.head(currentSentence.distractors);
        this.currentSentenceDisplay = this.generateSentenceDisplay(currentSentence);

        this.sentences = _.tail(this.sentences);

        return this.currentSentenceDisplay;
    }

    private generateSentenceDisplay(sentence: Sentence): SentenceDisplay {
        let sentenceDisplay = {
            sentenceID: sentence.sentenceID,
            displayWords: []
        };

        _.reduce(sentence.words, (transcript: string, word: Word) => {
            let wordOrthography = _.toLower(Word.getOrthography(word));

            let wordIndex = _.toLower(transcript).indexOf(wordOrthography);
            let wordEndIndex = wordIndex + wordOrthography.length;
            let nextBoundaryIndex = transcript.indexOf(" ", wordEndIndex);
            let prefix = _.slice(transcript, 0, wordIndex).join("") || "";
            let text = _.slice(transcript, wordIndex, wordEndIndex).join("");
            let postfix = nextBoundaryIndex !== -1
                ? _.slice(transcript, wordEndIndex, nextBoundaryIndex).join("")
                : _.slice(transcript, wordEndIndex).join("");

            if (word.sequence === this.currentDistractor.sequence) {
                sentenceDisplay.displayWords.push({
                    prefix: prefix,
                    text: this.currentDistractor.transcript || " ",
                    postfix: postfix,
                    visible: true,
                    distractor: true,
                    sequence: word.sequence,
                    word: this.currentDistractor.word
                });
            }

            sentenceDisplay.displayWords.push({
                prefix: prefix,
                text: text,
                postfix: postfix,
                visible: word.sequence !== this.currentDistractor.sequence,
                distractor: false,
                sequence: word.sequence,
                word: word
            });

            if (nextBoundaryIndex === -1) {
                return "";
            }

            // add space after
            if (this.currentDistractor.errorType === ERROR_TYPE_SUBSTITUTION) {
                sentenceDisplay.displayWords.push({
                    prefix: "",
                    text: " ",
                    postfix: "",
                    visible: true,
                    distractor: false,
                    sequence: word.sequence
                });
            }

            if (this.currentDistractor.errorType === ERROR_TYPE_DELETION) {
                sentenceDisplay.displayWords.push({
                    prefix: "",
                    text: " ",
                    postfix: "",
                    visible: word.sequence !== this.currentDistractor.sequence && word.sequence !== this.currentDistractor.sequence - 1,
                    distractor: false,
                    sequence: word.sequence
                });
            }

            return _.slice(transcript, nextBoundaryIndex).join("").trim();
        }, _.trimStart(sentence.transcript));

        console.log("Sentence Words", sentenceDisplay);
        return sentenceDisplay;
    }

    isStarted(): boolean {
        return this.started;
    }

    isCompleted(): boolean {
        return this.completed;
    }
}
