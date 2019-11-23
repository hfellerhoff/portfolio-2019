export interface Phoneme {
  ipa: string;
  rule: string;
}

export interface Word {
  syllables: Phoneme[];
}

export interface Line {
  words: Word[];
}

export interface Result {
  lines: Line[];
}

export enum Languages {
  Latin = 'Latin',
  German = 'German',
  Italian = 'Italian',
  French = 'French',
}

export enum IPA {
  CLOSED_I = 'i',
  OPEN_I = 'I',
  CLOSED_E = 'e',
  OPEN_E = 'ε',
  CLOSED_U = 'u',
  OPEN_U = 'ʊ',
  CLOSED_O = 'o',
  OPEN_O = 'ɔ',
  BRIGHT_A = 'a',
  DARK_A = 'ɑ',
  OPEN_Y = 'y',
  CLOSED_Y = 'Y',
  CLOSED_MIXED_O = 'ø',
  OPEN_MIXED_O = 'œ',
  J_GLIDE = 'j',
  W_GLIDE = 'w',
  FLIPPED_R = 'ɾ',
  ROLLED_R = 'r',
  SCHWA = 'e',
  R_SCHWA = 'ʁ',
  ICH_LAUT = 'ç',
  ACH_LAUT = 'x',
  K = 'k',
  G = 'g',
  T = 't',
  D = 'd',
  Z = 'z',
  F = 'f',
  P = 'p',
  S = 's',
  L = 'l',
  B = 'b',
  GLI = 'ʎ',
  V = 'v',
  M = 'm',
  N = 'n',
  FRICATIVE_C = 'ʃ',
  FRICATIVE_G = 'ʒ',
  BACK_SWOOP_N = 'ɲ',
  FRONT_SWOOP_N = 'ŋ',
}
