const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;   
}

inputTarefa.addEventListener('keypress', function(e){
   if(e.keyCode === 13/* código de enter*/ ){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
   }
});

function limpaInput(){//Apaga texto apos criar tarefa e depois
    //e volta para o input
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar =  document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class','apagar');
    //setAttribute('atributo','valor');
    
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefa();
}

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);

});

document.addEventListener('click', function(e){
    const el = e.target;
    
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefa();
    }
});

function salvarTarefa(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaText = tarefa.innerText;
        tarefaText =  tarefaText.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaText);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas); //Transformar o arry em string
    localStorage.setItem('tarefas', tarefasJSON);
    //salvar no navegador ('nome para recuperar denovo(somente permite string)','valor')
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
   const listaDeTarefas = JSON.parse(tarefas);
   

   for ( let tarefa of listaDeTarefas){
    criaTarefa(tarefa);
   }
}

adicionaTarefasSalvas();
