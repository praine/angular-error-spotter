import { Word } from "./word";

export class Sentence {
    sentenceID: number;
    sentence: string;
    words: Word[];
    distractors: Word[];
}
