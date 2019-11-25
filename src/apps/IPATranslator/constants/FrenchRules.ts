import { IPA } from './Interfaces';

const Rules = {
  NONE: ``,
  UNKNOWN: `Could not find a transcription rule for this character.`,
  C_BACKVOWEL: `When followed by a back vowel or consonant, 'c' consonants are transcribed as [${IPA.K}].`,
  C_FRONTVOWEL: `When followed by a front vowel, 'c' consonants are transcribed as [${IPA.S}].`,
  C_SQUIGLE: `All 'ç' consonants are transcribed as [${IPA.S}].`,
  CH: `All 'ch' consonant groups are transcribed as [${IPA.FRICATIVE_C}].`,
  G_BACKVOWEL: `When followed by a back vowel or consonant, 'g' consonants are transcribed as [${IPA.G}].`,
  G_FRONTVOWEL: `When followed by a front vowel, 'g' consonants are transcribed as [${IPA.FRICATIVE_G}].`,
  GN: `All 'gn' consonant groups are transcribed as [${IPA.BACK_SWOOP_N}].`,
  GU: `All 'gu' letter groups are transcribed as [${IPA.G}].`,
  H: `All single 'h' consonants are silent, so they are not transcribed.`,
  J: `All 'j' consonants are transcribed as [${IPA.FRICATIVE_G}].`,
  QU: `All 'qu' letter groups are transcribed as [${IPA.K}].`,
  R: `Single and double 'r' consonants are transcribed as [${IPA.FLIPPED_R}].`,
  Z: `All 'z' consonants are transcribed as is: [${IPA.Z}].`,
  S: `Single and double 's' consonants are transcribed as [${IPA.S}].`,
  N: `Single and double 'n' consonants are transcribed as [${IPA.N}].`,
  M: `Single and double 'm' consonants are transcribed as [${IPA.M}].`,
  T: `Single and double 's' consonants are transcribed as [${IPA.T}].`,
  L: `Single and double 'l' consonants are transcribed as [${IPA.L}].`,
  P: `Single and double 'p' consonants are transcribed as [${IPA.P}].`,
  INTERVOCALIC_S: `Intervocalic 's' consonants are transcribed as [${IPA.Z}].`,
  FINAL_TION: `A 't' consonant in a final '-tion', '-tiel', or '-tieux' letter group is transcribed as [${IPA.S}].`,
  TH: `A 'th' consonant group is transcribed as [${IPA.T}].`,
  PH: `A 'ph' consonant group is transcribed as [${IPA.F}].`,
  B_ST: `A 'b' consonant followed by an 's' or 't' consonant devoices and is transcribed as [${IPA.P}].`,
  X_VOWEL: `An 'x' consonant followed by a vowel or an 'h' consonant is transcribed as [${IPA.G +
    IPA.Z}].`,
  X_CONSONANT: `An 'x' consonant followed by a consonant is transcribed as [${IPA.K +
    IPA.S}].`,
  SILENT_FINAL_CONSONANT: `All final consonants besides 'c', 'r', 'f', and 'l' are silent.`,
  SINGLE_A: `Single 'a' vowels are transcribed as [${IPA.BRIGHT_A}].`,
  SINGLE_E_DOUBLE_CONSONANT: `Single 'e' vowels followed by two or more consonants are transcribed as [${IPA.OPEN_E}].`,
  SINGLE_I_OR_Y: `Single 'i' and 'y' vowels are transcribed as [${IPA.CLOSED_I}].`,
  SINGLE_O_PRONOUNCED_CONSONANT: `Single 'o' vowels followed by a pronounced consonant are transcribed as [${IPA.OPEN_O}].`,
  O_Z_SOUND: `Single 'o' vowels followed by a [z] sound are transcribed as [${IPA.CLOSED_O}].`,
  O_TION: `Single 'o' vowels followed by '-tion' are transcribed as [${IPA.CLOSED_O}].`,
  SINGLE_U: `Single 'u' vowels are transcribed as [${IPA.CLOSED_Y}].`,
  FINAL_E_ES: `Final '-e' and '-es' groups are transcribed as [${IPA.SCHWA}].`,
};

/*
Rules to implement:
- Final consonants are silent except for c, r, f, l
- Consonants that are doubled in spelling are not doubled
  in transcription except for initial ill, irr, inn, imm
- Consonant n silent when preceded by a nasal vowel.
*/

export default Rules;
