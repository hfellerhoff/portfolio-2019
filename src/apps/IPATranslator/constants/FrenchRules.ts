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
  T: `Single and double 't' consonants are transcribed as [${IPA.T}].`,
  L: `Single and double 'l' consonants are transcribed as [${IPA.L}].`,
  P: `Single and double 'p' consonants are transcribed as [${IPA.P}].`,
  B: `Single and double 'b' consonants are transcribed as [${IPA.B}].`,
  F: `Single and double 'f' consonants are transcribed as [${IPA.F}].`,
  V: `Single and double 'v' consonants are transcribed as [${IPA.V}].`,
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
  GRAVE_A: `All 'à' vowels with a grave accent are transcribed as [${IPA.BRIGHT_A}].`,
  CIRCUMFLEX_A: `All 'â' vowels with a circumflex accent are transcribed as [${IPA.DARK_A}].`,
  ACUTE_E: `All 'é' vowels with an acute accent are transcribed as [${IPA.CLOSED_E}].`,
  ACCENT_E: `All 'è', 'ê', and 'ë' vowels with a grave accent, circumflex accent, or diaeresis are transcribed as [${IPA.OPEN_E}].`,
  ACCENT_I: `All 'î' and 'ï' vowels with a circumflex accent or diaeresis are transcribed as [${IPA.CLOSED_I}].`,
  ACCENT_O: `All 'ô' vowels with a circumflex accent are transcribed as [${IPA.CLOSED_O}].`,
  ACCENT_U: `All 'û' vowels with a circumflex accent are transcribed as [${IPA.CLOSED_Y}].`,
  FINAL_AS: `For the purpose of Lyric Diction, all final '-as' letter groups can be transcribed as [${IPA.BRIGHT_A}].`,
  FINAL_E_DRZ: `Final '-ed(s)', '-er(s)', and 'ez' endings are transcribed as [${IPA.CLOSED_E}].`,
  FINAL_EC: `Final '-ec(s)' endings are transcribed as [${IPA.OPEN_E +
    IPA.K}].`,
  FINAL_EF: `Final '-ef(s)' endings are transcribed as [${IPA.OPEN_E +
    IPA.F}].`,
  FINAL_EL: `Final '-el(s)' endings are transcribed as [${IPA.OPEN_E +
    IPA.L}].`,
  FINAL_ET: `Final '-et(s)' endings are transcribed as [${IPA.OPEN_E}]. Note: Final [${IPA.OPEN_E}] vowels are normally pronounced a bit more closed than a typical [${IPA.OPEN_E}].`,
  FINAL_O_SILENTCONSONANT: `Final 'o' vowels followed by a silent consonant are transcribed as [${IPA.CLOSED_O}].`,
  FINAL_IE: `Final '-ie' letter groups are transcribed as [${IPA.CLOSED_I}].`,
};

/*
Rules to implement:
- Consonants that are doubled in spelling are not doubled
  in transcription except for initial ill, irr, inn, imm
- Consonant n silent when preceded by a nasal vowel.
- Vocalic harmonization
- Vowel clusters
- Glides (semivowels)
- French schwa
- Nasals
*/

export default Rules;
