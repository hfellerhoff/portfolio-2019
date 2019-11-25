import {
  getCharArray,
  isConsonant,
  isBackVowel,
  isVowel,
  isFrontVowel,
  isSpace,
  getNextWord,
} from './Helper';
import { IPA, Result, Phoneme } from '../constants/Interfaces';
import Rules from '../constants/FrenchRules';
import Exceptions from '../constants/FrenchExceptions';

const ParseFrench = (text: string) => {
  const charArray = getCharArray(text);
  const firstLetter = charArray[0];
  const lastLetter = charArray[charArray.length - 1];

  let result: Result = {
    lines: [
      {
        words: [
          {
            syllables: [],
          },
        ],
      },
    ],
  };

  let previousPhoneme = '';
  let startOfNewWord = true;

  for (let index = 0; index < charArray.length; index += 1) {
    const letter = charArray[index];
    let phoneme: Phoneme = {
      text: letter,
      ipa: letter,
      rule: Rules.UNKNOWN,
    };
    let indexToAdd = 0;

    let previousLetter = '';
    if (index > 0) {
      previousLetter = charArray[index - 1];
    }

    let nextLetter = '';
    if (index < charArray.length - 1) {
      nextLetter = charArray[index + 1];
    }

    let nextlettersecond = '';
    if (index < charArray.length - 2) {
      nextlettersecond = charArray[index + 2];
    }

    let nextletterthird = '';
    if (index < charArray.length - 3) {
      nextletterthird = charArray[index + 3];
    }

    let nextletterfourth = '';
    if (index < charArray.length - 4) {
      nextletterfourth = charArray[index + 4];
    }

    let nextletterfifth = '';
    if (index < charArray.length - 5) {
      nextletterfifth = charArray[index + 5];
    }

    switch (letter) {
      // CONSONANTS
      case 'c':
        if (nextLetter === 'h') {
          phoneme = {
            text: 'ch',
            ipa: IPA.FRICATIVE_C,
            rule: Rules.CH,
          };
          indexToAdd = 1;
        } else if (isFrontVowel(nextLetter)) {
          phoneme = {
            text: 'c',
            ipa: IPA.S,
            rule: Rules.C_FRONTVOWEL,
          };
        } else {
          phoneme = {
            text: 'c',
            ipa: IPA.K,
            rule: Rules.C_BACKVOWEL,
          };
        }
        break;
      case 'g':
        if (nextLetter === 'n') {
          phoneme = {
            text: 'gn',
            ipa: IPA.BACK_SWOOP_N,
            rule: Rules.GN,
          };
          indexToAdd = 1;
        } else if (nextLetter === 'u') {
          phoneme = {
            text: 'gu',
            ipa: IPA.G,
            rule: Rules.GU,
          };
          indexToAdd = 1;
        } else if (isFrontVowel(nextLetter)) {
          phoneme = {
            text: 'g',
            ipa: IPA.FRICATIVE_G,
            rule: Rules.G_FRONTVOWEL,
          };
        } else if (isSpace(nextLetter)) {
          phoneme = {
            text: 'g',
            ipa: '',
            rule: Rules.SILENT_FINAL_CONSONANT,
          };
        } else {
          phoneme = {
            text: 'g',
            ipa: IPA.G,
            rule: Rules.G_BACKVOWEL,
          };
        }
        break;
      case 'ç':
        phoneme = {
          text: 'ç',
          ipa: IPA.S,
          rule: Rules.C_SQUIGLE,
        };
        if (isSpace(nextLetter)) {
          phoneme = {
            text: 'ç',
            ipa: '',
            rule: Rules.SILENT_FINAL_CONSONANT,
          };
        }
        break;
      case 'h':
        phoneme = {
          text: 'h',
          ipa: '',
          rule: Rules.H,
        };
        break;
      case 'j':
        phoneme = {
          text: 'j',
          ipa: IPA.FRICATIVE_G,
          rule: Rules.J,
        };
        if (isSpace(nextLetter)) {
          phoneme = {
            text: 'j',
            ipa: '',
            rule: Rules.SILENT_FINAL_CONSONANT,
          };
        }
        break;
      case 'q':
        if (nextLetter === 'u') {
          phoneme = {
            text: 'qu',
            ipa: IPA.K,
            rule: Rules.QU,
          };
          indexToAdd = 1;
        }
        if (isSpace(nextLetter)) {
          phoneme = {
            text: 'q',
            ipa: '',
            rule: Rules.SILENT_FINAL_CONSONANT,
          };
        }
        break;
      case 'r':
        if (nextLetter === 'r') {
          phoneme = {
            text: 'rr',
            ipa: IPA.FLIPPED_R,
            rule: Rules.R,
          };
          indexToAdd = 1;
        } else
          phoneme = {
            text: 'r',
            ipa: IPA.FLIPPED_R,
            rule: Rules.R,
          };
        break;
      case 'z':
        phoneme = {
          text: 'z',
          ipa: IPA.Z,
          rule: Rules.Z,
        };
        if (isSpace(nextLetter)) {
          phoneme = {
            text: 'z',
            ipa: '',
            rule: Rules.SILENT_FINAL_CONSONANT,
          };
        }
        break;
      case 's':
        if (isVowel(previousPhoneme) && isVowel(nextLetter)) {
          phoneme = {
            text: 's',
            ipa: IPA.Z,
            rule: Rules.INTERVOCALIC_S,
          };
        } else if (nextLetter === 's') {
          phoneme = {
            text: 'ss',
            ipa: IPA.S,
            rule: Rules.S,
          };
          indexToAdd = 1;
        } else if (isSpace(nextLetter)) {
          phoneme = {
            text: 's',
            ipa: '',
            rule: Rules.SILENT_FINAL_CONSONANT,
          };
        } else {
          phoneme = {
            text: 's',
            ipa: IPA.S,
            rule: Rules.S,
          };
        }
        break;
      case 't':
        if (
          nextLetter + nextlettersecond + nextletterthird === 'ion' &&
          isSpace(nextletterfourth)
        ) {
          phoneme = {
            text: 't',
            ipa: IPA.S,
            rule: Rules.FINAL_TION,
          };
        } else if (
          nextLetter + nextlettersecond + nextletterthird === 'iel' &&
          isSpace(nextletterfourth)
        ) {
          phoneme = {
            text: 't',
            ipa: IPA.S,
            rule: Rules.FINAL_TION,
          };
        } else if (
          nextLetter + nextlettersecond + nextletterthird + nextletterfourth ===
            'ieux' &&
          isSpace(nextletterfifth)
        ) {
          phoneme = {
            text: 't',
            ipa: IPA.S,
            rule: Rules.FINAL_TION,
          };
        } else if (nextLetter === 'h') {
          phoneme = {
            text: 'th',
            ipa: IPA.T,
            rule: Rules.TH,
          };
          indexToAdd = 1;
        } else if (nextLetter === 't') {
          phoneme = {
            text: 'tt',
            ipa: IPA.T,
            rule: Rules.T,
          };
          indexToAdd = 1;
        } else {
          phoneme = {
            text: 't',
            ipa: IPA.T,
            rule: Rules.T,
          };
        }
        if (isSpace(nextLetter)) {
          phoneme = {
            text: 't',
            ipa: '',
            rule: Rules.SILENT_FINAL_CONSONANT,
          };
        }
        break;
      case 'x':
        if (isVowel(nextLetter) || nextLetter === 'h') {
          phoneme = {
            text: 'x',
            ipa: IPA.G + IPA.Z,
            rule: Rules.X_VOWEL,
          };
        } else if (isConsonant(nextLetter)) {
          phoneme = {
            text: 'x',
            ipa: IPA.K + IPA.S,
            rule: Rules.X_CONSONANT,
          };
        }
        if (isSpace(nextLetter)) {
          phoneme = {
            text: 'x',
            ipa: '',
            rule: Rules.SILENT_FINAL_CONSONANT,
          };
        }
        break;
      case 'p':
        if (nextLetter === 'h') {
          phoneme = {
            text: 'ph',
            ipa: IPA.F,
            rule: Rules.PH,
          };
          indexToAdd = 1;
        } else if (nextLetter === 'p') {
          phoneme = {
            text: 'pp',
            ipa: IPA.P,
            rule: Rules.P,
          };
          indexToAdd = 1;
        } else {
          phoneme = {
            text: 'p',
            ipa: IPA.P,
            rule: Rules.P,
          };
        }
        if (isSpace(nextLetter)) {
          phoneme = {
            text: 'p',
            ipa: '',
            rule: Rules.SILENT_FINAL_CONSONANT,
          };
        }
        break;
      case 'b':
        if (nextLetter === 's' || nextLetter === 't') {
          phoneme = {
            text: 'b',
            ipa: IPA.P,
            rule: Rules.B_ST,
          };
        } else if (nextLetter === 'b') {
          phoneme = {
            text: 'bb',
            ipa: IPA.B,
            rule: Rules.B,
          };
          indexToAdd = 1;
        } else {
          phoneme = {
            text: 'b',
            ipa: IPA.B,
            rule: Rules.B,
          };
        }
        if (isSpace(nextLetter)) {
          phoneme = {
            text: 'b',
            ipa: '',
            rule: Rules.SILENT_FINAL_CONSONANT,
          };
        }
        break;
      case 'f':
        if (nextLetter === 'f') {
          phoneme = {
            text: 'ff',
            ipa: IPA.F,
            rule: Rules.F,
          };
          indexToAdd = 1;
        } else {
          phoneme = {
            text: 'f',
            ipa: IPA.F,
            rule: Rules.F,
          };
        }
        if (isSpace(nextLetter)) {
          phoneme = {
            text: 'f',
            ipa: '',
            rule: Rules.SILENT_FINAL_CONSONANT,
          };
        }
        break;
      case 'v':
        if (nextLetter === 'v') {
          phoneme = {
            text: 'vv',
            ipa: IPA.V,
            rule: Rules.V,
          };
          indexToAdd = 1;
        } else {
          phoneme = {
            text: 'v',
            ipa: IPA.V,
            rule: Rules.V,
          };
        }
        if (isSpace(nextLetter)) {
          phoneme = {
            text: 'v',
            ipa: '',
            rule: Rules.SILENT_FINAL_CONSONANT,
          };
        }
        break;
      case 'n':
        if (nextLetter === 'n') {
          phoneme = {
            text: 'nn',
            ipa: IPA.N,
            rule: Rules.N,
          };
          indexToAdd = 1;
        } else {
          phoneme = {
            text: 'n',
            ipa: IPA.N,
            rule: Rules.N,
          };
        }
        break;
      case 'm':
        if (nextLetter === 'm') {
          phoneme = {
            text: 'mm',
            ipa: IPA.M,
            rule: Rules.M,
          };
          indexToAdd = 1;
        } else {
          phoneme = {
            text: 'm',
            ipa: IPA.M,
            rule: Rules.M,
          };
        }
        break;
      case 'l':
        if (nextLetter === 'l') {
          phoneme = {
            text: 'll',
            ipa: IPA.L,
            rule: Rules.L,
          };
          indexToAdd = 1;
        } else {
          phoneme = {
            text: 'l',
            ipa: IPA.L,
            rule: Rules.L,
          };
        }
        break;
      case 'p':
        if (nextLetter === 'p') {
          phoneme = {
            text: 'pp',
            ipa: IPA.P,
            rule: Rules.P,
          };
          indexToAdd = 1;
        } else {
          phoneme = {
            text: 'p',
            ipa: IPA.P,
            rule: Rules.P,
          };
        }
        break;

      // VOWELS
      case 'a':
        if (nextLetter === 's') {
          phoneme = {
            text: 'as',
            ipa: IPA.BRIGHT_A,
            rule: Rules.FINAL_AS,
          };
          indexToAdd = 1;
        } else {
          phoneme = {
            text: 'a',
            ipa: IPA.BRIGHT_A,
            rule: Rules.SINGLE_A,
          };
        }
        break;
      case 'à':
        phoneme = {
          text: 'à',
          ipa: IPA.BRIGHT_A,
          rule: Rules.GRAVE_A,
        };
        break;
      case 'â':
        phoneme = {
          text: 'â',
          ipa: IPA.DARK_A,
          rule: Rules.CIRCUMFLEX_A,
        };
        break;
      case 'e':
        // FINAL -ed(s)
        if (nextLetter === 'd' && isSpace(nextlettersecond)) {
          phoneme = {
            text: 'ed',
            ipa: IPA.CLOSED_E,
            rule: Rules.FINAL_E_DRZ,
          };
          indexToAdd = 1;
        } else if (
          nextLetter === 'd' &&
          nextlettersecond === 's' &&
          isSpace(nextletterthird)
        ) {
          phoneme = {
            text: 'eds',
            ipa: IPA.CLOSED_E,
            rule: Rules.FINAL_E_DRZ,
          };
          indexToAdd = 2;
        }
        // FINAL -er(s)
        else if (nextLetter === 'r' && isSpace(nextlettersecond)) {
          phoneme = {
            text: 'er',
            ipa: IPA.CLOSED_E,
            rule: Rules.FINAL_E_DRZ,
          };
          indexToAdd = 1;
        } else if (
          nextLetter === 'r' &&
          nextlettersecond === 's' &&
          isSpace(nextletterthird)
        ) {
          phoneme = {
            text: 'ers',
            ipa: IPA.CLOSED_E,
            rule: Rules.FINAL_E_DRZ,
          };
          indexToAdd = 2;
        }
        // FINAL -ez(s)
        else if (nextLetter === 'z' && isSpace(nextlettersecond)) {
          phoneme = {
            text: 'ez',
            ipa: IPA.CLOSED_E,
            rule: Rules.FINAL_E_DRZ,
          };
          indexToAdd = 1;
        }
        // FINAL -ec(s)
        else if (nextLetter === 'c' && isSpace(nextlettersecond)) {
          phoneme = {
            text: 'ec',
            ipa: IPA.OPEN_E + IPA.K,
            rule: Rules.FINAL_EC,
          };
          indexToAdd = 1;
        } else if (
          nextLetter === 'c' &&
          nextlettersecond === 's' &&
          isSpace(nextletterthird)
        ) {
          phoneme = {
            text: 'ecs',
            ipa: IPA.OPEN_E + IPA.K,
            rule: Rules.FINAL_EC,
          };
          indexToAdd = 2;
        }
        // FINAL -ef(s)
        else if (nextLetter === 'f' && isSpace(nextlettersecond)) {
          phoneme = {
            text: 'ef',
            ipa: IPA.OPEN_E + IPA.F,
            rule: Rules.FINAL_EF,
          };
          indexToAdd = 1;
        } else if (
          nextLetter === 'f' &&
          nextlettersecond === 's' &&
          isSpace(nextletterthird)
        ) {
          phoneme = {
            text: 'efs',
            ipa: IPA.OPEN_E + IPA.F,
            rule: Rules.FINAL_EF,
          };
          indexToAdd = 2;
        }
        // FINAL -el(s)
        else if (nextLetter === 'l' && isSpace(nextlettersecond)) {
          phoneme = {
            text: 'el',
            ipa: IPA.OPEN_E + IPA.L,
            rule: Rules.FINAL_EL,
          };
          indexToAdd = 1;
        } else if (
          nextLetter === 'l' &&
          nextlettersecond === 's' &&
          isSpace(nextletterthird)
        ) {
          phoneme = {
            text: 'els',
            ipa: IPA.OPEN_E + IPA.L,
            rule: Rules.FINAL_EL,
          };
          indexToAdd = 2;
        }
        // FINAL -et(s)
        else if (nextLetter === 't' && isSpace(nextlettersecond)) {
          phoneme = {
            text: 'et',
            ipa: IPA.OPEN_E,
            rule: Rules.FINAL_ET,
          };
          indexToAdd = 1;
        } else if (
          nextLetter === 't' &&
          nextlettersecond === 's' &&
          isSpace(nextletterthird)
        ) {
          phoneme = {
            text: 'ets',
            ipa: IPA.OPEN_E,
            rule: Rules.FINAL_ET,
          };
          indexToAdd = 2;
        }
        // FINAL -e and -es
        else if (
          isSpace(nextLetter) ||
          (nextLetter === 's' && isSpace(nextlettersecond))
        ) {
          phoneme = {
            text: 'e',
            ipa: IPA.SCHWA,
            rule: Rules.FINAL_E_ES,
          };
        }
        // e + DOUBLE CONSONANT
        else if (isConsonant(nextLetter) && isConsonant(nextlettersecond)) {
          phoneme = {
            text: 'e',
            ipa: IPA.OPEN_E,
            rule: Rules.SINGLE_E_DOUBLE_CONSONANT,
          };
        }
        break;
      case 'é':
        phoneme = {
          text: 'é',
          ipa: IPA.CLOSED_E,
          rule: Rules.GRAVE_A,
        };
        break;
      case 'è':
        phoneme = {
          text: 'è',
          ipa: IPA.OPEN_E,
          rule: Rules.ACCENT_E,
        };
        break;
      case 'ê':
        phoneme = {
          text: 'ê',
          ipa: IPA.OPEN_E,
          rule: Rules.ACCENT_E,
        };
        break;
      case 'ë':
        phoneme = {
          text: 'ë',
          ipa: IPA.OPEN_E,
          rule: Rules.ACCENT_E,
        };
        break;
      case 'i':
        if (nextLetter === 'e' && isSpace(nextlettersecond)) {
          phoneme = {
            text: 'ie',
            ipa: IPA.CLOSED_I,
            rule: Rules.FINAL_IE,
          };
          indexToAdd = 1;
        } else {
          phoneme = {
            text: 'i',
            ipa: IPA.CLOSED_I,
            rule: Rules.SINGLE_I_OR_Y,
          };
        }

        break;
      case 'î':
        phoneme = {
          text: 'î',
          ipa: IPA.CLOSED_I,
          rule: Rules.ACCENT_I,
        };
        break;
      case 'ï':
        phoneme = {
          text: 'ï',
          ipa: IPA.CLOSED_I,
          rule: Rules.SINGLE_I_OR_Y,
        };
        break;
      case 'y':
        phoneme = {
          text: 'y',
          ipa: IPA.CLOSED_I,
          rule: Rules.SINGLE_I_OR_Y,
        };
        break;
      case 'o':
        // o + tion
        if (
          nextLetter + nextlettersecond + nextletterthird + nextletterfourth ===
          'tion'
        ) {
          phoneme = {
            text: 'o',
            ipa: IPA.CLOSED_O,
            rule: Rules.O_TION,
          };
        }
        // If next sound is [z]
        else if (nextLetter === 's' && isVowel(nextlettersecond)) {
          phoneme = {
            text: 'o',
            ipa: IPA.CLOSED_O,
            rule: Rules.O_Z_SOUND,
          };
        }
        // o + final silent consonant
        else if (
          isConsonant(nextLetter) &&
          isSpace(nextlettersecond) &&
          nextLetter !== 'c' &&
          nextLetter !== 'r' &&
          nextLetter !== 'f' &&
          nextLetter !== 'l'
        ) {
          phoneme = {
            text: 'o' + nextLetter,
            ipa: IPA.CLOSED_O,
            rule: Rules.FINAL_O_SILENTCONSONANT,
          };
          indexToAdd = 1;
        }
        // o + final silent consonant + s
        // o + final silent consonant
        else if (
          isConsonant(nextLetter) &&
          nextlettersecond === 's' &&
          isSpace(nextletterthird) &&
          nextLetter !== 'c' &&
          nextLetter !== 'r' &&
          nextLetter !== 'f' &&
          nextLetter !== 'l'
        ) {
          phoneme = {
            text: 'o' + nextLetter + 's',
            ipa: IPA.CLOSED_O,
            rule: Rules.FINAL_O_SILENTCONSONANT,
          };
          indexToAdd = 2;
        }
        // If followed by pronounced consonant
        else if (isConsonant(nextLetter) && nextLetter !== 'h') {
          phoneme = {
            text: 'o',
            ipa: IPA.OPEN_O,
            rule: Rules.SINGLE_O_PRONOUNCED_CONSONANT,
          };
        }
        break;
      case 'ô':
        phoneme = {
          text: 'ô',
          ipa: IPA.CLOSED_O,
          rule: Rules.ACCENT_O,
        };
        break;
      case 'u':
        phoneme = {
          text: 'u',
          ipa: IPA.CLOSED_Y,
          rule: Rules.SINGLE_U,
        };
        break;
      case 'û':
        phoneme = {
          text: 'û',
          ipa: IPA.CLOSED_Y,
          rule: Rules.ACCENT_U,
        };
        break;

      // PUNCTUATION
      case ',':
      case ';':
      case '!':
      case '.':
      case '(':
      case ')':
        phoneme = {
          text: letter,
          ipa: letter,
          rule: Rules.NONE,
        };
        break;
      case "'":
        phoneme = {
          text: letter,
          ipa: '',
          rule: Rules.NONE,
        };
        break;
      case ' ':
        result.lines[result.lines.length - 1].words.push({
          syllables: [],
        });
        startOfNewWord = true;
        // indexToAdd = 1;
        break;
      case '\n':
        result.lines.push({
          words: [
            {
              syllables: [],
            },
          ],
        });
        break;
    }

    // Check for exceptions
    if (startOfNewWord) {
      const [word, newIndex] = getNextWord(index, charArray);
      if (word in Exceptions) {
        phoneme = {
          ...Exceptions[word],
          text: word,
        };
        index = newIndex;
      }
    }
    startOfNewWord = false;

    index += indexToAdd;

    const currentLine = result.lines[result.lines.length - 1];
    const currentWord = currentLine.words[currentLine.words.length - 1];
    currentWord.syllables.push(phoneme);
    previousPhoneme = phoneme.ipa[phoneme.ipa.length - 1];
  }
  return result;
};

export default ParseFrench;
