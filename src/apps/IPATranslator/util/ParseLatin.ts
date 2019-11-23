import { IPA } from '../constants/Interfaces';
import { isVowel, isFrontVowel, getCharArray } from './Helper';

const parseLatin = (text: string) => {
  const charArray: string[] = getCharArray(text);
  let parsedIPA = '';
  const firstLetter = charArray[0];
  const lastLetter = charArray[charArray.length - 1];

  for (let index = 0; index < charArray.length; index += 1) {
    const char = charArray[index];
    let ipaToAdd = char;

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
        ipaToAdd = IPA.CLOSED_A;
        break;
      case 'e':
      case 'œ':
      case 'æ':
        ipaToAdd = IPA.OPEN_E;
        break;
      case 'i':
        if (isVowel(previousLetter) && isVowel(nextLetter))
          ipaToAdd = IPA.J_GLIDE;
        // intervocalic i
        else if (char === firstLetter && isVowel(nextLetter))
          ipaToAdd = IPA.J_GLIDE; // inital i + vowel
        break; // Same letter
      case 'y':
        ipaToAdd = IPA.CLOSED_I;
        break;
      case 'o':
        ipaToAdd = IPA.OPEN_O;
        break;
      case 'u':
        break; // Same letter

      // GLIDES
      case 'j':
        break; // Same letter

      // CONSONANTS
      case 's':
        if (isVowel(previousLetter) && isVowel(nextLetter)) ipaToAdd = IPA.Z;
        // intervocalic s
        break; // Same letter
      case 'r':
        if (index === 0) break;
        // Same letter (rolled r)
        else ipaToAdd = IPA.FLIPPED_R;
        break;
      case 'c':
        ipaToAdd = IPA.K;
        break;
      case 'g':
        ipaToAdd = IPA.G;
        break;
      case 'h':
        ipaToAdd = ''; // h silent by default
        break;
      case 'x':
        ipaToAdd = IPA.K + IPA.S;
        break;
      case 'z':
        ipaToAdd = IPA.D + IPA.Z;
        break;
    }

    switch (previousLetter + char) {
      case 'bs':
      case 'ds':
      case 'gs':
      case 'ns':
      case 'ms':
        if (char === lastLetter) {
          ipaToAdd = IPA.Z; // voiced consonant + final s
        }
        break;
      case 'ex':
        if (previousLetter + char === firstLetter + charArray[1]) {
          if (isVowel(nextLetter)) {
            ipaToAdd = IPA.G + IPA.Z;
          } else if (nextLetter === 's' && isVowel(nextlettersecond)) {
            ipaToAdd = IPA.G + IPA.Z;
            index += 1;
          } else if (nextLetter === 'h') {
            ipaToAdd = IPA.G + IPA.Z;
            index += 1;
          } else if (nextLetter === 'c' && isFrontVowel(nextlettersecond)) {
            // book disagrees here on transcription, using Klaus'
            // ipaToAdd = IPA.K + IPA.FRICATIVE_C // Book
            ipaToAdd = IPA.K + IPA.S + IPA.T + IPA.FRICATIVE_C; // Klaus
            index += 1;
          } else if (!isVowel(nextLetter)) {
            ipaToAdd = IPA.K + IPA.S;
          }
        }
    }

    switch (char + nextLetter) {
      // VOWELS
      case 'ae':
      case 'oe':
        ipaToAdd = IPA.OPEN_E;
        index += 1;
        break;

      // CONSONANTS
      case 'ce':
      case 'ci':
      case 'cy':
        ipaToAdd = IPA.T + IPA.FRICATIVE_C;
        break;
      case 'ge':
      case 'gi':
      case 'gy':
        ipaToAdd = IPA.D + IPA.FRICATIVE_G;
        break;
      case 'gn':
        ipaToAdd = IPA.BACK_SWOOP_N;
        index += 1;
        break;
      case 'ch':
        ipaToAdd = IPA.K;
        index += 1;
        break;
      case 'ph':
        ipaToAdd = IPA.F;
        index += 1;
        break;
      case 'th':
        ipaToAdd = IPA.T;
        index += 1;
        break;
      case 'ti':
        if (isVowel(nextlettersecond)) {
          ipaToAdd = IPA.T + IPA.S;
        }
        break;
      case 'ps':
        ipaToAdd = IPA.P + IPA.S;
        index += 1;
        break;
      case 'qu':
        ipaToAdd = IPA.K + IPA.W_GLIDE;
        index += 1;
        break;
      case 'sc':
        if (isFrontVowel(nextlettersecond)) {
          ipaToAdd = IPA.FRICATIVE_C;
          index += 1;
        }
        break;
    }

    switch (previousLetter + char + nextLetter) {
      case 'ihi':
        ipaToAdd = IPA.K;
        break;
    }

    switch (char + nextLetter + nextlettersecond) {
      case 'ngu':
        if (isVowel(nextletterthird)) {
          ipaToAdd = IPA.BACK_SWOOP_N + IPA.G + IPA.W_GLIDE;
          index += 2;
        }
        break;
      case 'nct':
        ipaToAdd = IPA.BACK_SWOOP_N;
        break;
    }

    parsedIPA += ipaToAdd;
  }

  return parsedIPA;
};

export default parseLatin;
