// Main verses file - combines all Art of War translations

var verseTexts = {
    "Giles": versesGiles,
    "Wing": versesWing,
};

// Giles chapter titles (13 chapters)
var chapterTitlesGiles = [
    "Laying Plans",
    "Waging War",
    "Attack by Stratagem",
    "Tactical Dispositions",
    "Energy",
    "Weak Points and Strong",
    "Maneuvering",
    "Variation in Tactics",
    "The Army on the March",
    "Terrain",
    "The Nine Situations",
    "The Attack by Fire",
    "The Use of Spies"
];

// Wing chapter titles (13 chapters - these appear in the verse display box)
var chapterTitlesWing = [
    "The Calculations",           // Chapter 1
    "The Challenge",              // Chapter 2
    "The Plan of Attack",         // Chapter 3
    "Positioning",                // Chapter 4
    "Directing",                  // Chapter 5
    "Illusion and Reality",       // Chapter 6
    "Engaging the Force",         // Chapter 7
    "The Nine Variations",        // Chapter 8
    "Moving the Force",           // Chapter 9
    "Situational Positioning",    // Chapter 10
    "The Nine Situations",        // Chapter 11
    "The Fiery Attack",           // Chapter 12
    "The Use Of Intelligence"     // Chapter 13
];

// Wing week titles (52 weeks total: 13 chapters × 4 weeks each)
var wingWeekTitles = [
    // Chapter 1 - 4 weeks
    "The Five Fundamentals of Strategy",  // Week 1
    "Examining the Fundamentals",         // Week 2
    "The Tao of Paradox",                 // Week 3
    "Foretelling Triumph",                // Week 4
    
    // Chapter 2 - 4 weeks
    "[Ch 2, Week 1 title]",               // Week 5
    "[Ch 2, Week 2 title]",               // Week 6
    "[Ch 2, Week 3 title]",               // Week 7
    "[Ch 2, Week 4 title]",               // Week 8
    
    // Chapter 3 - 4 weeks
    "[Ch 3, Week 1 title]",               // Week 9
    "[Ch 3, Week 2 title]",               // Week 10
    "[Ch 3, Week 3 title]",               // Week 11
    "[Ch 3, Week 4 title]",               // Week 12
    
    // Chapter 4 - 4 weeks
    "[Ch 4, Week 1 title]",               // Week 13
    "[Ch 4, Week 2 title]",               // Week 14
    "[Ch 4, Week 3 title]",               // Week 15
    "[Ch 4, Week 4 title]",               // Week 16
    
    // Chapter 5 - 4 weeks
    "[Ch 5, Week 1 title]",               // Week 17
    "[Ch 5, Week 2 title]",               // Week 18
    "[Ch 5, Week 3 title]",               // Week 19
    "[Ch 5, Week 4 title]",               // Week 20
    
    // Chapter 6 - 4 weeks
    "[Ch 6, Week 1 title]",               // Week 21
    "[Ch 6, Week 2 title]",               // Week 22
    "[Ch 6, Week 3 title]",               // Week 23
    "[Ch 6, Week 4 title]",               // Week 24
    
    // Chapter 7 - 4 weeks
    "[Ch 7, Week 1 title]",               // Week 25
    "[Ch 7, Week 2 title]",               // Week 26
    "[Ch 7, Week 3 title]",               // Week 27
    "[Ch 7, Week 4 title]",               // Week 28
    
    // Chapter 8 - 4 weeks
    "[Ch 8, Week 1 title]",               // Week 29
    "[Ch 8, Week 2 title]",               // Week 30
    "[Ch 8, Week 3 title]",               // Week 31
    "[Ch 8, Week 4 title]",               // Week 32
    
    // Chapter 9 - 4 weeks
    "[Ch 9, Week 1 title]",               // Week 33
    "[Ch 9, Week 2 title]",               // Week 34
    "[Ch 9, Week 3 title]",               // Week 35
    "[Ch 9, Week 4 title]",               // Week 36
    
    // Chapter 10 - 4 weeks
    "[Ch 10, Week 1 title]",              // Week 37
    "[Ch 10, Week 2 title]",              // Week 38
    "[Ch 10, Week 3 title]",              // Week 39
    "[Ch 10, Week 4 title]",              // Week 40
    
    // Chapter 11 - 4 weeks
    "[Ch 11, Week 1 title]",              // Week 41
    "[Ch 11, Week 2 title]",              // Week 42
    "[Ch 11, Week 3 title]",              // Week 43
    "[Ch 11, Week 4 title]",              // Week 44
    
    // Chapter 12 - 4 weeks
    "[Ch 12, Week 1 title]",              // Week 45
    "[Ch 12, Week 2 title]",              // Week 46
    "[Ch 12, Week 3 title]",              // Week 47
    "[Ch 12, Week 4 title]",              // Week 48
    
    // Chapter 13 - 4 weeks
    "[Ch 13, Week 1 title]",              // Week 49
    "[Ch 13, Week 2 title]",              // Week 50
    "[Ch 13, Week 3 title]",              // Week 51
    "[Ch 13, Week 4 title]",              // Week 52
];

// Wing week mapping (week number to chapter/section)
var wingWeekMap = {
    1: { chapter: 1, section: 1 },
    2: { chapter: 1, section: 2 },
    3: { chapter: 1, section: 3 },
    4: { chapter: 1, section: 4 },
    5: { chapter: 2, section: 1 },
    6: { chapter: 2, section: 2 },
    7: { chapter: 2, section: 3 },
    8: { chapter: 2, section: 4 },
    9: { chapter: 3, section: 1 },
    10: { chapter: 3, section: 2 },
    11: { chapter: 3, section: 3 },
    12: { chapter: 3, section: 4 },
    13: { chapter: 4, section: 1 },
    14: { chapter: 4, section: 2 },
    15: { chapter: 4, section: 3 },
    16: { chapter: 4, section: 4 },
    17: { chapter: 5, section: 1 },
    18: { chapter: 5, section: 2 },
    19: { chapter: 5, section: 3 },
    20: { chapter: 5, section: 4 },
    21: { chapter: 6, section: 1 },
    22: { chapter: 6, section: 2 },
    23: { chapter: 6, section: 3 },
    24: { chapter: 6, section: 4 },
    25: { chapter: 7, section: 1 },
    26: { chapter: 7, section: 2 },
    27: { chapter: 7, section: 3 },
    28: { chapter: 7, section: 4 },
    29: { chapter: 8, section: 1 },
    30: { chapter: 8, section: 2 },
    31: { chapter: 8, section: 3 },
    32: { chapter: 8, section: 4 },
    33: { chapter: 9, section: 1 },
    34: { chapter: 9, section: 2 },
    35: { chapter: 9, section: 3 },
    36: { chapter: 9, section: 4 },
    37: { chapter: 10, section: 1 },
    38: { chapter: 10, section: 2 },
    39: { chapter: 10, section: 3 },
    40: { chapter: 10, section: 4 },
    41: { chapter: 11, section: 1 },
    42: { chapter: 11, section: 2 },
    43: { chapter: 11, section: 3 },
    44: { chapter: 11, section: 4 },
    45: { chapter: 12, section: 1 },
    46: { chapter: 12, section: 2 },
    47: { chapter: 12, section: 3 },
    48: { chapter: 12, section: 4 },
    49: { chapter: 13, section: 1 },
    50: { chapter: 13, section: 2 },
    51: { chapter: 13, section: 3 },
    52: { chapter: 13, section: 4 },
};

// Helper function to get week info
function getWeekInfo(weekNumber, translation) {
    if (translation === "Wing") {
        return wingWeekMap[weekNumber];
    } else {
        // For Giles: week = chapter
        return { chapter: weekNumber, section: null };
    }
}

// Helper to get title
function getWeekTitle(weekNumber, translation) {
    if (translation === "Wing") {
        return wingWeekTitles[weekNumber - 1]; // Array is 0-indexed
    } else {
        return chapterTitlesGiles[weekNumber - 1];
    }
}
