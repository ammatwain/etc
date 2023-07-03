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

export interface ETCPitch {
    fundamentalNote: number;
    alterations: number;
    octave: number;
}

export interface ETCDirections {
    up: number;
    closest: number;
    down: number;
}

export class ETC {

    /******************************************** BEGIN STATIC *********************************************/

    private static fundamentalNotes:         number[] = [ 0,  2,  4,  5,  7,  9, 11 ];
    private static inverseFundamentalNotes:  number[] = [ 0, 11,  9,  7,  5,  4,  2 ];
    private static fundamentalCommas:        number[] = [ 0, 13, 26, 32, 45, 58, 71 ];
    private static inverseFundamentalCommas: number[] = [ 0, 71, 58, 45, 32, 26, 13 ] ;


    private static octaveSize: number = 77;
    private static commaOctaveLowKey: number = 36;
    private static commaOctaveHighKey: number = 40;
    private static commaFifhtyLeap: number = 45;
    private static multiplicativeInverseOfCommaFifhRespectToCommaOctave: number = ETC.findInverse(ETC.commaFifhtyLeap, ETC.octaveSize);

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
        ETC.commaIntervals.perfectUnison,
        ETC.commaIntervals.minorSecondUp,
        ETC.commaIntervals.majorSecondUp,
        ETC.commaIntervals.minorThirdUp,
        ETC.commaIntervals.majorThirdUp,
        ETC.commaIntervals.perfectFourthUp,
        ETC.commaIntervals.diminishedFifthUp,
        ETC.commaIntervals.perfectFifthUp,
        ETC.commaIntervals.minorSixthUp,
        ETC.commaIntervals.majorSixthUp,
        ETC.commaIntervals.minorSeventhUp,
        ETC.commaIntervals.majorSeventhUp,
    ];

    private static chromaticSemitones: number[] = [
        ETC.commaIntervals.perfectUnison,
        ETC.commaIntervals.augmentedUnisonUp,
        ETC.commaIntervals.majorSecondUp,
        ETC.commaIntervals.augmentedSecondUp,
        ETC.commaIntervals.majorThirdUp,
        ETC.commaIntervals.perfectFourthUp,
        ETC.commaIntervals.augmentedFourthUp,
        ETC.commaIntervals.perfectFifthUp,
        ETC.commaIntervals.augmentedFifthUp,
        ETC.commaIntervals.majorSixthUp,
        ETC.commaIntervals.augmentedSixthUp,
        ETC.commaIntervals.majorSeventhUp,
    ];

    // Extended Euclid's algorithm to calculate GCD and Bézout coefficients
    private static extendedEuclidean(a: number, b: number): [number,number,number] {
        if (b === 0) {
            return [a, 1, 0];
        }
        const [gcd, x, y] = ETC.extendedEuclidean(b, a % b);
        const newX: number = y;
        const newY: number = x - Math.floor(a / b) * y;
        return [gcd, newX, newY];
    }

    //Function to find the multiplicative inverse of "a" with respect to "m"
    private static findInverse(a: number, m: number): number {
        const gcd: [ number , number , number ] = ETC.extendedEuclidean( a , m );
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
        return [0,7,2,9,4,11,6][ETC.keyOrigin(key)];
    }

    private static keyAlterations(key: number): number {
        return Math.floor((key - ETC.keyOrigin(key)) / 7) || 0;
    }

    private static commaToDegree(comma: number, majorKey: number = 0): number{
        return comma - ETC.keyToComma(majorKey);
    }

    private static commaDistances(commaValueA: number, commaValueB: number): ETCDirections{
        const directions: ETCDirections = {
            closest: commaValueA,
            up : commaValueB,
            down: commaValueB
        };
        if (commaValueA!==commaValueB) {
            if (commaValueB>commaValueA){
                directions.up  = commaValueB;
                directions.down  = commaValueB - ETC.octaveSize;
            } else {
                directions.up  = commaValueB + ETC.octaveSize;
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
        return ETC.octaveSize;
    }

    public static commaToDrawablePitch(comma: number ): ETCPitch{
        let pitch: ETCPitch;
        do {
            pitch = ETC.commaToPitch(comma);
            if (pitch.alterations<-3){
                comma++;
            } else if (pitch.alterations>3){
                comma--;
            }
        } while( Math.abs( pitch.alterations ) > 3 );
        return pitch;
    }

    public static commaToKey(comma: number): number {
        let octave: number = Math.floor(comma / ETC.octaveSize);
        comma = ((comma % ETC.octaveSize) + ETC.octaveSize) % ETC.octaveSize;

        if(ETC.commasAboveOctave.indexOf(comma)>=0) {
            octave--;
        } else if(ETC.commasBelowOctave.indexOf(comma)>=0) {
            octave++;
        }

        let key:  number = (comma * ETC.multiplicativeInverseOfCommaFifhRespectToCommaOctave) % ETC.octaveSize;
        if (key > ETC.commaOctaveHighKey) {
            key -= ETC.octaveSize;
        }
        let validKey: number = key;
        while (validKey<ETC.minDrawableKey ) {
            validKey += 12;
        }
        while (validKey>ETC.maxDrawableKey ) {
            validKey -= 12;
        }
        if (ETC.keysAboveOctave.indexOf(key) >= 0 ) {
            if (ETC.keysAboveOctave.indexOf(validKey)<0) {
                octave++;
            }
        } else if (ETC.keysBelowOctave.indexOf(key)>=0) {
            if (ETC.keysBelowOctave.indexOf(validKey)<0) {
                octave--;
            }
        }
        key = validKey;
        return ( octave * ETC.octaveSize ) + key;
    }

    public static commaToPitch(comma: number): ETCPitch {
        const gradus: number = ((comma % 7) + 7) %7;
        const fundamentalComma: number = ETC.inverseFundamentalCommas[gradus];
        const fundamentalNote: number = ETC.inverseFundamentalNotes[gradus];
        let octave: number = Math.floor(comma / ETC.octaveSize);
        const octavedFundamentalComma: number = (octave * ETC.octaveSize) + fundamentalComma;
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

    public static chromaticSemitone(semitone: number): number {
        return ETC.chromaticSemitones[((semitone % 12) + 12 ) % 12];
    }

    public static degreeToPitch(degree: number, majorKey: number = 0 ): ETCPitch{
        return ETC.commaToPitch(ETC.keyToComma(majorKey + degree));
    }

    public static diatonicSemitone(semitone: number): number {
        return ETC.diatonicSemitones[((semitone % 12) + 12 ) % 12];
    }

    public static directionsOfKeyRelation(majorKeyA: number, majorKeyB: number): ETCDirections{
        return ETC.commaDistances(ETC.keyToComma(majorKeyA), ETC.keyToComma(majorKeyB));
    }

    public static keyToPitch(key: number): ETCPitch{
        const octave: number = ETC.keyOctave(key);
        key = key - (octave * ETC.octaveSize);
        let fundamentalNote: number = ETC.keyFundamentalNote(key);
        let alterations: number = ETC.keyAlterations(key) % 12;
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

    public static keyOctave(key: number): number {
        return Math.floor((key + ETC.commaOctaveLowKey) / ETC.octaveSize) || 0;
    }

    public static keyToComma(key: number): number{
        let octave: number = Math.floor(( key + ETC.commaOctaveLowKey ) / ETC.octaveSize );
        const comma: number = (((key * ETC.commaFifhtyLeap) % ETC.octaveSize) + ETC.octaveSize ) % ETC.octaveSize;

        if (ETC.commasAboveOctave.indexOf(comma)>=0) {
            octave++;
        } else if (ETC.commasBelowOctave.indexOf(comma)>=0) {
            octave--;
        }

        return ( octave * ETC.octaveSize ) + comma;
    }

    public static pitchToComma(pitch: ETCPitch = {fundamentalNote: 0, octave: 0, alterations:  0 }): number {
        const octaveComma: number = pitch.octave * ETC.octaveSize;
        const fundamentalComma: number = Math.round(ETC.octaveSize / 12 * pitch.fundamentalNote);
        const alterationsComma: number = pitch.alterations * 7;
        return octaveComma + fundamentalComma + alterationsComma ;
    }

    public static pitchToDegree(pitch: ETCPitch = {fundamentalNote: 0, octave: 0, alterations:  0 }, majorKey: number = 0 ): number{
        return ETC.commaToDegree(ETC.pitchToComma(pitch), majorKey);
    }

    public static pitchToKey(pitch: ETCPitch = {fundamentalNote: 0, octave: 0, alterations:  0 }): number {
        // indexOf() return -1 ... ;)
        const origin: number = ETC.fundamentalNotes.indexOf( pitch.fundamentalNote );
        const octave: number = pitch.octave;
        let key: number = origin + ( pitch.alterations * 7);
        key += (octave * ETC.octaveSize);
        return key;
    }

    public static get FundamentalNote(): number[] {
        return ETC.fundamentalNotes;
    }

    public static get FundamentalCommas(): number[] {
        return ETC.fundamentalCommas;
    }

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

    //public transpose(toKey: number,currentKey: number, mainKey: number)

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
    /****************************************** END  DEAD CODE *********************************************/

}
