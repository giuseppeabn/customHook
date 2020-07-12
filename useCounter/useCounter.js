import { useState } from 'react';


// CUSTOM HOOK
export const useCounter = (initialState = 1) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialState);
  }

  return {
    counter,
    increment,
    decrement,
    reset
  };
};
