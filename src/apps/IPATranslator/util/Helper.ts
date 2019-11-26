import Letters from './Letters';

export const isVowel = (char: string) => {
  return Letters.vowels.indexOf(char.toLowerCase()) !== -1;
};

export const isConsonant = (char: string) => {
  return Letters.consonants.indexOf(char.toLowerCase()) !== -1;
};

export const isFrontVowel = (char: string) => {
  return (
    ['e', 'é', 'è', 'ê', 'i', 'y', 'œ', 'æ'].indexOf(char.toLowerCase()) !== -1
  );
};

export const isBackVowel = (char: string) => {
  return ['a', 'â', 'o', 'ô', 'u'].indexOf(char.toLowerCase()) !== -1;
};

export const getCharArray = (text: string) => {
  return text.toLowerCase().split('');
};

export const isSpace = (char: string) => {
  return char === ' ' || char === '' || char === '\n';
};

export const isPunctuation = (char: string) => {
  return Letters.punctuation.indexOf(char.toLowerCase()) !== -1;
};

export const isEndOfSentence = (char: string) => {
  return isSpace(char) || isPunctuation(char);
};

export const getNextWord = (
  index: number,
  charArray: string[]
): [string, number] => {
  let word = '';
  if (isSpace(charArray[index])) index++;
  while (!isSpace(charArray[index]) && index < charArray.length) {
    word += charArray[index];
    index++;
  }
  return [word, index - 1];
};

// TODO: this
export const getStressedSyllableItalian = (word: string, letter: string) => {
  for (let i = word.length; i >= 0; i--) {}
};
