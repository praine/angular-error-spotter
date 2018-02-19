import * as _ from "lodash";
import { Injectable } from "@angular/core";
import {
    ERROR_TYPE_DELETION, ERROR_TYPE_INSERTION, ERROR_TYPE_SUBSTITUTION, Sentence, SentenceDisplay, SentenceDisplayWord,
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

    getDisplayWordByIndex(index: number): SentenceDisplayWord | undefined {
        if (!this.currentSentenceDisplay || _.isEmpty(this.currentSentenceDisplay.displayWords)) {
            return undefined;
        }
        return this.currentSentenceDisplay.displayWords[index];
    }

    generateNextSentence(): SentenceDisplay | undefined {
        if (_.isEmpty(this.sentences)) {
            this.completed = true;
            return undefined;
        }

        let currentSentence = _.head(this.sentences);
        this.currentDistractor = _.head(currentSentence.distractors);
        this.currentSentenceDisplay = this.generateSentenceDisplay(currentSentence);

        this.sentences = _.tail(this.sentences);

        return this.currentSentenceDisplay;
    }

    isErrorTypeSubstitution(): boolean {
        return this.currentDistractor.errorType === ERROR_TYPE_SUBSTITUTION;
    }

    isErrorTypeDeletion(): boolean {
        return this.currentDistractor.errorType === ERROR_TYPE_DELETION;
    }

    isErrorTypeInsertion(): boolean {
        return this.currentDistractor.errorType === ERROR_TYPE_INSERTION;
    }

    private generateSentenceDisplay(sentence: Sentence): SentenceDisplay {
        let sentenceDisplay = {
            sentenceID: sentence.sentenceID,
            displayWords: []
        };

        // for test-data processing only
        if (!sentence.words) {
            sentence.words = _.map(_.trimStart(sentence.transcript).split(" "), (word, index) => {
                return {
                    wordHeadID: -1,
                    wordRootID: -1,
                    wordInstanceOrthography: word,
                    sequence: index + 1
                };
            })
        }
        // end test-data processing

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

                let distractorText = _.trim(this.currentDistractor.transcript) || "";
                sentenceDisplay.displayWords.push({
                    prefix: prefix,
                    text: distractorText,
                    postfix: postfix,
                    visible: true,
                    replaced: false,
                    inserted: this.isErrorTypeInsertion(),
                    distractor: true,
                    sequence: word.sequence,
                    word: this.currentDistractor.word
                });

                // add space after if it's an insertion
                if (this.isErrorTypeInsertion()) {
                    sentenceDisplay.displayWords.push({
                        prefix: "",
                        text: "",
                        postfix: "",
                        visible: true,
                        replaced: false,
                        distractor: false,
                        sequence: word.sequence
                    });
                }

                sentenceDisplay.displayWords.push({
                    prefix: prefix,
                    text: text,
                    postfix: postfix,
                    visible: this.isErrorTypeInsertion(),
                    replaced: !this.isErrorTypeInsertion(),
                    replacedBy: !this.isErrorTypeInsertion() ? distractorText : "",
                    distractor: false,
                    sequence: word.sequence,
                    word: word
                });

            } else {

                sentenceDisplay.displayWords.push({
                    prefix: prefix,
                    text: text,
                    postfix: postfix,
                    visible: true,
                    replaced: false,
                    distractor: false,
                    sequence: word.sequence,
                    word: word
                });

            }

            // end of sentence, stop parsing
            if (nextBoundaryIndex === -1) {
                return "";
            }

            // add space after
            if (this.isErrorTypeDeletion()) {
                let visible = word.sequence !== this.currentDistractor.sequence && word.sequence !== this.currentDistractor.sequence - 1;
                sentenceDisplay.displayWords.push({
                    prefix: "",
                    text: "",
                    postfix: "",
                    visible: visible,
                    replaced: !visible,
                    distractor: false,
                    sequence: word.sequence
                });
            } else {
                sentenceDisplay.displayWords.push({
                    prefix: "",
                    text: "",
                    postfix: "",
                    visible: true,
                    replaced: false,
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
