import React from 'react'

export default function Fragmento(props){
    return(
        //envolvendo os adjacentes para não dar erro
       // <React.Fragment>
        //forma curta
        <>
        <h2>Fragmento</h2>
        <p>Cuidado com esse erro</p>
        </>  
        //</React.Fragment>
    )
}