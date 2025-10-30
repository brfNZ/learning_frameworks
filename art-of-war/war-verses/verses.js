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
    
    // ... continue for all 13 chapters (52 weeks total)
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
    // ... continue pattern for all 52 weeks
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
