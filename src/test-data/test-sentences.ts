export const TEST_SENTENCES = [
    {
        "sentenceID": 123,
        "transcript": "You're my valentine!",
        "errorCategory": "Your vs You're (Homophone)",
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
        "sentenceID": 123,
        "transcript": "You're my valentine!",
        "errorCategory": "Word deletion",
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
                "sequence": 2,
                "errorType": "deletion"
            }
        ]
    }
];
