import { IPA, Phoneme, Result, Line, Word } from '../constants/Interfaces';
import { isVowel, isFrontVowel, getCharArray } from './Helper';
import Rules from '../constants/LatinRules';

const parseLatin = (text: string) => {
  const charArray: string[] = getCharArray(text);
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
  for (let index = 0; index < charArray.length; index += 1) {
    const char = charArray[index];
    let phoneme: Phoneme = {
      ipa: char,
      rule: Rules.UNKNOWN,
    };

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

    switch (char) {
      // VOWELS
      case 'a':
        phoneme = {
          ipa: IPA.DARK_A,
          rule: Rules.DEFAULT_A,
        };
        break;
      case 'e':
      case 'œ':
      case 'æ':
        phoneme = {
          ipa: IPA.OPEN_E,
          rule: Rules.DEFAULT_E,
        };
        break;
      case 'i':
        if (isVowel(previousLetter) && isVowel(nextLetter))
          phoneme = {
            ipa: IPA.J_GLIDE,
            rule: Rules.INTERVOCALIC_I_GLIDE,
          };
        else if (char === firstLetter && isVowel(nextLetter))
          phoneme = {
            ipa: IPA.J_GLIDE,
            rule: Rules.INITIAL_I_GLIDE,
          };
        else
          phoneme = {
            ipa: IPA.CLOSED_I,
            rule: Rules.DEFAULT_I,
          };
        break;
      case 'y':
        phoneme = {
          ipa: IPA.CLOSED_I,
          rule: Rules.DEFAULT_I,
        };
        break;
      case 'o':
        phoneme = {
          ipa: IPA.OPEN_O,
          rule: Rules.DEFAULT_O,
        };
        break;
      case 'u':
        phoneme = {
          ipa: IPA.CLOSED_U,
          rule: Rules.DEFAULT_U,
        };
        break;

      // GLIDES
      case 'j':
        phoneme = {
          ipa: IPA.J_GLIDE,
          rule: Rules.DEFAULT_J,
        };
        break;

      // CONSONANTS
      case 's':
        if (isVowel(previousLetter) && isVowel(nextLetter)) {
          phoneme = {
            ipa: IPA.Z,
            rule: Rules.INTERVOCALIC_S,
          };
        } else {
          phoneme = {
            ipa: IPA.S,
            rule: Rules.DEFAULT_S,
          };
        }
        break;
      case 'r':
        if (index === 0) {
          phoneme = {
            ipa: IPA.ROLLED_R,
            rule: Rules.INITIAL_R,
          };
        } else {
          phoneme = {
            ipa: IPA.FLIPPED_R,
            rule: Rules.DEFAULT_R,
          };
        }
        break;
      case 'c':
        phoneme = {
          ipa: IPA.K,
          rule: Rules.DEFAULT_C,
        };
        break;
      case 'g':
        phoneme = {
          ipa: IPA.G,
          rule: Rules.DEFAULT_G,
        };
        break;
      case 'h':
        phoneme = {
          ipa: '',
          rule: Rules.DEFAULT_H,
        };
        break;
      case 'x':
        phoneme = {
          ipa: IPA.K + IPA.S,
          rule: Rules.DEFAULT_X,
        };
        break;
      case 'z':
        phoneme = {
          ipa: IPA.D + IPA.Z,
          rule: Rules.DEFAULT_X,
        };
        break;
      case 'v':
        phoneme = {
          ipa: IPA.V,
          rule: Rules.SAME,
        };
        break;
      case 'm':
        phoneme = {
          ipa: IPA.M,
          rule: Rules.SAME,
        };
        break;
      case 'n':
        phoneme = {
          ipa: IPA.N,
          rule: Rules.SAME,
        };
        break;
      case 'p':
        phoneme = {
          ipa: IPA.P,
          rule: Rules.SAME,
        };
        break;
      case 'l':
        phoneme = {
          ipa: IPA.L,
          rule: Rules.SAME,
        };
        break;
      case 'd':
        phoneme = {
          ipa: IPA.D,
          rule: Rules.SAME,
        };
        break;
      case 't':
        phoneme = {
          ipa: IPA.T,
          rule: Rules.SAME,
        };
        break;
      case 'b':
        phoneme = {
          ipa: IPA.B,
          rule: Rules.SAME,
        };
        break;
      case 'f':
        phoneme = {
          ipa: IPA.F,
          rule: Rules.SAME,
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
          ipa: char,
          rule: Rules.NONE,
        };
        break;
      case ' ':
        result.lines[result.lines.length - 1].words.push({
          syllables: [],
        });
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

    switch (previousLetter + char) {
      case 'bs':
      case 'ds':
      case 'gs':
      case 'ns':
      case 'ms':
        if (char === lastLetter) {
          phoneme = {
            ipa: IPA.Z,
            rule: Rules.VOICED_CONSONANT_FINAL_S,
          };
        }
        break;
      case 'ex':
        if (previousLetter + char === firstLetter + charArray[1]) {
          if (isVowel(nextLetter)) {
            phoneme = {
              ipa: IPA.G + IPA.Z,
              rule: Rules.INITIAL_EX_VOWEL,
            };
          } else if (nextLetter === 's' && isVowel(nextlettersecond)) {
            phoneme = {
              ipa: IPA.G + IPA.Z,
              rule: Rules.INITIAL_EX_S_VOWEL,
            };
            index += 1;
          } else if (nextLetter === 'h') {
            phoneme = {
              ipa: IPA.G + IPA.Z,
              rule: Rules.INITIAL_EX_H_VOWEL,
            };
            index += 1;
          } else if (nextLetter === 'c' && isFrontVowel(nextlettersecond)) {
            // book disagrees here on transcription, using Klaus'
            // phoneme = IPA.K + IPA.FRICATIVE_C // Book
            phoneme = {
              ipa: IPA.K + IPA.S + IPA.T + IPA.FRICATIVE_C,
              rule: Rules.INITIAL_EX_C_FRONTVOWEL,
            }; // Klaus
            index += 1;
          } else if (!isVowel(nextLetter)) {
            phoneme = {
              ipa: IPA.K + IPA.S,
              rule: Rules.INITIAL_EX_CONSONANT,
            };
          }
        }
        break;
    }

    switch (char + nextLetter) {
      // VOWELS
      case 'ae':
      case 'oe':
        phoneme = {
          ipa: IPA.OPEN_E,
          rule: Rules.DEFAULT_E,
        };
        index += 1;
        break;

      // CONSONANTS
      case 'ce':
      case 'ci':
      case 'cy':
        phoneme = {
          ipa: IPA.T + IPA.FRICATIVE_C,
          rule: Rules.FRICATIVE_C,
        };
        break;
      case 'ge':
      case 'gi':
      case 'gy':
        phoneme = {
          ipa: IPA.D + IPA.FRICATIVE_G,
          rule: Rules.FRICATIVE_G,
        };
        break;
      case 'gn':
        phoneme = {
          ipa: IPA.BACK_SWOOP_N,
          rule: Rules.GN,
        };
        index += 1;
        break;
      case 'ch':
        phoneme = {
          ipa: IPA.K,
          rule: Rules.CH,
        };
        index += 1;
        break;
      case 'ph':
        phoneme = {
          ipa: IPA.F,
          rule: Rules.PH,
        };
        index += 1;
        break;
      case 'th':
        phoneme = {
          ipa: IPA.T,
          rule: Rules.TH,
        };
        index += 1;
        break;
      case 'ti':
        if (isVowel(nextlettersecond) && previousLetter !== 's') {
          phoneme = {
            ipa: IPA.T + IPA.S,
            rule: Rules.TI,
          };
        }
        break;
      case 'ps':
        phoneme = {
          ipa: IPA.P + IPA.S,
          rule: Rules.PS,
        };
        index += 1;
        break;
      case 'qu':
        phoneme = {
          ipa: IPA.K + IPA.W_GLIDE,
          rule: Rules.QU,
        };
        index += 1;
        break;
      case 'sc':
        if (isFrontVowel(nextlettersecond)) {
          phoneme = {
            ipa: IPA.FRICATIVE_C,
            rule: Rules.SC_FRONTVOWEL,
          };
          index += 1;
        }
        break;
    }

    switch (previousLetter + char + nextLetter) {
      case 'ihi':
        phoneme = {
          ipa: IPA.K,
          rule: Rules.IHI,
        };
        break;
    }

    switch (char + nextLetter + nextlettersecond) {
      case 'ngu':
        if (isVowel(nextletterthird)) {
          phoneme = {
            ipa: IPA.FRONT_SWOOP_N + IPA.G + IPA.W_GLIDE,
            rule: Rules.NGU,
          };
          index += 2;
        }
        break;
      case 'nct':
        phoneme = {
          ipa: IPA.FRONT_SWOOP_N,
          rule: Rules.NCT,
        };
        break;
    }

    // word.syllables.push(phoneme);
    // line.words[line.words.length - 1].syllables = phenome;
    const currentLine = result.lines[result.lines.length - 1];
    const currentWord = currentLine.words[currentLine.words.length - 1];
    currentWord.syllables.push(phoneme);
  }

  return result;
};

export default parseLatin;
