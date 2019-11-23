export const isVowel = (char: string) => {
  return (
    ['a', 'e', 'i', 'o', 'u', 'y', 'œ', 'æ'].indexOf(char.toLowerCase()) !== -1
  );
};

export const isConsonant = (char: string) => {
  return (
    [
      'q',
      'w',
      'r',
      't',
      'p',
      's',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      'z',
      'x',
      'c',
      'v',
      'b',
      'n',
      'm',
    ].indexOf(char.toLowerCase()) !== -1
  );
};

export const isFrontVowel = (char: string) => {
  return ['e', 'i', 'y', 'œ', 'æ'].indexOf(char.toLowerCase()) !== -1;
};

export const isBackVowel = (char: string) => {
  return ['a', 'o', 'u'].indexOf(char.toLowerCase()) !== -1;
};

export const getCharArray = (text: string) => {
  return text.toLowerCase().split('');
};

// TODO: this
export const getStressedSyllableItalian = (word: string, letter: string) => {
  for (let i = word.length; i >= 0; i--) {}
};
