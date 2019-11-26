import { IPA } from './Interfaces';

type ExceptionPhenome = {
  ipa: string;
  rule: string;
};
type ExceptionDictionary = { [key: string]: ExceptionPhenome };

const Rules = {
  EXCEPTION: `This word is an exception, and is transcribed as shown.`,
  MER_VER: `This is known as a 'mer/ver' word, which gets transcribed with an open [${IPA.OPEN_E}].`,
  OPEN_ER: `This word is an exception in which the final '-er' is transcribed with an open [${IPA.OPEN_E}].`,
  HARD_CH: `This word is an exception in which the 'ch' consonant group becomes a plosive [${IPA.K}].`,
  BRIGHT_A: `This word is an exception, and is transcribed with a bright [${IPA.BRIGHT_A}].`,
  FINAL_AI: `This word is an exception, and is transcribed with a (semi-open) [${IPA.OPEN_E}].`,
};

const MerVerExceptions: ExceptionDictionary = {
  mer: {
    ipa: 'mεɾ',
    rule: Rules.MER_VER,
  },
  mers: {
    ipa: 'mεɾ',
    rule: Rules.MER_VER,
  },
  vers: {
    ipa: 'vεɾ',
    rule: Rules.MER_VER,
  },
  amer: {
    ipa: 'amεɾ',
    rule: Rules.MER_VER,
  },
  amers: {
    ipa: 'amεɾ',
    rule: Rules.MER_VER,
  },
  divers: {
    ipa: 'divεɾ',
    rule: Rules.MER_VER,
  },
  envers: {
    ipa: 'ɑ̃vεɾ',
    rule: Rules.MER_VER,
  },
  hiver: {
    ipa: 'ivεɾ',
    rule: Rules.MER_VER,
  },
  hivers: {
    ipa: 'ivεɾ',
    rule: Rules.MER_VER,
  },
  travers: {
    ipa: 'tɾavεɾ',
    rule: Rules.MER_VER,
  },
  univers: {
    ipa: 'ynivεɾ',
    rule: Rules.MER_VER,
  },
};

const OpenErExceptions: ExceptionDictionary = {
  cher: {
    ipa: 'ʃεɾ',
    rule: Rules.OPEN_ER,
  },
  chers: {
    ipa: 'ʃεɾ',
    rule: Rules.OPEN_ER,
  },
  enfer: {
    ipa: 'ɑ̃fεɾ',
    rule: Rules.OPEN_ER,
  },
  éther: {
    ipa: 'etεɾ',
    rule: Rules.OPEN_ER,
  },
  fer: {
    ipa: 'fεɾ',
    rule: Rules.OPEN_ER,
  },
  fers: {
    ipa: 'fεɾ',
    rule: Rules.OPEN_ER,
  },
  fier: {
    ipa: 'fjεɾ',
    rule: Rules.OPEN_ER,
  },
  hier: {
    ipa: 'jεɾ',
    rule: Rules.OPEN_ER,
  },
  sers: {
    ipa: 'sεɾ',
    rule: Rules.OPEN_ER,
  },
};

const ChExceptions: ExceptionDictionary = {
  écho: {
    ipa: 'eko',
    rule: Rules.HARD_CH,
  },
  chœur: {
    // TODO: Fix this, as it doesn't get recognized
    ipa: 'kœɾ',
    rule: Rules.HARD_CH,
  },
  choeur: {
    ipa: 'kœɾ',
    rule: Rules.HARD_CH,
  },
};

const FinalAiExceptions: ExceptionDictionary = {
  balai: {
    ipa: 'balε',
    rule: Rules.FINAL_AI,
  },
  lai: {
    ipa: 'lε',
    rule: Rules.FINAL_AI,
  },
  mai: {
    ipa: 'mε',
    rule: Rules.FINAL_AI,
  },
  rai: {
    ipa: 'ɾε',
    rule: Rules.FINAL_AI,
  },
  vrai: {
    ipa: 'vɾε',
    rule: Rules.FINAL_AI,
  },
};

const MiscExceptions: ExceptionDictionary = {
  et: {
    ipa: 'e',
    rule: `'et' (French for 'and') is pronounced as [e] to make a distinction between it and 'es/est' (French for 'is'), which are pronounced [ε].`,
  },
  femme: {
    ipa: 'famə',
    rule: Rules.BRIGHT_A,
  },
  fixe: {
    ipa: 'fiksə',
    rule: Rules.EXCEPTION,
  },
  fosse: {
    ipa: 'fosə',
    rule: Rules.EXCEPTION,
  },
  grosse: {
    ipa: 'gɾosə',
    rule: Rules.EXCEPTION,
  },
  luxe: {
    ipa: 'lyksə',
    rule: Rules.EXCEPTION,
  },
  lys: {
    ipa: 'lis',
    rule: Rules.EXCEPTION,
  },
  maison: {
    ipa: 'm(e)zõ',
    rule: Rules.EXCEPTION,
  },
  o: {
    ipa: 'o',
    rule: Rules.EXCEPTION,
  },
  oh: {
    ipa: 'o',
    rule: Rules.EXCEPTION,
  },
  pays: {
    ipa: 'pei',
    rule: Rules.EXCEPTION,
  },
  solennelle: {
    ipa: 'sɔlanεlə',
    rule: Rules.EXCEPTION,
  },
};

const Exceptions: ExceptionDictionary = {
  ...MerVerExceptions,
  ...OpenErExceptions,
  ...ChExceptions,
  ...FinalAiExceptions,
  ...MiscExceptions,
};

export default Exceptions;
