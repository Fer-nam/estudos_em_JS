function Calculadora(){
   this.display = document.querySelector(',display');
   
   this.capturaCliques = () => {
    document.addEventListener('click', event =>{
        const el = event.target;
        if(el.classList.contains('btn-num')) this.addNumDisplay(el);
        if(el.classList.contains('btn-clear')) this.clear(el)
        if(el.classList.contains('btn-del')) this.del(el)
        if(el.classList.contains('btn-eq')) this.realizaconta(el)
    });
   };

   this.addNumDisplay = el => this.display = value  += el.innerText;

   this.clear = el => this.display.value = '' ;
   

    this.inicia = () =>{
    
    this.capturaCliques();
   }
}

const Calculadora = new Calculadora();
Calculadora.inica();
