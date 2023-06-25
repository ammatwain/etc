// questi tipi non sono necessari, ma danno chiarezza alle funzioni
export type Key = number;
export type Comma = Key;
export type MajorKey = Key;

export interface Node {
    fundamentalNote: number;
    alterations: number;
    octave?: number;
    index?: number;
    key?: number;
}

export interface Directions {
    closest: Comma;
    up: Comma;
    down: Comma;
}

export const Nodes: Node[] = [
    { fundamentalNote:  0, alterations:  0 },
    { fundamentalNote: 11, alterations: +1 },
    { fundamentalNote:  9, alterations: +3 },
    { fundamentalNote:  7, alterations: +5 },
    { fundamentalNote:  5, alterations: -4 },
    { fundamentalNote:  4, alterations: -3 },
    { fundamentalNote:  2, alterations: -1 },
    { fundamentalNote:  0, alterations: +1 },
    { fundamentalNote: 11, alterations: +2 },
    { fundamentalNote:  9, alterations: +4 },
    { fundamentalNote:  7, alterations: -5 },
    { fundamentalNote:  5, alterations: -3 },
    { fundamentalNote:  4, alterations: -2 },
    { fundamentalNote:  2, alterations:  0 },
    { fundamentalNote:  0, alterations: +2 },
    { fundamentalNote: 11, alterations: +3 },
    { fundamentalNote:  9, alterations: +5 },
    { fundamentalNote:  7, alterations: -4 },
    { fundamentalNote:  5, alterations: -2 },
    { fundamentalNote:  4, alterations: -1 },
    { fundamentalNote:  2, alterations: +1 },
    { fundamentalNote:  0, alterations: +3 },
    { fundamentalNote: 11, alterations: +4 },
    { fundamentalNote:  9, alterations: -5 },
    { fundamentalNote:  7, alterations: -3 },
    { fundamentalNote:  5, alterations: -1 },
    { fundamentalNote:  4, alterations:  0 },
    { fundamentalNote:  2, alterations: +2 },
    { fundamentalNote:  0, alterations: +4 },
    { fundamentalNote: 11, alterations: +5 },
    { fundamentalNote:  9, alterations: -4 },
    { fundamentalNote:  7, alterations: -2 },
    { fundamentalNote:  5, alterations:  0 },
    { fundamentalNote:  4, alterations: +1 },
    { fundamentalNote:  2, alterations: +3 },
    { fundamentalNote:  0, alterations: +5 },
    { fundamentalNote: 11, alterations: -5 },
    { fundamentalNote:  9, alterations: -3 },
    { fundamentalNote:  7, alterations: -1 },
    { fundamentalNote:  5, alterations: +1 },
    { fundamentalNote:  4, alterations: +2 },
    { fundamentalNote:  2, alterations: +4 },
    { fundamentalNote:  0, alterations: +6 },
    { fundamentalNote: 11, alterations: -4 },
    { fundamentalNote:  9, alterations: -2 },
    { fundamentalNote:  7, alterations:  0 },
    { fundamentalNote:  5, alterations: +2 },
    { fundamentalNote:  4, alterations: +3 },
    { fundamentalNote:  2, alterations: +5 },
    { fundamentalNote:  0, alterations: -4 },
    { fundamentalNote: 11, alterations: -3 },
    { fundamentalNote:  9, alterations: -1 },
    { fundamentalNote:  7, alterations: +1 },
    { fundamentalNote:  5, alterations: +3 },
    { fundamentalNote:  4, alterations: +4 },
    { fundamentalNote:  2, alterations: -5 },
    { fundamentalNote:  0, alterations: -3 },
    { fundamentalNote: 11, alterations: -2 },
    { fundamentalNote:  9, alterations:  0 },
    { fundamentalNote:  7, alterations: +2 },
    { fundamentalNote:  5, alterations: +4 },
    { fundamentalNote:  4, alterations: +5 },
    { fundamentalNote:  2, alterations: -4 },
    { fundamentalNote:  0, alterations: -2 },
    { fundamentalNote: 11, alterations: -1 },
    { fundamentalNote:  9, alterations: +1 },
    { fundamentalNote:  7, alterations: +3 },
    { fundamentalNote:  5, alterations: +5 },
    { fundamentalNote:  4, alterations: -5 },
    { fundamentalNote:  2, alterations: -3 },
    { fundamentalNote:  0, alterations: -1 },
    { fundamentalNote: 11, alterations:  0 },
    { fundamentalNote:  9, alterations: +2 },
    { fundamentalNote:  7, alterations: +4 },
    { fundamentalNote:  5, alterations: +6 },
    { fundamentalNote:  4, alterations: -4 },
    { fundamentalNote:  2, alterations: -2 },
];

export class ETC {
    static octaveSize: Key = 175;
    static absOctaveMinKey: Key = 85;
    static absOctaveMaxKey: Key = 89;
    static intervals = {
        "perfectUnison":       <Key>0,
        "diminishedUnison":    <Key>-7,
        "augmentedUnison":     <Key>7,
        "diminishedSecond":    <Key>-12,
        "minorSecond":         <Key>-5,
        "majorSecond":         <Key>2,
        "augmentedSecond":     <Key>9,
        "diminishedThird":     <Key>-10,
        "minorThird":          <Key>-3,
        "majorThird":          <Key>4,
        "augmentedThird":      <Key>11,
        "diminishedFourth":    <Key>-8,
        "perfectFourth":       <Key>-1,
        "augmentedFourth":     <Key>6,
        "diminishedFifth":     <Key>-6,
        "perfectFifth":        <Key>1,
        "augmentedFifth":      <Key>8,
        "diminishedSixth":     <Key>-11,
        "minorSixth":          <Key>-4,
        "majorSixth":          <Key>3,
        "augmentedSixth":      <Key>10,
        "diminishedSeventh":   <Key>-9,
        "minorSeventh":        <Key>-2,
        "majorSeventh":        <Key>5,
        "augmentedSeventh":    <Key>12,
        "diminishedOctave":    <Key>ETC.octaveSize-7,
        "perfectOctave":       <Key>ETC.octaveSize,
    };

    public static diatonicsIndexArray: Key[] = [
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

    public static cromaticsIndexArray: Key[] = [
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

    private rootKey: MajorKey = 0;

    public static simplifyMajorKey(key: Key): MajorKey{
        key = key % 12;
        if (key< -7){
            key -= -12;
        } else if (key > 7) {
            key -= 12;
        }
        return <MajorKey>key || 0;
    }

    constructor(key: Key = 0) {
        this.rootKey = ETC.simplifyMajorKey(key);
    }

    public get RootKey(): MajorKey {
        return this.rootKey;
    }

    public static majorKey(key: MajorKey = 0): ETC {
        return ETC.circleOfFifths[ETC.simplifyMajorKey(key) + 7 ];
    }

    public relativeMajorKey(keyRelation: MajorKey): ETC {
        return ETC.majorKey(ETC.simplifyMajorKey(this.RootKey + keyRelation));
    }

    public static commaToOctave(comma: Comma): number{
        return Math.floor((comma + ETC.absOctaveMinKey) / ETC.octaveSize);
    }

    public static absoluteComma(comma: Comma): number{
        return comma - (ETC.commaToOctave(comma) *ETC.octaveSize);
    }
    public static commaToHalftone(comma: Comma): number {
        return (ETC.commaToOctave(comma) * 12) + ETC.commaToFundamentalNote(comma) + ETC.commaToAlterations(comma);
    }

    public static closestComma(a: Comma, b: Comma): Directions{
        const directions: Directions = {closest: a, up : b, down: b};
        if (a!==b) {
            const hA: number = ETC.commaToHalftone(a);
            const hB: number = ETC.commaToHalftone(b);
            let halftoneUp: number;
            let halftoneDown: number;
            if (hB>hA){
                directions.up  = b;
                directions.down  = b - ETC.octaveSize;
                halftoneUp = hB;
                halftoneDown = ETC.commaToHalftone(directions.down);
            } else {
                directions.up  = b + ETC.octaveSize;
                directions.down  = b;
                halftoneUp = ETC.commaToHalftone(directions.up);
                halftoneDown = hB;
            }
            if ( (halftoneUp-hA) <= (hA - halftoneDown)) {
                directions.closest = directions.up;
            } else {
                directions.closest = directions.down;
            }
        }
        return directions;
    }

    private static commaToAlterations(comma: Comma): number{
        const commaMixture: number = comma - ( ETC.commaToOctave( comma ) * ETC.octaveSize ) + 1 ;
        const alterations: number  = Math.floor(commaMixture / 7);
        return alterations > 6 ? alterations - 12 : alterations;
    }
    private static commaToFundamentalNote(comma: Comma): number{
        const fundamentalNoteDegree: number = ( ( comma % 7 ) + 7 ) % 7;
        return [ 0,7,2,9,4,11,5 ][ fundamentalNoteDegree ];
    }

    public static commaToNode(comma: Comma): Node  {
        return {
            fundamentalNote: ETC.commaToFundamentalNote( comma ),
            alterations:  ETC.commaToAlterations( comma ),
            octave: ETC.commaToOctave( comma )
        };
    }

    public static simplifyComma(comma: Comma): Comma  {
        let alterations: number = ETC.commaToAlterations(comma);
        while (Math.abs(alterations)>3 ) {
            comma += Math.sign(alterations) * -7;
            alterations = ETC.commaToAlterations(comma);
        }
        return comma;
    }

    public static commaToSimplifyNode(comma: Comma): Node {
        comma = ETC.simplifyComma(comma);
        return {
            fundamentalNote: ETC.commaToFundamentalNote( comma ),
            alterations:  ETC.commaToAlterations( comma ),
            octave: ETC.commaToOctave( comma )
        };
    }

    public static nodeToComma(comma: Node = {fundamentalNote: 0, alterations: 0 , octave:  0 }): number {
        const keyModule: number = [ 0,1,2,3,4,5,-1 ][ [ 0,7,2,9,4,11,5 ].indexOf( comma.fundamentalNote ) ];
        return (comma.octave * ETC.octaveSize) + keyModule + comma.alterations * 7;
    }

    public static commaToAbsoluteIndex(comma: Node): number {
        let index: number = Nodes.findIndex((etc: Node)=>{
            return etc.alterations === comma.alterations && etc.fundamentalNote === comma.fundamentalNote;
        });
        if (index<0){
            index = 0;
        }
        return index;
    }

    public static sum(a: Comma , b: Comma|Key|MajorKey): Comma{
        const f1: number = ETC.commaToFundamentalNote(a);
        const f2: number = ETC.commaToFundamentalNote(b);
        const f3: number = ETC.commaToFundamentalNote(a+b);
        const d1: number = [0,2,4,5,7,9,11].indexOf(f1);
        const d2: number = [0,2,4,5,7,9,11].indexOf(f2);
        const o1: number = ETC.commaToOctave(a);
        const o2: number = ETC.commaToOctave(b);
        const o3: number = o1 + o2 + Math.floor((d1 + d2) / 7 );
        const a3: number = ETC.commaToAlterations(a+b);
        const comma: number = ETC.nodeToComma({ fundamentalNote: f3, alterations: a3, octave: o3 });
        return comma;
    }

    public static commaToIndex(comma: Node): number {
        let index: number = ETC.commaToAbsoluteIndex(comma);
        index += (comma.octave||0) * Nodes.length;
        return index;
    }

    public static indexToComma(index: number): Node {
        const moduleIndex: number = ((index % ETC.octaveSize) + ETC.octaveSize ) % ETC.octaveSize;
        const comma: Node = Nodes[moduleIndex];
        comma.octave = Math.floor(index/ETC.octaveSize);
        return comma;
    }

    public static keyToIndex(key: number): number {
        return ETC.commaToIndex(ETC.commaToNode(key));
    }

    public static transposeMajorByHalftones(key: number, halftones: number, octaveCalculations: boolean = false): number {
        let transposedKey: number = ETC.simplifyMajorKey(ETC.sum(key, (((halftones*7) %12)+12)%12));
        if (octaveCalculations){
            transposedKey += (Math.floor(halftones / 12) * ETC.octaveSize);
        }
        return transposedKey;
    }

    public static transposeCommaByHalftones(comma: number, halftones: number): number {
        const octave: number = Math.floor(halftones / 12);
        const sign: number = Math.sign(halftones) || 1;
        const absHalftone: number = (((halftones * sign) % 12) + 12 ) % 12;
        const transposeKey: Key = ( ETC.diatonicsIndexArray[absHalftone] * sign) + (octave * ETC.octaveSize);
        return ETC.sum(comma, transposeKey);
    }

    public static transposeCommaByMajorKeyRelation(srcComma: Comma, majorKeyRelation: MajorKey): Comma {
        return ETC.simplifyComma(ETC.sum(srcComma,majorKeyRelation));
    }

    public static transposeCommaToMajorKey(srcComma: Comma, majorKeyDestination: MajorKey): Comma {
        return 0;
    }

    /**** */
    public static floatToFraction(float: number, denominator: number = 1): string {
        const numerator: number = Math.round(float * denominator);
        return numerator + "/" + denominator;
    }
    public static test(): void{
        for (let i: number = 0 ; i < Nodes.length ; i++) {
            const comma: Node = Nodes[i];
            comma.index = i;
            comma.octave = 0;
            comma.key = ETC.nodeToComma(comma);
            console.log(comma);
        }
    }

}
