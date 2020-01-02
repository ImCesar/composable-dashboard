import React, { ChangeEvent, MouseEvent, KeyboardEvent, FunctionComponent, useState, useRef } from 'react';
import { Button, TextInput } from '../../atoms';
import { InputSelectContainer } from './style';

type InputSubmitProps = {
  handleSubmit: (inputText: string) => void;
}

const InputSubmit: FunctionComponent<InputSubmitProps> = ({ handleSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputText, setInputText] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  }

  const handleButtonClick = (event?: MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();

    const input = inputRef.current;
    if (input) {
      input.value = ""; 
    }

    handleSubmit(inputText);
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const code = event.keyCode || event.which;
    // 13 is enter
    if (code === 13) {
      handleButtonClick();
    }
  }
  
  return (
    <InputSelectContainer>
      <TextInput ref={inputRef} onKeyDown={handleKeyDown} onChange={handleChange} />
      <Button onClick={handleButtonClick}>
        Submit
      </Button>
    </InputSelectContainer>
  );
}

export default InputSubmit;