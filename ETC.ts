export interface ETCNode {
    fundamentalNote: number;
    alterations: number;
    octave: number;
}

export class ETC {
    static octaveSize: number = 12 * 7;
    static halfOctaveSize: number = ETC.octaveSize / 2;
    static intervals = {
        perfectUnison:       0,
        augmentedUnison:     7,
        diminishedSecond:  -12,
        minorSecond:        -5,
        majorSecond:         2,
        augmentedSecond:     9,
        diminishedThird:   -10,
        minorThird:         -3,
        majorThird:          4,
        augmentedThird:     11,
        diminishedFourth:   -8,
        perfectFourth:      -1,
        augmentedFourth:     6,
        diminishedFifth:    -6,
        perfectFifth:        1,
        augmentedFifth:      8,
        diminishedSixth:   -11,
        minorSixth:         -4,
        majorSixth:          3,
        augmentedSixth:     10,
        diminishedSeventh:  -9,
        minorSeventh:       -2,
        majorSeventh:        5,
        augmentedSeventh:   12,
        diminishedOctave:   -7,
        perfectOctave:      84,
    };
/*
    private static cromaticsIndexArray: number[] = [
        ETC.intervals.perfectUnison,
        ETC.intervals.minorSecond,
        ETC.intervals.majorSecond,
        ETC.intervals.minorThird,
        ETC.intervals.majorThird,
        ETC.intervals.perfectFourth,
        ETC.intervals.diminishedFifth,
        ETC.intervals.perfectFifth,
        ETC.intervals.minorSixth,
        ETC.intervals.majorSixth,
        ETC.intervals.minorSeventh,
        ETC.intervals.majorSeventh,
    ];

    private static diatonicsIndexArray: number[] = [
        ETC.intervals.perfectUnison,
        ETC.intervals.augmentedUnison,
        ETC.intervals.majorSecond,
        ETC.intervals.augmentedSecond,
        ETC.intervals.majorThird,
        ETC.intervals.perfectFourth,
        ETC.intervals.augmentedFourth,
        ETC.intervals.perfectFifth,
        ETC.intervals.augmentedFifth,
        ETC.intervals.majorSixth,
        ETC.intervals.augmentedSixth,
        ETC.intervals.majorSeventh,
    ];
*/
    public static keyNames: any ={
        "Cb" :-7,"Gb" :-6,"Db" :-5,"Ab":-4,"Eb":-3,"Bb":-2,"F" :-1,"C" :0,"G" :1,"D" :2,"A"  :3,"E"  :4,"B"  :5,"F#" :6,"C#" :7,
        "Abm":-7,"Ebm":-6,"Bbm":-5,"Fm":-4,"Cm":-3,"Gm":-2,"Dm":-1,"Am":0,"Em":1,"Bm":2,"F#m":3,"C#m":4,"G#m":5,"D#m":6,"A#m":7,
    };
    private static circleOfFifths: ETC[] = [
        new ETC(-7),
        new ETC(-6),
        new ETC(-5),
        new ETC(-4),
        new ETC(-3),
        new ETC(-2),
        new ETC(-1),
        new ETC(0),
        new ETC(1),
        new ETC(2),
        new ETC(3),
        new ETC(4),
        new ETC(5),
        new ETC(6),
        new ETC(7),
    ];

    private rootKey: number = 0;

    public static simplifyKey(key: number): number{
        key = key % 12;
        if (key< -7){
            key -= -12;
        } else if (key > 7) {
            key -= 12;
        }
        return key || 0;
    }

    constructor(key: number = 0) {
        this.rootKey = ETC.simplifyKey(key);
    }

    public get RootKey(): number {
        return this.rootKey;
    }

    public static key(key: number): ETC {
        return ETC.circleOfFifths[ETC.simplifyKey(key) + 7 ];
    }

    public relativeKey(keyRelation: number): ETC {
        return ETC.key(ETC.simplifyKey(this.RootKey + keyRelation));
    }

    private static keyToOctave(key: number): number{
        return Math.floor((key + ETC.halfOctaveSize) / ETC.octaveSize);
    }
    private static keyToAlterations(key: number): number{
        const keyMixture: number = key - ( ETC.keyToOctave( key ) * ETC.octaveSize ) + 1 ;
        const alterations: number  = Math.floor(keyMixture / 7);
        return alterations > 6 ? alterations - 12 : alterations;
    }
    private static keyToFundamentalNote(key: number): number{
        const fundamentalNoteModule: number = ( ( key % 7 ) + 7 ) % 7;
        return [ 0,7,2,9,4,11,5 ][ fundamentalNoteModule ];
    }
    public static keyToNode(key: number): ETCNode  {
        return {
            fundamentalNote: ETC.keyToFundamentalNote( key ),
            alterations:  ETC.keyToAlterations( key ),
            octave: ETC.keyToOctave( key )
        };
    }
    public static nodeToKey(node: ETCNode = {fundamentalNote: 0, alterations: 0 , octave:  0 }): number {
        const keyModule: number = [ 0,1,2,3,4,5,-1 ][ [ 0,7,2,9,4,11,5 ].indexOf( node.fundamentalNote ) ];
        return (node.octave * ETC.octaveSize) + keyModule + node.alterations * 7;
    }
    /**** */
    public static floatToFraction(float: number, denominator: number = 1): string {
        const numerator: number = Math.round(float * denominator);
        return numerator + "/" + denominator;
    }
}
