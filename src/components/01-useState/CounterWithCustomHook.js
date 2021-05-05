import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './Counter.css';

export const CounterWithCustomHook = () => {
    const initialCounter = 0;
    const { state, increment, decrement, reset} = useCounter(initialCounter);



    return (
            //RETORNAMOS UN FRAGMENT
            <>
                <h1>Counter with Custom hook: {state}</h1>
                 <button onClick={() => decrement(2)} className="btn"> -1 </button>
                <button onClick={() => reset()} className="btn">Reset</button>
                <button onClick={() => increment(1)} className="btn "> +1 </button>
            </>
            
    )
}
