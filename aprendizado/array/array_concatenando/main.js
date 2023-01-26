const a1 = [1,2,3];
const a2 = [4,5,6];
const a3 = a1.concat(a2, [7,8,9], 'Luiz');//concatenar arrays

const a4 = [...a1, 'luiz', ...a2, ...[7,8,9]];//Usando spread para concatenar arrays
console.log(a4);