const paragrafos = document.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroundColoBody = estiloBody.backgroundColor;
console.log(backgroundColoBody)

for (let p of paragrafos){
    p.style.backgroundColor =  backgroundColoBody;
    p.style.color = 'white';
}