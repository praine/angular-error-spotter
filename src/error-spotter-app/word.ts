import * as _ from "lodash";

export class WordReference {
    wordHeadID: number;
    wordRootID: number;
    wordRootDefinitionID?: number;
    wordInstanceID?: number;
    dialogLineID?: number;
}

export class Word extends WordReference {
    static VERSION2 = "v2";
    audioURL?: string;
    cliplistCount?: number;
    definition?: string;
    difficultyLevel?: number;
    displayText?: WordDisplayText = undefined;
    example?: string;
    excluded?: boolean;
    featured?: boolean;
    isStudiable?: boolean;
    isLearnWord?: boolean;
    isCliplistKeyword?: boolean;
    orthography?: string;
    partOfSpeech?: string;
    pronunciation?: string;
    sequence?: number;
    thumbnailURL?: string;
    wordRootOrthography?: string;
    wordInstanceOrthography?: string;
    completed?: boolean;
    version?: string;

    static getOrthography(word: Word): string {
        return _.get(word, "orthography", _.get(word, "wordInstanceOrthography", ""));
    }
}

class WordDisplayText {
    display: string;
    post: "";
    pre: "";
}
