// Main verses file - combines all Art of War translations

var verseTexts = {
    "Giles": versesGiles,
    "Wing": versesWing,
};

// Giles chapter titles
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

// Wing chapter titles (different translations)
var chapterTitlesWing = [
    "The Five Fundamentals of Strategy",  // Chapter 1
    "Examining the Fundamentals",
    "The Tao of Paradox",
    "Foretelling Triumph",
    " ",  // Chapter 2
    // ... complete for all 13 chapters
];

// Helper to get the right title array
function getChapterTitles(translation) {
    return translation === "Wing" ? chapterTitlesWing : chapterTitlesGiles;
}
