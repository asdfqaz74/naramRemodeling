import { useState, useEffect, ChangeEvent } from 'react';

interface InputValidation {
  value: string;
  isValid: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const useInputValidation = (initialValue: string, reg: RegExp): InputValidation => {
  const [value, setValue] = useState<string>(initialValue);
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    const validateInput = (): void => {
      if (value === '') {
        setIsValid(true);
        return;
      }
      const isValidInput: boolean = reg.test(String(value).toLowerCase());
      setIsValid(isValidInput);
    };

    validateInput();
  }, [value, reg]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return {
    value,
    isValid,
    onChange: handleChange,
  };
};

export default useInputValidation;
