import React from "react";

export default function Aleatorio(props){
  
   const {min, max} = props;

   const aleatorio = parseInt(Math.random()*(props.max - props.min)) + props.min;
   return(
 <>
    <div>
      <h2>Valor Aleatório</h2>
      <p>
         <strong>Valor Mínimo: </strong> {min}
      </p>
      <p>
         <strong>Valor Máximo: </strong> {max}
      </p>
      <p>
         <strong>Valor escolhido:</strong> {aleatorio}
      </p>
    </div>
    
 </>
 )
}
