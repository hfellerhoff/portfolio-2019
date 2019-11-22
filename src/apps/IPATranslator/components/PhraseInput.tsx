import React from 'react';

interface Props {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

const PhraseInput: React.FC<Props> = ({ inputText, setInputText }: Props) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setInputText(text);
  };

  return (
    <div>
      <h2 className='ipa header body'>
        Input some
        <select name='Language' className='ipa language-select'>
          <option value='latin'>Latin</option>
          {/* <option value='german'>German</option> */}
        </select>
        text to translate:
      </h2>
      <form onSubmit={e => onSubmit(e)}>
        <textarea
          spellCheck={false}
          value={inputText}
          rows={0}
          className='ipa input'
          onChange={e => onChange(e)}
        />
      </form>
    </div>
  );
};

export default PhraseInput;
