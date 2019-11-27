import React from 'react';
import './TextInput.scss';

interface Props {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  theme?: 'dark' | 'light';
  height?: number;
}

const TextInput: React.FC<Props> = ({
  inputText,
  setInputText,
  theme = 'light',
  height = 300,
}) => {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setInputText(text);
  };

  const className = `ipa__text-input--${theme}`;

  return (
    <textarea
      spellCheck={false}
      autoComplete='false'
      autoCorrect='false'
      autoCapitalize='false'
      value={inputText}
      rows={0}
      className={className}
      style={{ height }}
      onChange={e => onChange(e)}
    />
  );
};

export default TextInput;
