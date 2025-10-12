// data.js
const hexagrams = [
    '䷀', '䷁', '䷂', '䷃', '䷄', '䷅', '䷆', '䷇', '䷈', '䷉', '䷊', '䷋', '䷌', '䷍', '䷎', '䷏',
    '䷐', '䷑', '䷒', '䷓', '䷔', '䷕', '䷖', '䷗', '䷘', '䷙', '䷚', '䷛', '䷜', '䷝', '䷞', '䷟',
    '䷠', '䷡', '䷢', '䷣', '䷤', '䷥', '䷦', '䷧', '䷨', '䷩', '䷪', '䷫', '䷬', '䷭', '䷮', '䷯',
    '䷰', '䷱', '䷲', '䷳', '䷴', '䷵', '䷶', '䷷', '䷸', '䷹', '䷺', '䷻', '䷼', '䷽', '䷾', '䷿'
];

const names = [
    'The Creative', 'The Receptive', 'Difficulty at the Beginning', 'Youthful Folly', 'Waiting', 'Conflict', 'The Army', 'Holding Together',
    'The Taming Power of the Small', 'Treading', 'Peace', 'Standstill', 'Fellowship with Men', 'Possession in Great Measure', 'Modesty', 'Enthusiasm',
    'Following', 'Work on What Has Been Spoiled', 'Approach', 'Contemplation', 'Biting Through', 'Grace', 'Splitting Apart', 'Return',
    'Innocence', 'The Taming Power of the Great', 'The Corners of the Mouth', 'Preponderance of the Great', 'The Abysmal', 'The Clinging',
    'Influence', 'Duration', 'Retreat', 'The Power of the Great', 'Progress', 'Darkening of the Light', 'The Family', 'Opposition',
    'Obstruction', 'Deliverance', 'Decrease', 'Increase', 'Break-through', 'Coming to Meet', 'Gathering Together', 'Pushing Upward',
    'Oppression', 'The Well', 'Revolution', 'The Cauldron', 'The Arousing', 'Keeping Still', 'Development', 'The Marrying Maiden',
    'Abundance', 'The Wanderer', 'The Gentle', 'The Joyous', 'Dispersion', 'Limitation', 'Inner Truth', 'Preponderance of the Small',
    'After Completion', 'Before Completion'
];

// Column 4: The I Ching
const book1 = [3, 7, 11, 14, 17, 20, 23, 25, 28, 30, 32, 36, 38, 41, 43, 46, 48, 51, 54, 56, 59, 61, 63, 66, 68, 70, 73, 76, 79, 82, 85, 91, 93, 96, 100, 103, 108, 111, 113, 116, 119, 123, 126, 131, 135, 140, 142, 145, 149, 153, 156, 160, 162, 165, 170, 172, 175, 177, 179, 185, 189, 198, 200, 209];

// Column 5: A Guide to the I Ching
const book2 = [6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 20, 22, 23, 24, 26, 27, 28, 29, 30, 32, 33, 34, 35, 37, 38, 39, 41, 42, 44, 45, 47, 48, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 61, 63, 64, 65, 66, 67, 68, 70, 72, 73, 75, 76, 77, 78, 80, 81, 82, 84, 85, 86];

// Column 6: The Complete I Ching.10th Ed
const book3 = [53, 71, 89, 99, 107, 115, 122, 129, 136, 144, 151, 160, 168, 177, 184, 192, 200, 208, 215, 222, 229, 236, 243, 249, 257, 264, 271, 279, 287, 295, 303, 311, 319, 326, 333, 339, 346, 353, 360, 367, 374, 381, 388, 395, 402, 409, 416, 424, 431, 439, 447, 454, 461, 468, 475, 482, 488, 495, 501, 507, 513, 520, 529, 537];

// Column 7: The Authentic I Ching
const book4 = [50, 63, 71, 73, 76, 78, 80, 83, 85, 87, 89, 92, 94, 96, 98, 100, 103, 105, 107, 110, 112, 115, 117, 120, 122, 125, 127, 130, 132, 134, 137, 139, 141, 144, 146, 148, 150, 153, 156, 158, 161, 163, 166, 168, 171, 173, 176, 178, 181, 183, 186, 189, 191, 193, 196, 198, 200, 203, 205, 207, 210, 212, 215, 217];

// Column 8: I Ching Pt.1
const book5 = [22, 25, 28, 30, 32, 34, 35, 37, 40, 42, 44, 46, 48, 49, 51, 53, 55, 57, 59, 61, 63, 65, 66, 68, 70, 71, 73, 75, 77, 79, 81, 83, 84, 86, 88, 89, 91, 93, 95, 97, 99, 101, 103, 105, 107, 109, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 131, 133, 135, 137, 139, 142, 144];

// Column 9: I Ching Pt.2
const book6 = [2, 10, 17, 20, 23, 25, 28, 30, 33, 35, 38, 41, 43, 46, 48, 51, 53, 56, 58, 60, 62, 65, 67, 69, 71, 74, 76, 79, 82, 84, 87, 89, 92, 94, 96, 99, 101, 103, 106, 109, 111, 114, 118, 121, 124, 126, 128, 131, 134, 137, 140, 143, 145, 148, 151, 154, 156, 159, 161, 164, 166, 168, 171, 174];

// Column 10: Taoist I Ching
const book7 = [22, 24, 26, 28, 29, 31, 33, 34, 36, 37, 38, 40, 41, 43, 44, 45, 47, 48, 50, 51, 52, 54, 55, 57, 59, 60, 62, 63, 64, 67, 68, 70, 71, 72, 74, 76, 77, 79, 80, 82, 83, 85, 87, 88, 90, 91, 93, 94, 96, 97, 99, 101, 102, 104, 106, 107, 109, 110, 111, 113, 114, 116, 118, 120];

// Column 11: Tao of Organisation
const book8 = [8, 9, 10, 11, 13, 14, 16, 17, 19, 21, 22, 25, 26, 28, 30, 31, 33, 34, 36, 37, 39, 41, 42, 43, 45, 47, 49, 51, 53, 54, 56, 58, 60, 61, 62, 64, 66, 68, 70, 72, 73, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 97, 99, 101, 103, 105, 106, 107, 109, 110, 111, 112, 114];

// Column 12: Astrology of I Ching
const book9 = [16, 19, 21, 24, 27, 30, 33, 36, 39, 41, 44, 47, 50, 53, 55, 58, 61, 64, 66, 69, 72, 74, 77, 80, 83, 87, 89, 92, 95, 97, 100, 103, 105, 108, 111, 113, 116, 119, 122, 125, 127, 130, 133, 136, 138, 141, 144, 147, 149, 152, 155, 158, 161, 164, 166, 169, 172, 175, 178, 181, 183, 186, 189, 192];

// Column 13: Book 10
const book10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64];

// Column 14: Book 11
const book11 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63];

// Column 15: Book 12
const book12 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64];

// I Ching Table class for hexagram lookup
class IChingTable {
    constructor() {
        this.table = [
            [1, 43, 14, 34, 9, 5, 26, 11],    // lower trigram 1
            [10, 58, 38, 54, 61, 60, 41, 19], // lower trigram 2
            [13, 49, 30, 55, 37, 63, 22, 36], // lower trigram 3
            [25, 17, 21, 51, 42, 3, 27, 24],  // lower trigram 4
            [44, 28, 50, 32, 57, 48, 18, 46], // lower trigram 5
            [6, 47, 64, 40, 59, 29, 4, 7],    // lower trigram 6
            [33, 31, 56, 62, 53, 39, 52, 15], // lower trigram 7
            [12, 45, 35, 16, 20, 8, 23, 2]    // lower trigram 8
        ];
    }
    
    getHexagram(lowerTrigram, upperTrigram) {
        return this.table[lowerTrigram - 1][upperTrigram - 1];
    }
}

// Export for module use
export { hexagrams, names, book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12, IChingTable };
