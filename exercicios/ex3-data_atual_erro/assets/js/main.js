/* 

Código sem conhecimento da documentação 

const h1 = document.querySelector('.container h1');
h1.innerHTML = 'so para você ver';
const data = new Date();


function getDiaSemanaText(diaSemana){
    let diaSeamanaTexto;
    switch(diaSemana){
        case 0: 
        diaSeamanaTexto = 'Domingo';
        return diaSeamanaTexto;
        case 1: 
        diaSeamanaTexto = 'Segunda-Feira';
        return diaSeamanaTexto;
        case 2: 
        diaSeamanaTexto = 'Terça-Feira';
        return diaSeamanaTexto;
        case 3: 
        diaSeamanaTexto = 'Quarta-Feira';
        return diaSeamanaTexto;
        case 4: 
        diaSeamanaTexto = 'Quinta-Feira';
        return diaSeamanaTexto;
        case 5: 
        diaSeamanaTexto = 'Sexta-Feira';
        return diaSeamanaTexto;
        case 6: 
        diaSeamanaTexto = 'Sábado';
        return diaSeamanaTexto;

    };
}

function getNomeMes(numeroMes){

let nomeMes;

switch(numeroMes){
    case 0: 
    nomeMes = 'Janeiro';
    return nomeMes;
    case 1: 
    nomeMes = 'Fevereiro';
    return nomeMes;
    case 2: 
    nomeMes = 'Março';
    return nomeMes;
    case 3: 
    nomeMes = 'Abril';
    return nomeMes;
    case 4: 
    nomeMes = 'Maio';
    return nomeMes;
    case 5: 
    nomeMes = 'Junho';
    return nomeMes;
    case 6: 
    nomeMes = 'Julho';
    return nomeMes;
    case 7: 
    nomeMes = 'Agosto';
    return nomeMes;
    case 8: 
    nomeMes = 'Setembro';
    return nomeMes;
    case 9: 
    nomeMes = 'Outubro';
    return nomeMes;
    case 10: 
    nomeMes = 'Novembro';
    return nomeMes;
    case 11: 
    nomeMes = 'Dezembro';
    return nomeMes;
   

};
}

function zeroAEsquerda(num){
    return num >= 10? num: `0${num}`
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaText(diaSemana);
    const nomeMes = getNomeMes(numeroMes);
  
    return( `${nomeDia}, ${data.getDate()} de ${nomeMes} `+
    `de ${data.getFullYear()} `+ 
    `${zeroAEsquerda(data.getHours())}: ${data.getMinutes()} horas`
    );
}

h1.innerHTML = criaData(data); */

const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = data.toLocaleDateString('pt-br', {dateStyle:'full', timeStyle:'medium'});