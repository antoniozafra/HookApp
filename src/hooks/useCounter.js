import { useState } from 'react';

export const useCounter = ( inicialState = 10) => {


  const [state, setstate] = useState(inicialState);


  //FUNCTION FOR INCREMENT THE COUNTER
  const increment = (factor = 1) => {
      setstate(state + factor);

      
  }; //END FUNCTION FOR INCREMENT


  //FUNCTION FOR DECREMENT THE COUNTER 
  const decrement = (factor = 1) => {
      setstate(state - factor);
  };//END FUNCTION FOR DECREMENTE

  //FUNCTION FOR RESET THE COUNTER
  const reset = () => {
    setstate(inicialState)
    };


  return{
    state,
    increment,
    decrement,
    reset

  };//END RETURN




}
