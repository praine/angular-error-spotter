import { Word } from "../../model/types/word";

export class Sentence {
    sentenceID: number;
    sentence: string;
    words: Word[];
    distractors: Word[];
}
