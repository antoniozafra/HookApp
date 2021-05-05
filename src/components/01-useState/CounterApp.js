import React, {useState} from 'react';
import "./Counter.css";


export const CounterApp = () => {


    const [state, setState] = useState({
        counter1:10,
        counter2: 20 

    });

    const {counter1, counter2} = state;

    // console.log(counter)


    return (
        <div>
            {/* <h1>Counter {counter}</h1> */}
            {/*MOSTRAMOS LOS DOS PARRAFOS POR PANTALLA*/}
            <h1>Counter 1 {counter1}</h1>
            <h1>Counter 2 {counter2}</h1>
            <hr>
            </hr>

            <button
             className="btn btn-primary"
             onClick={ () => {
                 //CAMBIAMOS EL ESTADO DE LA APLICACION
                setState({
                    ...state,
                    counter1: counter1+1
                })
                
             }}
             >{/*FIN BOTON*/}
                 
                 
            +1</button>
            
        </div>
    )
}
