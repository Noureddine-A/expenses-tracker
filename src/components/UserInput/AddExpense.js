import React from "react";

import "./AddExpense.css";
import useValidation from "../hooks/use-validation";

const AddExpense = () => {
  const validateDayInput = (day) => {
    if (
      day.trim() === "mon" ||
      day.trim() === "tue" ||
      day.trim() === "wed" ||
      day.trim() === "thu" ||
      day.trim() === "fri" ||
      day.trim() === "sat" ||
      day.trim() === "sun"
    ) {
      return true;
    } else {
      return false;
    }
  };

  const validatePriceInput = (price) => {
    console.log(price);
    if (isNaN(price)) {
      return false;
    }

    return true;
  };

  let formIsValid = false;

  const {
    input: dayInput,
    inputIsValid: dayIsValid,
    hasError: dayError,
    touched: dayTouched,
    inputChangeHandler: dayChangeHandler,
    inputBlurHandler: dayBlurHandler,
  } = useValidation(validateDayInput);

  const dayInputIsInvalid =
    !dayIsValid && dayTouched ? "day__input invalid" : "day__input";

  const {
    input: priceInput,
    inputIsValid: priceIsValid,
    hasError: priceError,
    touched: priceTouched,
    inputChangeHandler: priceChangeHandler,
    inputBlurHandler: priceBlurHandler,
  } = useValidation(validatePriceInput);

  const priceInputIsInvalid =
    !priceIsValid && priceTouched ? "price__input invalid" : "price__input";

  return (
    <form className="addexpenses__container">
      <div className={dayInputIsInvalid}>
        <label>Day</label>
        <input onChange={dayChangeHandler} onBlur={dayBlurHandler}></input>
        {dayError && <p>Enter a valid input</p>}
      </div>
      <div className={priceInputIsInvalid}>
        <label>Price</label>
        <input onChange={priceChangeHandler} onBlur={priceBlurHandler}></input>
        {priceError && <p>Enter a valid input</p>}
      </div>
      <button disabled={!formIsValid}>Add</button>
    </form>
  );
};

export default AddExpense;
