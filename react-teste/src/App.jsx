import './App.css';
import React from 'react'
import Familia from './components/basico/Familia';
import FamiliaMembro from './components/basico/FamiliaMembro';
import Primeiro from './components/basico/Primeiro'; // modulo1
import ComParametro from './components/basico/ComParametro';
import Fragmento from './components/basico/Fragramentos';
import Aleatorio from './components/basico/aleatorio';
import Card from './components/layout/Card';
import ListaAlunos from './components/repeticao/ListaAlunos';



//Forma reduzida
export default function App(){
return (
        
        <div className='App'>

        <h1>Fundamento React</h1>
        <h2>Exercícios</h2>

        <div className='Cards'>
        
        <Card titulo="Desafio repetição" >

        </Card>

        <Card titulo="Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="Componentes com filhos " color="#00c8f8"> 
                <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana"/>
                        <FamiliaMembro nome="Gustavo"/>
                </Familia>
        </Card>
        <Card titulo="Desafio Aleatório" color="#FA6900">
        <Aleatorio min={1} max={10}/>
        </Card>

        <Card titulo="Primeiro" color="#e94c6f">
        <Primeiro/>
        </Card>

       <Card titulo="ComParametro" color="#E8B71A">
        <ComParametro
        titulo="Situação do Aluno"
        aluno="Pedro"
        nota={9.5}/>
      
        </Card>

        <Card titulo="Fragmento" color="#588c73">
        <Fragmento/>
        </Card>
        </div>
</div>
)
}
  
