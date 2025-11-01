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
    // Chapter 1 - The Calculations (4 weeks)
    "The Five Fundamentals of Strategy",        // Week 1
    "Examining the Fundamentals",               // Week 2
    "The Tao of Paradox",                       // Week 3
    "Foretelling Triumph",                      // Week 4
    
    // Chapter 2 - The Challenge (4 weeks)
    "Knowing the Costs",                        // Week 5
    "Swift Strategies",                         // Week 6
    "Using the Opponent's Resources",           // Week 7
    "Incorporating the Opponent's Strength",    // Week 8
    
    // Chapter 3 - The Plan of Attack (4 weeks)
    "Engaging the Entire System",               // Week 9
    "The Rule of Numbers",                      // Week 10
    "Three Errors of Leaders",                  // Week 11
    "The Essentials of Triumph",                // Week 12
    
    // Chapter 4 - Positioning (4 weeks)
    "The Power Defense",                        // Week 13
    "The Triumph of No Effort",                 // Week 14
    "The Position of No Error",                 // Week 15
    "The Five Strategic Arts",                  // Week 16
    
    // Chapter 5 - Directing (4 weeks)
    "The Positioned Strategy",                  // Week 17
    "The Power of Surprise",                    // Week 18
    "Moving the Opponent About",                // Week 19
    "Using Others to Create Momentum",          // Week 20
    
    // Chapter 6 - Illusion and Reality (4 weeks)
    "Creating Imbalance",                       // Week 21
    "Distorting the Opponent's Position",       // Week 22
    "Adjusting the Opponent's Numbers",         // Week 23
    "Reacting with Systematic Positioning",     // Week 24
    
    // Chapter 7 - Engaging the Force (4 weeks)
    "Direct and Indirect Tactics",              // Week 25
    "Avoiding Competition",                     // Week 26
    "Flexibility and Imitation",                // Week 27
    "Controlling the Variations",               // Week 28
    
    // Chapter 8 - The Nine Variations (4 weeks)
    "Situational Strategies",                   // Week 29
    "Combining Advantages and Disadvantages",   // Week 30
    "Anticipating the Opponent",                // Week 31
    "Five Weaknesses in Leaders",               // Week 32
    
    // Chapter 9 - Moving the Force (4 weeks)
    "Using the Situation",                      // Week 33
    "Determining the Opponent's Strategy",      // Week 34
    "Determining the Opponent's Vulnerability", // Week 35
    "The Cultivation of Allegiance",            // Week 36
    
    // Chapter 10 - Situational Positioning (4 weeks)
    "The Six Positions",                        // Week 37
    "The Six Strategic Mistakes",               // Week 38
    "Superior Leadership",                      // Week 39
    "Knowing the Situation",                    // Week 40
    
    // Chapter 11 - The Nine Situations (4 weeks)
    "Situational Response",                     // Week 41
    "The Spirit of the Corps",                  // Week 42
    "The Way of the Adventurer",                // Week 43
    "The Strategy of the Superior Leader",      // Week 44
    
    // Chapter 12 - The Fiery Attack (4 weeks)
    "The Five Fiery Attacks",                   // Week 45
    "The Five Fiery Variations",                // Week 46
    "The Decisive Techniques",                  // Week 47
    "The Ultimate Restraint",                   // Week 48
    
    // Chapter 13 - The Use of Intelligence (4 weeks)
    "Obtaining Foreknowledge",                  // Week 49
    "The Divine Web",                           // Week 50
    "The Importance of Counterintelligence",    // Week 51
    "The Essence of Strategy",                  // Week 52
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
function getPositionInfo(position, translation) {
    if (translation === "Wing") {
        return wingWeekMap[position];
    } else {
        // For Giles: position = chapter
        return { chapter: position, section: null };
    }
}
// Helper to get title
function getPositionTitle(position, translation) {
    if (translation === "Wing") {
        return wingWeekTitles[position - 1];
    } else {
        return chapterTitlesGiles[position - 1];
    }
}
