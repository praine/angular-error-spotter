export const TEST_SENTENCES = [
    {
        "sentenceID": 123,
        "transcript": "You're my valentine!",
        "errorCategory": "Homophone",
        "words": [
            {
                "wordHeadID": 456,
                "wordRootID": 567,
                "wordInstanceOrthography": "YOU'RE",
                "partOfSpeech": "contraction",
                "sequence": 1
            },
            {
                "wordHeadID": 100,
                "wordRootID": 891,
                "wordInstanceOrthography": "MY",
                "partOfSpeech": "adjective",
                "sequence": 2
            },
            {
                "wordHeadID": 143,
                "wordRootID": 999,
                "wordInstanceOrthography": "VALENTINE",
                "partOfSpeech": "noun",
                "sequence": 3
            }
        ],
        "distractors": [
            {
                "sequence": 1,
                "transcript": "Your",
                "errorType": "substitution",
                "word": {
                    "wordHeadID": 789,
                    "wordRootID": 442,
                    "wordInstanceOrthography": "YOUR",
                    "partOfSpeech": "adjective"
                }
            }
        ]
    },
    {
        "sentenceID": 456,
        "transcript": "Where is Waldo?",
        "errorCategory": "Deletion",
        "words": [
            {
                "wordHeadID": 456,
                "wordRootID": 567,
                "wordInstanceOrthography": "WHERE",
                "partOfSpeech": "contraction",
                "sequence": 1
            },
            {
                "wordHeadID": 100,
                "wordRootID": 891,
                "wordInstanceOrthography": "IS",
                "partOfSpeech": "adjective",
                "sequence": 2
            },
            {
                "wordHeadID": 143,
                "wordRootID": 999,
                "wordInstanceOrthography": "WALDO",
                "partOfSpeech": "noun",
                "sequence": 3
            }
        ],
        "distractors": [
            {
                "sequence": 2,
                "errorType": "deletion"
            }
        ]
    },
    {
        "sentenceID": 789,
        "transcript": "This is a very long sentence.",
        "errorCategory": "Deletion",
        "words": [
            {
                "wordHeadID": 456,
                "wordRootID": 567,
                "wordInstanceOrthography": "THIS",
                "partOfSpeech": "contraction",
                "sequence": 1
            },
            {
                "wordHeadID": 100,
                "wordRootID": 891,
                "wordInstanceOrthography": "IS",
                "partOfSpeech": "adjective",
                "sequence": 2
            },
            {
                "wordHeadID": 143,
                "wordRootID": 999,
                "wordInstanceOrthography": "A",
                "partOfSpeech": "noun",
                "sequence": 3
            },
            {
                "wordHeadID": 143,
                "wordRootID": 999,
                "wordInstanceOrthography": "VERY",
                "partOfSpeech": "noun",
                "sequence": 4
            },

            {
                "wordHeadID": 143,
                "wordRootID": 999,
                "wordInstanceOrthography": "LONG",
                "partOfSpeech": "noun",
                "sequence": 5
            },
            {
                "wordHeadID": 143,
                "wordRootID": 999,
                "wordInstanceOrthography": "SENTENCE",
                "partOfSpeech": "noun",
                "sequence": 6
            }
        ],
        "distractors": [
            {
                "sequence": 1,
                "transcript": "These",
                "errorType": "substitution",
                "word": {
                    "wordHeadID": 789,
                    "wordRootID": 442,
                    "wordInstanceOrthography": "THESE",
                    "partOfSpeech": "pronoun"
                }
            }
        ]
    },
    {
        "sentenceID": 789,
        "transcript": "Substitution in the middle of a sentence",
        "errorCategory": "Spelling",
        "words": [
            {
                "wordHeadID": 456,
                "wordRootID": 567,
                "wordInstanceOrthography": "SUBSTITUTION",
                "partOfSpeech": "contraction",
                "sequence": 1
            },
            {
                "wordHeadID": 100,
                "wordRootID": 891,
                "wordInstanceOrthography": "IN",
                "partOfSpeech": "adjective",
                "sequence": 2
            },
            {
                "wordHeadID": 143,
                "wordRootID": 999,
                "wordInstanceOrthography": "THE",
                "partOfSpeech": "noun",
                "sequence": 3
            },
            {
                "wordHeadID": 143,
                "wordRootID": 999,
                "wordInstanceOrthography": "MIDDLE",
                "partOfSpeech": "noun",
                "sequence": 4
            },
            {
                "wordHeadID": 143,
                "wordRootID": 999,
                "wordInstanceOrthography": "OF",
                "partOfSpeech": "noun",
                "sequence": 5
            },
            {
                "wordHeadID": 143,
                "wordRootID": 999,
                "wordInstanceOrthography": "A",
                "partOfSpeech": "noun",
                "sequence": 6
            },
            {
                "wordHeadID": 143,
                "wordRootID": 999,
                "wordInstanceOrthography": "SENTENCE",
                "partOfSpeech": "noun",
                "sequence": 7
            }
        ],
        "distractors": [
            {
                "sequence": 4,
                "transcript": "middel",
                "errorType": "substitution"
            }
        ]
    }
];
