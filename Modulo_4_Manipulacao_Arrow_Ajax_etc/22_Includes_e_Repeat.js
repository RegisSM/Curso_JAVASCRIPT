let lista=['ovo','café','arroz','feijão','macarrão'];
console.log(lista.includes('ovo')); // o includes verifica se o elemento esta incluso no vetor

// Também é possível utilizar o includes em string veja:
let nome='Regis';
console.log('Esta letra esta inclusa?',nome.includes('r'));

console.log('='.repeat(20)+' Fim '+'='.repeat(20));

let numeros=[1,2,3,4,5];
console.log(numeros.includes(3,2)) // mostra se  o 3 esta na posição 2