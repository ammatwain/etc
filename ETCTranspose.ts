import { KeyInstruction, TransposeOptions } from "../src";
import { ETC } from "./ETC";

export class ETCTranspose extends ETC{
    public transposeKey(Options: TransposeOptions, keyInstruction: KeyInstruction, transpose: number): void {
        transpose = Math.floor(transpose);
        if (Options.TransposeKeySignatures && !Options.TransposeByDiatonic){
            if (Options.TransposeByKey) {
                const octave: number = ETC.keyOctave(transpose);
                const transposeToKey: number = ETC.simplifyMajorKey(transpose - (octave * ETC.OctaveSize));
                keyInstruction.Key = ETC.simplifyMajorKey(transposeToKey - Options.MainKey + keyInstruction.keyTypeOriginal);
                keyInstruction.isTransposedBy = ETC.directionsOfKeyRelation(
                    keyInstruction.keyTypeOriginal,
                    keyInstruction.Key
                ).closest + (octave * ETC.OctaveSize);
            } else if( Options.TransposeByInterval) {
                const octave: number = Math.floor(transpose / 12);
                const semitone: number = ((transpose % 12) + 12 ) % 12;
                keyInstruction.Key = ETC.simplifyMajorKey(keyInstruction.keyTypeOriginal + (semitone * -5));
                keyInstruction.isTransposedBy = ETC.directionsOfKeyRelation(
                    keyInstruction.keyTypeOriginal,
                    keyInstruction.Key
                ).up + (octave * ETC.OctaveSize);
            } else { // TRANSPOSE BY HALFTONE WITH KEY TRANSPOSE
                const octave: number = Math.floor(transpose / 12);
                const semitone: number = ((transpose % 12) + 12 ) % 12;
                keyInstruction.Key = ETC.simplifyMajorKey(keyInstruction.keyTypeOriginal + (semitone * -5));
                keyInstruction.isTransposedBy = ETC.directionsOfKeyRelation(
                    keyInstruction.keyTypeOriginal,
                    keyInstruction.Key
                ).up + (octave * ETC.OctaveSize);
            }
        } else {
            keyInstruction.Key = keyInstruction.keyTypeOriginal;
            if (Options.TransposeByKey) {
                // stessa di key signature
                const octave: number = ETC.keyOctave(transpose);
                const transposeToKey: number = ETC.simplifyMajorKey(transpose - (octave * ETC.OctaveSize));
                keyInstruction.Key = ETC.simplifyMajorKey(transposeToKey - Options.MainKey + keyInstruction.keyTypeOriginal);
                keyInstruction.isTransposedBy = ETC.directionsOfKeyRelation(
                    keyInstruction.keyTypeOriginal,
                    keyInstruction.Key
                ).closest + (octave * ETC.OctaveSize);
                // ma con annulamento della chiave
                keyInstruction.Key = keyInstruction.keyTypeOriginal;
                console.log("AAAA",keyInstruction.keyTypeOriginal,keyInstruction.Key, keyInstruction.isTransposedBy);
            } else {
                keyInstruction.isTransposedBy = transpose;
            }
        }
    }
}
