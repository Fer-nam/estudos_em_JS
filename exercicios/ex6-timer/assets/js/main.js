function getTimeFromSeconds(segundos){
    const data = new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    });

}



const relogio = document.querySelector('.relogio');

const iniciar = document.querySelector('.iniciar');
const pausa = document.querySelector('.pausar');
const zerar = document.querySelector('.reiniciar');
let segundos = 0;
let timer;

function IniciaRelogio(){
     timer = setInterval(function (){
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    },1000);
}
//código refatorado
document.addEventListener('click', function(e){
    const el = e.target;
     if(el.classList.contains('reiniciar')){
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
   };
   if(el.classList.contains('iniciar')){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    IniciaRelogio();
   }
   if(el.classList.contains('pausar')){
    relogio.classList.add('pausado');
    clearInterval(timer);
   };
});

//código mais verboso
/* iniciar.addEventListener('click', function (e){
   relogio.classList.remove('pausado');
    clearInterval(timer);
    IniciaRelogio();
    
}); */

/* pausa.addEventListener('click', function (e){
    relogio.classList.add('pausado');
    clearInterval(timer);
    }); */

/* zerar.addEventListener('click', function (e){
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
        }); */

        
        

