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
    { fundamentalNote:  0, alterations: -5, octave: 1}, // ->  "bbbbb1", "Cbbbbb"  -> key: -35 -> comma: 42, ( Above Octave Comma! )
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
    { fundamentalNote:  5, alterations: -5, octave: 1}, // ->  "bbbbb4", "Fbbbbb"  -> key: -36 -> comma: 74, ( Above Octave Comma! )
    { fundamentalNote:  4, alterations: -4, octave: 1}, // ->   "bbbb3", "Ebbbb"   -> key: -24 -> comma: 75, ( Above Octave Comma! )
    { fundamentalNote:  2, alterations: -2, octave: 1}, // ->     "bb2", "Dbb"     -> key: -12 -> comma: 76, ( Above Octave Comma! )
];
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

export class ETC77 {

    /******************************************** BEGIN STATIC *********************************************/

    private static octaveSize: number = 77;
    private static commaOctaveLowKey: number = 36;
    private static commaOctaveHighKey: number = 40;
    private static commaFifhtyLeap: number = 45;
    private static multiplicativeInverseOfCommaFifhRespectToCommaOctave: number = ETC77.findInverse(ETC77.commaFifhtyLeap, ETC77.octaveSize);

    private static minDrawableKey: number = -22;
    private static maxDrawableKey: number = 26;
    //per ridurre i diesis: key - 12
    //per ridurre i bemolli: key + 12

    //TODO DA AGGIORNARE!!!
    private static keysAboveOctave: number[]     = [ 12, 24, 36, 19, 31, 26, 38, 33, 40 ];
    private static commasAboveOctave: number[]   = [  1,  2,  3,  8,  9, 15, 16, 22, 29 ];
    private static keysBelowOctave: number[]     = [-28,-33,-21,-26,-14,-31,-19, -7,-24,-12,-35,-36 ];
    private static commasBelowOctave: number[]   = [ 49, 55, 56, 62, 63, 68, 69, 70, 75, 76, 42, 74 ];
    //private static majorKeys: number[]         = [ -7, -6, -5, -4, -3, -2, -1,  0,  1,  2,  3,  4,  5,  6,  7 ];
    //private static majorCommas: number[]       = [ 70, 38,  6, 51, 19, 64, 32,  0, 45, 13, 58, 26, 71, 39,  7 ];

    public static commaIntervals: any = {
        perfectOctaveUp:       +77,
        diminishedOctaveUp:    +70,
        augmentedSeventhUp:    +78,
        majorSeventhUp:        +71,
        minorSeventhUp:        +64,
        diminishedSeventhUp:   +57,
        augmentedSixthUp:      +65,
        majorSixthUp:          +58,
        minorSixthUp:          +51,
        diminishedSixthUp:     +44,
        augmentedFifthUp:      +52,
        perfectFifthUp:        +45,
        diminishedFifthUp:     +38,
        augmentedFourthUp:     +39,
        perfectFourthUp:       +32,
        diminishedFourthUp:    +25,
        augmentedThirdUp:      +33,
        majorThirdUp:          +26,
        minorThirdUp:          +19,
        diminishedThirdUp:     +10,
        augmentedSecondUp:     +20,
        majorSecondUp:         +13,
        minorSecondUp:          +6,
        diminishedSecondUp:     -1,
        augmentedUnisonUp:      +7,
        perfectUnison:           0,
        augmentedUnisonDown:    -7,
        diminishedSecondDown:   -1,
        minorSecondDown:        -6,
        majorSecondDown:       -13,
        augmentedSecondDown:   -20,
        diminishedThirdDown:   -10,
        minorThirdDown:        -19,
        majorThirdDown:        -26,
        augmentedThirdDown:    -33,
        diminishedFourthDown:  -25,
        perfectFourthDown:     -32,
        augmentedFourthDown:   -39,
        diminishedFifthDown:   -38,
        perfectFifthDown:      -45,
        augmentedFifthDown:    -52,
        diminishedSixthDown:   -44,
        minorSixthDown:        -51,
        majorSixthDown:        -58,
        augmentedSixthDown:    -65,
        diminishedSeventhDown: -57,
        minorSeventhDown:      -64,
        majorSeventhDown:      -71,
        augmentedSeventhDown:  -78,
        diminishedOctaveDown:  -70,
        perfectOctaveDown:     -77,
    };

    private static diatonicSemitones: number[] = [
        ETC77.commaIntervals.perfectUnison,
        ETC77.commaIntervals.minorSecondUp,
        ETC77.commaIntervals.majorSecondUp,
        ETC77.commaIntervals.minorThirdUp,
        ETC77.commaIntervals.majorThirdUp,
        ETC77.commaIntervals.perfectFourthUp,
        ETC77.commaIntervals.diminishedFifthUp,
        ETC77.commaIntervals.perfectFifthUp,
        ETC77.commaIntervals.minorSixthUp,
        ETC77.commaIntervals.majorSixthUp,
        ETC77.commaIntervals.minorSeventhUp,
        ETC77.commaIntervals.majorSeventhUp,
    ];

    private static chromaticSemitones: number[] = [
        ETC77.commaIntervals.perfectUnison,
        ETC77.commaIntervals.augmentedUnisonUp,
        ETC77.commaIntervals.majorSecondUp,
        ETC77.commaIntervals.augmentedSecondUp,
        ETC77.commaIntervals.majorThirdUp,
        ETC77.commaIntervals.perfectFourthUp,
        ETC77.commaIntervals.augmentedFourthUp,
        ETC77.commaIntervals.perfectFifthUp,
        ETC77.commaIntervals.augmentedFifthUp,
        ETC77.commaIntervals.majorSixthUp,
        ETC77.commaIntervals.augmentedSixthUp,
        ETC77.commaIntervals.majorSeventhUp,
    ];

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
        // in key context the value after 11 is 6, not 5
        return [0,7,2,9,4,11,6][ETC77.keyOrigin(key)];
    }

    private static keyAlterations(key: number): number {
        return Math.floor((key - ETC77.keyOrigin(key)) / 7) || 0;
    }

    private static commaToDegree(comma: number, majorKey: number = 0): number{
        return comma - ETC77.keyToComma(majorKey);
    }

    private static commaDistances(commaValueA: number, commaValueB: number): ETC77Directions{
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

    /********************************************  END STATIC  *********************************************/

    /******************************************** BEGIN PUBLIC *********************************************/

    public static get OctaveSize(): number {
        return ETC77.octaveSize;
    }
    public static keyToComma(key: number): number{
        let octave: number = Math.floor(( key + ETC77.commaOctaveLowKey ) / ETC77.octaveSize );
        const comma: number = (((key * ETC77.commaFifhtyLeap) % ETC77.octaveSize) + ETC77.octaveSize ) % ETC77.octaveSize;

        if (ETC77.commasAboveOctave.indexOf(comma)>=0) {
            octave++;
        } else if (ETC77.commasBelowOctave.indexOf(comma)>=0) {
            octave--;
        }

        return ( octave * ETC77.octaveSize ) + comma;
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
        let validKey: number = key;
        while (validKey<ETC77.minDrawableKey ) {
            validKey += 12;
        }
        while (validKey>ETC77.maxDrawableKey ) {
            validKey -= 12;
        }
        if (ETC77.keysAboveOctave.indexOf(key) >= 0 ) {
            if (ETC77.keysAboveOctave.indexOf(validKey)<0) {
                octave++;
            }
        } else if (ETC77.keysBelowOctave.indexOf(key)>=0) {
            if (ETC77.keysBelowOctave.indexOf(validKey)<0) {
                octave--;
            }
        }
        key = validKey;
        return ( octave * ETC77.octaveSize ) + key;
    }

    public static commaToPitch(comma: number): ETC77Pitch {
        const gradus: number = ((comma % 7) + 7) %7;
        const fundamentalComma: number = [0,71,58,45,32,26,13][gradus];
        const fundamentalNote: number = [0,11, 9, 7, 5, 4, 2][gradus];
        let octave: number = Math.floor(comma / 77);
        const octavedFundamentalComma: number = (octave * 77) + fundamentalComma;
        const alterationsComma: number = comma - octavedFundamentalComma;
        let alterations: number = alterationsComma / 7;

        if (alterations<-5){
            alterations += 11;
            octave--;
        } else if (alterations>5){
            alterations -= 11;
            octave++;
        }

        return {fundamentalNote: fundamentalNote , alterations: alterations, octave: octave };

    }

    public static commaToDrawablePitch(comma: number ): ETC77Pitch{
        let pitch: ETC77Pitch;
        do {
            pitch = ETC77.commaToPitch(comma);
            if (pitch.alterations<-3){
                comma++;
            } else if (pitch.alterations>3){
                comma--;
            }
        } while( Math.abs( pitch.alterations ) > 3 );
        return pitch;
    }

    public static keyToPitch(key: number): ETC77Pitch{
        const octave: number = ETC77.keyOctave(key);
        key = key - (octave * ETC77.octaveSize);
        let fundamentalNote: number = ETC77.keyFundamentalNote(key);
        let alterations: number = ETC77.keyAlterations(key) % 12;
        if(alterations>6){
            alterations -= 12;
        }
        // this is ok except for F# ...
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
        return ETC77.commaToPitch(ETC77.keyToComma(majorKey + degree));
    }


    public static pitchToDegree(pitch: ETC77Pitch = {fundamentalNote: 0, octave: 0, alterations:  0 }, majorKey: number = 0 ): number{
        return ETC77.commaToDegree(ETC77.pitchToComma(pitch), majorKey);
    }

    public static pitchToComma(pitch: ETC77Pitch = {fundamentalNote: 0, octave: 0, alterations:  0 }): number {
        const octaveComma: number = pitch.octave * ETC77.octaveSize;
        const fundamentalComma: number = Math.round(ETC77.octaveSize / 12 * pitch.fundamentalNote);
        const alterationsComma: number = pitch.alterations * 7;
        return octaveComma + fundamentalComma + alterationsComma ;
    }

    public static pitchToKey(pitch: ETC77Pitch = {fundamentalNote: 0, octave: 0, alterations:  0 }): number {
        // indexOf() return -1 ... ;)
        const origin: number = [ 0,7,2,9,4,11 ].indexOf( pitch.fundamentalNote );
        const octave: number = pitch.octave;
        let key: number = origin + ( pitch.alterations * 7);
        key += (octave * ETC77.octaveSize);
        return key;
    }

    public static keyOctave(key: number): number {
        return Math.floor((key + ETC77.commaOctaveLowKey) / ETC77.octaveSize) || 0;
    }

    public static fundamentalCommas: number[] = [ 0, 13, 26, 32, 45, 58, 71 ];

    public static simplifyMajorKey(key: number): number{
//        const octave: number = ETC77.keyOctave(key);
//        key = key - (octave * ETC77.octaveSize);
        key = key % 12;
        if (key< -7){
            key -= -12;
        } else if (key > 7) {
            key -= 12;
        }
        return key || 0;
    }

    public static chromaticSemitone(semitone: number): number {
        return ETC77.chromaticSemitones[((semitone % 12) + 12 ) % 12];
    }

    public static diatonicSemitone(semitone: number): number {
        return ETC77.diatonicSemitones[((semitone % 12) + 12 ) % 12];
    }

    public static directionsOfKeyRelation(majorKeyA: number, majorKeyB: number): ETC77Directions{
        return ETC77.commaDistances(ETC77.keyToComma(majorKeyA), ETC77.keyToComma(majorKeyB));
    }


    /********************************************  END PUBLIC  *********************************************/

    /***************************************** BEGIN  DEAD CODE ********************************************/
/*
    private static keyToDegree(key: number, majorKey: number = 0): number{
        return ETC77.commaToDegree(ETC77.keyToComma(key), majorKey);
    }
*/

/*
    private static keyRelation(keyA: number, keyB: number): number {
        return ETC77.simplifyMajorKey(keyA + keyB);
    }
*/
/*
    private static degreeOfPitch(pitch: ETC77Pitch, key: number = 0): number {
        return ETC77.pitchToDegree(pitch, key);
    }
*/

/*
    private static transposeToClosestMajor(fromMajor: number, toMajor: number, octave: number): number {
        return ETC77.directionsOfKeyRelation(fromMajor, toMajor).closest + (octave * ETC77.octaveSize);
    }
*/
/*
    private static transposeToUpperMajor(fromMajor: number, toMajor: number, octave: number): number {
        return ETC77.directionsOfKeyRelation(fromMajor, toMajor).up + (octave * ETC77.octaveSize);
    }
*/
/*
    private static transposeToLowerMajor(fromMajor: number, toMajor: number, octave: number): number {
        return ETC77.directionsOfKeyRelation(fromMajor, toMajor).down + (octave * ETC77.octaveSize);
    }
*/
/*
    public transposeToSemitone(semitone: number, movement: -5|7 = -5  ): number {
        let comma: number = 0;
        if (semitone!==0) {
            const octave: number = Math.floor(semitone/12);
            if (semitone>0) {
                comma = this.directionsOfKeyRelation(ETC77.simplifyMajorKey((semitone % 12) * movement)).up;
            } else if (semitone<0) {
                comma = this.directionsOfKeyRelation(ETC77.simplifyMajorKey((semitone % 12) * movement)).down;
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
*/
/*
    public static commaToPitchOld(comma: number): ETC77Pitch {
        return ETC77.keyToPitch(ETC77.commaToKey(comma));
    }

    public static commaToPitchFloat(value: number): ETC77Pitch {
        let octave: number = Math.floor(value / 77);
        const modulatedComma: number = ((value % 77) + 77) %77;
        const fundamentalNote: number = [0,11, 9, 7, 5, 4, 2][ ((value % 7) + 7) %7];
        const float: number = 12/(77 + 7/12) * modulatedComma;
        const semitone: number = Math.round(float);
        let alterations: number = semitone - fundamentalNote;
        if (alterations<=-6){
          alterations += 12;
        }
        if (alterations>6){
          alterations -= 12;
        }
        octave += Math.floor((fundamentalNote + alterations) / 12) * -1 ;
        if (fundamentalNote && (fundamentalNote + alterations === 0 )) {
          octave++;
        }
        return { fundamentalNote: fundamentalNote , octave: octave, alterations: alterations };
    }
*/

    /****************************************** END  DEAD CODE *********************************************/

}
