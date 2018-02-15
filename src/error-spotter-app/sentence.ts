import { Word } from "./word";

export class Sentence {
    sentenceID: number;
    transcript: string;
    words: Word[];
    distractors: SentenceDistractor[];
}

export class SentenceDistractor {
    sequence: number;
    transcript?: string;
    errorType: string;
    word?: Word;
}

export const ERROR_TYPE_SUBSTITUTION = "substitution";
export const ERROR_TYPE_DELETION = "deletion";

export class SentenceDisplay {
    sentenceID: number;
    displayWords: SentenceDisplayWord[];
}

export class SentenceDisplayWord {
    prefix: string;
    text: string;
    postfix: string;
    visible: boolean;
    replaced: boolean;
    replacedBy?: string;
    distractor: boolean;
    sequence: number;
    word?: Word;
}

export class ErrorSpotterAnswer {
    correct: boolean;
    sentence: SentenceDisplay;
    selectedIndex: number;
}
