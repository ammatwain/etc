/*
Pitch, Vertex, Flake, Knot = {fundamentalNote,alterations,octave}
Key : number   [ -infinite ... +infinite ]
MajorKey : Key [ -7 ... +7 ]
Comma: Modulo(77) [ 0/77 ... 76/77 ]
MajorComma : Key [ 70, 38 , 6 , 51, 19, 64 , 32, 0 , 45, 13 , 58 , 26 , 71,  39, 7 ]
Degree: Comma - MajorComma || (Key - MajorKey) -> Comma
Octave: Positive or negative multiple of 77;
Dozen sinonimo di ottava, è la posizione reale del semitono

passaggi:

initialize trasposition
SrcMajorKey -> SrcMajorComma
DstMajorKey -> DstMajorComma (octave)

Pitch  -> Key -> Comma -> (Comma - SrcMajorComma) -> Degree

finalize trasposition
DstMajorComma - Dst
Degree -> (Degree + DstMajorKeyComma) -> Comma -> Key -> Pitch

importante : distinione tra douzen e ottava
*/

export interface ETC77Pitch {
    fundamentalNote: number;
    alterations: number;
    octave: number;
}

export interface ETC77Directions {
    up: number;
    closest: number;
    down: number;
}

/*
const THE_COMMA_77_IDEA: ETCPitch[] = [
    { fundamentalNote:  0, alterations:  0, octave: 0}, // ->       "1", "C"       -> key:   0 -> comma:  0,
    { fundamentalNote: 11, alterations: +1, octave:-1}, // ->      "#7", "B#"      -> key:  12 -> comma:  1, ( Below Octave Comma! )
    { fundamentalNote:  9, alterations: +3, octave:-1}, // ->    "###6", "A###"    -> key:  24 -> comma:  2, ( Below Octave Comma! )
    { fundamentalNote:  7, alterations: +5, octave:-1}, // ->  "#####5", "G#####"  -> key:  36 -> comma:  3, ( Below Octave Comma! )
    { fundamentalNote:  5, alterations: -4, octave: 0}, // ->   "bbbb4", "Fbbbb"   -> key: -29 -> comma:  4,
    { fundamentalNote:  4, alterations: -3, octave: 0}, // ->    "bbb3", "Ebbb"    -> key: -17 -> comma:  5,
    { fundamentalNote:  2, alterations: -1, octave: 0}, // ->      "b2", "Db"      -> key:  -5 -> comma:  6,
    { fundamentalNote:  0, alterations: +1, octave: 0}, // ->      "#1", "C#"      -> key:   7 -> comma:  7,
    { fundamentalNote: 11, alterations: +2, octave:-1}, // ->     "##7", "B##"     -> key:  19 -> comma:  8, ( Below Octave Comma! )
    { fundamentalNote:  9, alterations: +4, octave:-1}, // ->   "####6", "A####"   -> key:  31 -> comma:  9, ( Below Octave Comma! )
    { fundamentalNote:  7, alterations: -5, octave: 0}, // ->  "bbbbb5", "Gbbbbb"  -> key: -34 -> comma: 10,
    { fundamentalNote:  5, alterations: -3, octave: 0}, // ->    "bbb4", "Fbbb"    -> key: -22 -> comma: 11,
    { fundamentalNote:  4, alterations: -2, octave: 0}, // ->     "bb3", "Ebb"     -> key: -10 -> comma: 12,
    { fundamentalNote:  2, alterations:  0, octave: 0}, // ->       "2", "D"       -> key:   2 -> comma: 13,
    { fundamentalNote:  0, alterations: +2, octave: 0}, // ->     "##1", "C##"     -> key:  14 -> comma: 14,
    { fundamentalNote: 11, alterations: +3, octave:-1}, // ->    "###7", "B###"    -> key:  26 -> comma: 15, ( Below Octave Comma! )
    { fundamentalNote:  9, alterations: +5, octave:-1}, // ->  "#####6", "A#####"  -> key:  38 -> comma: 16, ( Below Octave Comma! )
    { fundamentalNote:  7, alterations: -4, octave: 0}, // ->   "bbbb5", "Gbbbb"   -> key: -27 -> comma: 17,
    { fundamentalNote:  5, alterations: -2, octave: 0}, // ->     "bb4", "Fbb"     -> key: -15 -> comma: 18,
    { fundamentalNote:  4, alterations: -1, octave: 0}, // ->      "b3", "Eb"      -> key:  -3 -> comma: 19,
    { fundamentalNote:  2, alterations: +1, octave: 0}, // ->      "#2", "D#"      -> key:   9 -> comma: 20,
    { fundamentalNote:  0, alterations: +3, octave: 0}, // ->    "###1", "C###"    -> key:  21 -> comma: 21,
    { fundamentalNote: 11, alterations: +4, octave:-1}, // ->   "####7", "B####"   -> key:  33 -> comma: 22, ( Below Octave Comma! )
    { fundamentalNote:  9, alterations: -5, octave: 0}, // ->  "bbbbb6", "Abbbbb"  -> key: -32 -> comma: 23,
    { fundamentalNote:  7, alterations: -3, octave: 0}, // ->    "bbb5", "Gbbb"    -> key: -20 -> comma: 24,
    { fundamentalNote:  5, alterations: -1, octave: 0}, // ->      "b4", "Fb"      -> key:  -8 -> comma: 25,
    { fundamentalNote:  4, alterations:  0, octave: 0}, // ->       "3", "E"       -> key:   4 -> comma: 26,
    { fundamentalNote:  2, alterations: +2, octave: 0}, // ->     "##2", "D##"     -> key:  16 -> comma: 27,
    { fundamentalNote:  0, alterations: +4, octave: 0}, // ->   "####1", "C####"   -> key:  28 -> comma: 28,
    { fundamentalNote: 11, alterations: +5, octave:-1}, // ->  "#####7", "B#####"  -> key:  40 -> comma: 29, ( Below Octave Comma! )
    { fundamentalNote:  9, alterations: -4, octave: 0}, // ->   "bbbb6", "Abbbb"   -> key: -25 -> comma: 30,
    { fundamentalNote:  7, alterations: -2, octave: 0}, // ->     "bb5", "Gbb"     -> key: -13 -> comma: 31,
    { fundamentalNote:  5, alterations:  0, octave: 0}, // ->       "4", "F"       -> key:  -1 -> comma: 32,
    { fundamentalNote:  4, alterations: +1, octave: 0}, // ->      "#3", "E#"      -> key:  11 -> comma: 33,
    { fundamentalNote:  2, alterations: +3, octave: 0}, // ->    "###2", "D###"    -> key:  23 -> comma: 34,
    { fundamentalNote:  0, alterations: +5, octave: 0}, // ->  "#####1", "C#####"  -> key:  35 -> comma: 35,
    { fundamentalNote: 11, alterations: -5, octave: 0}, // ->  "bbbbb7", "Bbbbbb"  -> key: -30 -> comma: 36,
    { fundamentalNote:  9, alterations: -3, octave: 0}, // ->    "bbb6", "Abbb"    -> key: -18 -> comma: 37,
    { fundamentalNote:  7, alterations: -1, octave: 0}, // ->      "b5", "Gb"      -> key:  -6 -> comma: 38,
    { fundamentalNote:  5, alterations: +1, octave: 0}, // ->      "#4", "F#"      -> key:   6 -> comma: 39,
    { fundamentalNote:  4, alterations: +2, octave: 0}, // ->     "##3", "E##"     -> key:  18 -> comma: 40,
    { fundamentalNote:  2, alterations: +4, octave: 0}, // ->   "####2", "D####"   -> key:  30 -> comma: 41,
    { fundamentalNote:  0, alterations: +6, octave: 0}, // -> "######1", "C######" -> key:  42 -> comma: 42,
    { fundamentalNote: 11, alterations: -4, octave: 0}, // ->   "bbbb7", "Bbbbb"   -> key: -23 -> comma: 43,
    { fundamentalNote:  9, alterations: -2, octave: 0}, // ->     "bb6", "Abb"     -> key: -11 -> comma: 44,
    { fundamentalNote:  7, alterations:  0, octave: 0}, // ->       "5", "G"       -> key:   1 -> comma: 45,
    { fundamentalNote:  5, alterations: +2, octave: 0}, // ->     "##4", "F##"     -> key:  13 -> comma: 46,
    { fundamentalNote:  4, alterations: +3, octave: 0}, // ->    "###3", "E###"    -> key:  25 -> comma: 47,
    { fundamentalNote:  2, alterations: +5, octave: 0}, // ->  "#####2", "D#####"  -> key:  37 -> comma: 48,
    { fundamentalNote:  0, alterations: -4, octave: 1}, // ->   "bbbb1", "Cbbbb"   -> key: -28 -> comma: 49, ( Above Octave Comma! )
    { fundamentalNote: 11, alterations: -3, octave: 0}, // ->    "bbb7", "Bbbb"    -> key: -16 -> comma: 50,
    { fundamentalNote:  9, alterations: -1, octave: 0}, // ->      "b6", "Ab"      -> key:  -4 -> comma: 51,
    { fundamentalNote:  7, alterations: +1, octave: 0}, // ->      "#5", "G#"      -> key:   8 -> comma: 52,
    { fundamentalNote:  5, alterations: +3, octave: 0}, // ->    "###4", "F###"    -> key:  20 -> comma: 53,
    { fundamentalNote:  4, alterations: +4, octave: 0}, // ->   "####3", "E####"   -> key:  32 -> comma: 54,
    { fundamentalNote:  2, alterations: -5, octave: 1}, // ->  "bbbbb2", "Dbbbbb"  -> key: -33 -> comma: 55, ( Above Octave Comma! )
    { fundamentalNote:  0, alterations: -3, octave: 1}, // ->    "bbb1", "Cbbb"    -> key: -21 -> comma: 56, ( Above Octave Comma! )
    { fundamentalNote: 11, alterations: -2, octave: 0}, // ->     "bb7", "Bbb"     -> key:  -9 -> comma: 57,
    { fundamentalNote:  9, alterations:  0, octave: 0}, // ->       "6", "A"       -> key:   3 -> comma: 58,
    { fundamentalNote:  7, alterations: +2, octave: 0}, // ->     "##5", "G##"     -> key:  15 -> comma: 59,
    { fundamentalNote:  5, alterations: +4, octave: 0}, // ->   "####4", "F####"   -> key:  27 -> comma: 60,
    { fundamentalNote:  4, alterations: +5, octave: 0}, // ->  "#####3", "E#####"  -> key:  39 -> comma: 61,
    { fundamentalNote:  2, alterations: -4, octave: 1}, // ->   "bbbb2", "Dbbbb"   -> key: -26 -> comma: 62, ( Above Octave Comma! )
    { fundamentalNote:  0, alterations: -2, octave: 1}, // ->     "bb1", "Cbb"     -> key: -14 -> comma: 63, ( Above Octave Comma! )
    { fundamentalNote: 11, alterations: -1, octave: 0}, // ->      "b7", "Bb"      -> key:  -2 -> comma: 64,
    { fundamentalNote:  9, alterations: +1, octave: 0}, // ->      "#6", "A#"      -> key:  10 -> comma: 65,
    { fundamentalNote:  7, alterations: +3, octave: 0}, // ->    "###5", "G###"    -> key:  22 -> comma: 66,
    { fundamentalNote:  5, alterations: +5, octave: 0}, // ->  "#####4", "F#####"  -> key:  34 -> comma: 67,
    { fundamentalNote:  4, alterations: -5, octave: 1}, // ->  "bbbbb3", "Ebbbbb"  -> key: -31 -> comma: 68, ( Above Octave Comma! )
    { fundamentalNote:  2, alterations: -3, octave: 1}, // ->    "bbb2", "Dbbb"    -> key: -19 -> comma: 69, ( Above Octave Comma! )
    { fundamentalNote:  0, alterations: -1, octave: 1}, // ->      "b1", "Cb"      -> key:  -7 -> comma: 70, ( Above Octave Comma! )
    { fundamentalNote: 11, alterations:  0, octave: 0}, // ->       "7", "B"       -> key:   5 -> comma: 71,
    { fundamentalNote:  9, alterations: +2, octave: 0}, // ->     "##6", "A##"     -> key:  17 -> comma: 72,
    { fundamentalNote:  7, alterations: +4, octave: 0}, // ->   "####5", "G####"   -> key:  29 -> comma: 73,
    { fundamentalNote:  5, alterations: +6, octave: 0}, // -> "######4", "F######" -> key:  41 -> comma: 74,
    { fundamentalNote:  4, alterations: -4, octave: 1}, // ->   "bbbb3", "Ebbbb"   -> key: -24 -> comma: 75, ( Above Octave Comma! )
    { fundamentalNote:  2, alterations: -2, octave: 1}, // ->     "bb2", "Dbb"     -> key: -12 -> comma: 76, ( Above Octave Comma! )
];
*/

export class ETC77 {

    /******************************************** BEGIN STATIC *********************************************/

    public static octaveSize: number = 77;
    private static commaOctaveLowKey: number = 34;
    private static commaOctaveHighKey: number = 42;
    private static commaFifhtyLeap: number = 45;
    private static multiplicativeInverseOfCommaFifhRespectToCommaOctave: number = ETC77.findInverse(ETC77.commaFifhtyLeap, ETC77.octaveSize);

    //private static minDrawableKey: number = -22;
    //private static maxDrawableKey: number = 26;
    //per ridurre i diesis: key - 12
    //per ridurre i bemolli: key + 12

    private static keysAboveOctave: number[]     = [ 12, 24, 36, 19, 31, 26, 38, 33, 40 ];
    private static commasAboveOctave: number[]   = [  1,  2,  3,  8,  9, 15, 16, 22, 29 ];
    private static keysBelowOctave: number[]     = [-28,-33,-21,-26,-14,-31,-19, -7,-24,-12 ];
    private static commasBelowOctave: number[]   = [ 49, 55, 56, 62, 63, 68, 69, 70, 75, 76 ];
    //private static majorKeys: number[]         = [ -7, -6, -5, -4, -3, -2, -1,  0,  1,  2,  3,  4,  5,  6,  7 ];
    //private static majorCommas: number[]       = [ 70, 38,  6, 51, 19, 64, 32,  0, 45, 13, 58, 26, 71, 39,  7 ];

    public static names: string[] = [
        "C","B#","A###","G#####","Fbbbb","Ebbb","Db","C#","B##","A####","Gbbbbb","Fbbb","Ebb",
        "D","C##","B###","A#####","Gbbbb","Fbb","Eb","D#","C###","B####","Abbbbb","Gbbb","Fb",
        "E","D##","C####","B#####","Abbbb","Gbb",
        "F","E#","D###","C#####","Bbbbbb","Abbb","Gb","F#","E##","D####","C######","Bbbbb","Abb",
        "G","F##","E###","D#####","Cbbbb","Bbbb","Ab","G#","F###","E####","Dbbbbb","Cbbb","Bbb",
        "A","G##","F####","E#####","Dbbbb","Cbb","Bb","A#","G###","F#####","Ebbbbb","Dbbb","Cb",
        "B","A##","G####","F######","Ebbbb","Dbb"
    ];

    public static degrees: string[] = [
        "1","#7","###6","#####5","bbbb4","bbb3","b2","#1","##7","####6","bbbbb5","bbb4","bb3",
        "2","##1","###7","#####6","bbbb5","bb4","b3","#2","###1","####7","bbbbb6","bbb5","b4",
        "3","##2","####1","#####7","bbbb6","bb5",
        "4","#3","###2","#####1","bbbbb7","bbb6","b5","#4","##3","####2","######1","bbbb7","bb6",
        "5","##4","###3","#####2","bbbb1","bbb7","b6","#5","###4","####3","bbbbb2","bbb1","bb7",
        "6","##5","####4","#####3","bbbb2","bb1","b7","#6","###5","#####4","bbbbb3","bbb2","b1",
        "7","##6","####5","######4","bbbb3","bb2",
    ];

    public static intervals = {
        perfectOctaveUp:       ETC77.octaveSize,
        diminishedOctaveUp:    ETC77.octaveSize - 7,
        augmentedSeventhUp:    12,
        majorSeventhUp:        5,
        minorSeventhUp:        -2,
        diminishedSeventhUp:   -9,
        augmentedSixthUp:      10,
        majorSixthUp:          3,
        minorSixthUp:          -4,
        diminishedSixthUp:     -11,
        augmentedFifthUp:      8,
        perfectFifthUp:        1,
        diminishedFifthUp:     -6,
        augmentedFourthUp:     6,
        perfectFourthUp:       -1,
        diminishedFourthUp:    -8,
        augmentedThirdUp:      11,
        majorThirdUp:          4,
        minorThirdUp:          -3,
        diminishedThirdUp:     -10,
        augmentedSecondUp:     9,
        majorSecondUp:         2,
        minorSecondUp:         -5,
        diminishedSecondUp:    -12,
        augmentedUnisonUp:     7,
        diminishedUnisonUp:    -7,
        perfectUnison:           0,
        diminishedUnisonDown:    0 - -7,
        augmentedUnisonDown:     0 - 7,
        diminishedSecondDown:    0 - -12,
        minorSecondDown:         0 - -5,
        majorSecondDown:         0 - 2,
        augmentedSecondDown:     0 - 9,
        diminishedThirdDown:     0 - -10,
        minorThirdDown:          0 - -3,
        majorThirdDown:          0 - 4,
        augmentedThirdDown:      0 - 11,
        diminishedFourthDown:    0 - -8,
        perfectFourthDown:       0 - -1,
        augmentedFourthDown:     0 - 6,
        diminishedFifthDown:     0 - -6,
        perfectFifthDown:        0 - 1,
        augmentedFifthDown:      0 - 8,
        diminishedSixthDown:     0 - -11,
        minorSixthDown:          0 - -4,
        majorSixthDown:          0 - 3,
        augmentedSixthDown:      0 - 10,
        diminishedSeventhDown:   0 - -9,
        minorSeventhDown:        0 - -2,
        majorSeventhDown:        0 - 5,
        augmentedSeventhDown:    0 - 12,
        diminishedOctaveDown:    0 - (ETC77.octaveSize - 7),
        perfectOctaveDown:       0 - ETC77.octaveSize,
    };

    public static diatonicsSemitones: number[] = [
        ETC77.intervals.perfectUnison,
        ETC77.intervals.minorSecondUp,
        ETC77.intervals.majorSecondUp,
        ETC77.intervals.minorThirdUp,
        ETC77.intervals.majorThirdUp,
        ETC77.intervals.perfectFourthUp,
        ETC77.intervals.diminishedFifthUp,
        ETC77.intervals.perfectFifthUp,
        ETC77.intervals.minorSixthUp,
        ETC77.intervals.majorSixthUp,
        ETC77.intervals.minorSeventhUp,
        ETC77.intervals.majorSeventhUp,
    ];

    public static cromaticsSemitones: number[] = [
        ETC77.intervals.perfectUnison,
        ETC77.intervals.augmentedUnisonUp,
        ETC77.intervals.majorSecondUp,
        ETC77.intervals.augmentedSecondUp,
        ETC77.intervals.majorThirdUp,
        ETC77.intervals.perfectFourthUp,
        ETC77.intervals.augmentedFourthUp,
        ETC77.intervals.perfectFifthUp,
        ETC77.intervals.augmentedFifthUp,
        ETC77.intervals.majorSixthUp,
        ETC77.intervals.augmentedSixthUp,
        ETC77.intervals.majorSeventhUp,
    ];

    private static circleOfFifths: ETC77[] = [
        new ETC77(-7),
        new ETC77(-6),
        new ETC77(-5),
        new ETC77(-4),
        new ETC77(-3),
        new ETC77(-2),
        new ETC77(-1),
        new ETC77(0),
        new ETC77(1),
        new ETC77(2),
        new ETC77(3),
        new ETC77(4),
        new ETC77(5),
        new ETC77(6),
        new ETC77(7),
    ];

    public static keyNames: any ={
        "Cb" :-7,"Gb" :-6,"Db" :-5,"Ab":-4,"Eb":-3,"Bb":-2,"F" :-1,"C" :0,"G" :1,"D" :2,"A"  :3,"E"  :4,"B"  :5,"F#" :6,"C#" :7,
        "Abm":-7,"Ebm":-6,"Bbm":-5,"Fm":-4,"Cm":-3,"Gm":-2,"Dm":-1,"Am":0,"Em":1,"Bm":2,"F#m":3,"C#m":4,"G#m":5,"D#m":6,"A#m":7,
    };

    public static simplifyMajorKey(key: number): number{
        key = key % 12;
        if (key< -7){
            key -= -12;
        } else if (key > 7) {
            key -= 12;
        }
        return key || 0;
    }

    public static key(majorKey: number): ETC77 {
        return ETC77.circleOfFifths[ETC77.simplifyMajorKey(majorKey) + 7 ];
    }

    // Extended Euclid's algorithm to calculate GCD and Bézout coefficients
    private static extendedEuclidean(a: number, b: number): [number,number,number] {
        if (b === 0) {
            return [a, 1, 0];
        }
        const [gcd, x, y] = ETC77.extendedEuclidean(b, a % b);
        const newX: number = y;
        const newY: number = x - Math.floor(a / b) * y;
        return [gcd, newX, newY];
    }

    //Function to find the multiplicative inverse of "a" with respect to "m"
    private static findInverse(a: number, m: number): number {
        const gcd: [ number , number , number ] = ETC77.extendedEuclidean( a , m );
        if (gcd[0] !== 1) {
            return -1; // No multiplicative inverse found
        }
        let inverse: number = gcd[1] % m;
        if (inverse < 0) {
            inverse = ( inverse + m ) % m;
        }
        return inverse;
    }

    private static keyOrigin(key: number): number{
        return (( key % 7 ) + 7 ) % 7;
    }

    private static keyFundamentalNote(key: number): number {
        return [0,7,2,9,4,11,6][ETC77.keyOrigin(key)];
    }

    private static keyAlterations(key: number): number {
        return Math.floor((key - ETC77.keyOrigin(key)) / 7) || 0;
    }

    private static keyOctave(key: number): number {
        return Math.floor((key + ETC77.commaOctaveLowKey) / ETC77.octaveSize) || 0;
    }

    public static commaToDegree(comma: number, majorKey: number = 0): number{
        return comma - ETC77.key(majorKey).commaValue;
    }

    public static keyToComma(key: number): number{
        let octave: number = Math.floor(( key + ETC77.commaOctaveLowKey ) / ETC77.octaveSize );
        const comma: number = (((key * ETC77.commaFifhtyLeap) % ETC77.octaveSize) + ETC77.octaveSize ) % ETC77.octaveSize;
/*
        if (ETC77.commasAboveOctave.indexOf(comma)>=0) {
            octave++;
        } else if (ETC77.commasBelowOctave.indexOf(comma)>=0) {
            octave--;
        }
*/
        return ( octave * ETC77.octaveSize ) + comma;
    }

    public static commaToMajorKey(comma: number): number {
        comma -= (Math.floor(comma / ETC77.octaveSize) * ETC77.octaveSize);
        return ETC77.simplifyMajorKey(ETC77.commaToKey(comma));
    }

    public static commaToKey(comma: number): number {
        let octave: number = Math.floor(comma / ETC77.octaveSize);
        comma = ((comma % ETC77.octaveSize) + ETC77.octaveSize) % ETC77.octaveSize;
        
        if(ETC77.commasAboveOctave.indexOf(comma)>=0) {
            octave--;
        } else if(ETC77.commasBelowOctave.indexOf(comma)>=0) {
            octave++;
        }
        
        let key:  number = (comma * ETC77.multiplicativeInverseOfCommaFifhRespectToCommaOctave) % ETC77.octaveSize;
        if (key > ETC77.commaOctaveHighKey) {
            key -= ETC77.octaveSize;
        }
        return ( octave * ETC77.octaveSize ) + key;
    }

    public static commaToPitch(comma: number): ETC77Pitch {
        return ETC77.keyToPitch(ETC77.commaToKey(comma));
    }

    public static keyToDegree(key: number, majorKey: number = 0): number{
        return ETC77.commaToDegree(ETC77.keyToComma(key), majorKey);
    }

    public static keyToPitch(key: number): ETC77Pitch{
        const octave: number = ETC77.keyOctave(key);
        /*
        // togliamo l'ottava dall key;
        if(ETC77.keysAboveOctave.indexOf(key)>=0) {
            octave--;
        } else if(ETC77.keysBelowOctave.indexOf(key)>=0) {
            octave++;
        }
        */
        key = key - (octave * ETC77.octaveSize);
        let fundamentalNote: number = ETC77.keyFundamentalNote(key);
        let alterations: number = ETC77.keyAlterations(key) % 12;
        if(alterations>6){
            alterations -= 12;
        }
        // eccezione su F#
        if (fundamentalNote===6){
            fundamentalNote--;
            alterations++;
        }
    
        return {
            fundamentalNote: fundamentalNote,
            octave: octave,
            alterations: alterations,
        };
    }

    public static degreeToPitch(degree: number, majorKey: number = 0 ): ETC77Pitch{
        return ETC77.commaToPitch(ETC77.key(majorKey).commaValue + degree);
    }

    public static pitchToDegree(pitch: ETC77Pitch = {fundamentalNote: 0, octave: 0, alterations:  0 }, majorKey: number = 0 ): number{
        return ETC77.commaToDegree(ETC77.pitchToComma(pitch), majorKey);
    }

    public static pitchToComma(pitch: ETC77Pitch = {fundamentalNote: 0, octave: 0, alterations:  0 } ): number {
        const key: number = ETC77.pitchToKey(pitch);
        return ETC77.keyToComma(key);
    }

    public static pitchToKey(pitch: ETC77Pitch = {fundamentalNote: 0, octave: 0, alterations:  0 }): number {
        // qui ci viene in soccorso indexOf() che ritorna -1 quando non trova un valore...
        const origin: number = [ 0,7,2,9,4,11 ].indexOf( pitch.fundamentalNote );
        let octave = pitch.octave;
        let key: number = origin + ( pitch.alterations * 7);
        if (ETC77.keysAboveOctave.indexOf(key)>=0) {
            octave++;
        } else if (ETC77.keysBelowOctave.indexOf(key)>=0) {
            octave--;
        }
        key += (octave * ETC77.octaveSize);
        return key;
    }

    public static commaDistances(commaValueA: number, commaValueB: number): ETC77Directions{
        const directions: ETC77Directions = {
            closest: commaValueA,
            up : commaValueB,
            down: commaValueB
        };
        if (commaValueA!==commaValueB) {
            if (commaValueB>commaValueA){
                directions.up  = commaValueB;
                directions.down  = commaValueB - ETC77.octaveSize;
            } else {
                directions.up  = commaValueB + ETC77.octaveSize;
                directions.down  = commaValueB;
            }
            if ( (directions.up-commaValueA) <= (commaValueA - directions.down)) {
                directions.closest = directions.up;
            } else {
                directions.closest = directions.down;
            }
        }
        return directions;
    }
/*
    public static testKey(octaveMin: number = -1, octaveMax: number = 1): void{
        for (let o: number = octaveMin; o <= octaveMax ; o++  ) {
            for (let i: number = 0 ; i < ETC77.commaOctaveSize ; i++ ) {
                const pitch1: ETC77Pitch = Object.assign({},Commas[i]);
                pitch1.octave = o;
                const key1: number = ETC77.pitchToKey(pitch1);
                const comma1: number = ETC77.keyToComma(key1);
                const key2: number = ETC77.commaToKey(comma1);
                const pitch2: ETC77Pitch = ETC77.keyToPitch(key2);
                let error: string = "";
                if(
                    pitch1.fundamentalNote!==pitch2.fundamentalNote
                    ||
                    pitch1.alterations!==pitch2.alterations
                    ||
                    pitch1.octave!==pitch2.octave
                ) {
                    error = "ERROR!!!";
                }
                if(error !== "") {
                    console.log(
                        error,
                        "pitch1:",`{ f: ${pitch1.fundamentalNote}, a: ${pitch1.alterations}, o: ${pitch1.octave} }`,
                        "key1:", key1,
                        "comma1", comma1,
                        "key2:", key2,
                        "pitch2:",`{ f: ${pitch2.fundamentalNote}, a: ${pitch2.alterations}, o: ${pitch2.octave} }`,
                        ""
                    );
                }
            }
        }
        for (let o: number = octaveMin; o <= octaveMax ; o++  ) {
            for (let i: number = 0 ; i < ETC77.commaOctaveSize ; i++ ) {
                let error: string = "";
                const comma1: number = i + (o * ETC77.commaOctaveSize);
                const pitch1: ETC77Pitch = ETC77.commaToPitch(comma1);
                const comma2: number = ETC77.pitchToComma(pitch1);
                if (comma1 !== comma2) {
                    error = "ERROR!!!";
                }
                if (error!=="" ) {
                    console.log(
                      "comma1", comma1,
                      "pitch1:",`{ f: ${pitch1.fundamentalNote}, a: ${pitch1.alterations}, o: ${pitch1.octave} }`,
                      "comma2", comma2,
                      ""
                    );
                }
            }
        }
    }
*/
    /********************************************  END STATIC  *********************************************/

    /******************************************** BEGIN PUBLIC *********************************************/

    private keyValue: number = 0;

    private commaValue: number = 0;

    constructor(majorKey: number){
        this.keyValue = majorKey;
        this.commaValue = ETC77.keyToComma(this.keyValue);
    }

    public relative(key: number): ETC77 {
        return ETC77.key(ETC77.simplifyMajorKey(this.keyValue + key));
    }

    public get KeyValue(): number{
        return this.keyValue;
    }

    public get CommaValue(): number{
        return this.commaValue;
    }

    public degreeOfPitch(pitch: ETC77Pitch) {
        return ETC77.pitchToDegree(pitch,this.KeyValue);
    }

    public directions(majorKeyB: number): ETC77Directions{
        return ETC77.commaDistances(this.CommaValue, ETC77.key(majorKeyB).CommaValue);
    }

    public transposeToClosestMajor(toMajor: number, octave: number): number {
        return this.directions(toMajor).closest + (octave * ETC77.octaveSize);
    }

    public transposeToUpperMajor(toMajor: number, octave: number): number {
        return this.directions(toMajor).up + (octave * ETC77.octaveSize);
    }

    public transposeToLowerMajor(toMajor: number, octave: number): number {
        return this.directions(toMajor).down + (octave * ETC77.octaveSize);
    }

    public transposeToSemitone(semitone: number, movement: -5|7 = -5  ): number {
        let comma: number = 0;
        if (semitone!==0) {
            const octave: number = Math.floor(semitone/12);
            if (semitone>0) {
                comma = this.directions(ETC77.simplifyMajorKey((semitone % 12) * movement)).up;
            } else if (semitone<0) {
                comma = this.directions(ETC77.simplifyMajorKey((semitone % 12) * movement)).down;
            }
            comma += octave * ETC77.octaveSize;
        }
        return comma;
    }

    public transposeToDiatonicSemitone(semitone: number ): number {
        return this.transposeToSemitone(semitone, -5);
    }

    public transposeToChromaticSemitone(semitone: number ): number {
        return this.transposeToSemitone(semitone, 7);
    }

    /********************************************  END PUBLIC  *********************************************/

}
