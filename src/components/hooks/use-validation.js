import React, { useState } from "react";

const useValidation = (validateInput) => {
  const [input, setInput] = useState("");
  const [touched, setTouched] = useState(false);

  const inputIsValid = validateInput(input);
  const hasError = !inputIsValid && touched;

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setTouched(event.target.value);
  };

  return {
    input,
    inputIsValid,
    hasError,
    touched,
    inputChangeHandler,
    inputBlurHandler,
  };
};

export default useValidation;
