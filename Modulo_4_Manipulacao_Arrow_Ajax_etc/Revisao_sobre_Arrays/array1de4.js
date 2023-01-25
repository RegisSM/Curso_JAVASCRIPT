
console.log('=======================Ex01: toString=======================');
let lista1 =['Ovo','Farinha','CoranTE','Massa'];
let resp1= lista1.toString(''); //converte para string
console.log(resp1);
console.log('=======================Fim=======================');

console.log('\n');

console.log('=======================Ex02: join=======================');
let lista2 =['Ovo','Farinha','CoranTE','Massa'];
let resp2= lista2.join(' - '); //converte para string
console.log(resp2);
console.log('=======================Fim=======================');

console.log('\n');

console.log('=======================Ex03: indexOf=======================');
let lista3 =['Ovo','Farinha','CoranTE','Massa'];
let resp3= lista3.indexOf('CoranTE'); //informa em que posição esta a palavra. Caso não ache, retornara -1
console.log('Esta palavra esta na posição: '+resp3);
console.log('=======================Fim=======================');

console.log('\n');

console.log('=======================Ex04: pop e shift=======================');
let lista4 =['Ovo','Farinha','CoranTE','Massa']; 
console.log('A informação da posição final que sera excluida é: '+lista4.pop());
console.log('A informação da posição inicial que sera excluida é: '+lista4.shift());
let resp4=lista4;
console.log('Lista:'+resp4);
console.log('=======================Fim=======================');

console.log('\n');

console.log('=======================Ex05: Push=======================');
let lista5= ['Ovo','Farinha','Corante','Massa'];
console.log('Um '+lista5.push('Macarrao')+'º item foi adicionado na lista.');
let resp5=lista5;
console.log('Logo temos: ',resp5); 

console.log('=======================Fim=======================');

console.log('\n');

console.log('=======================Ex06: lista[lista.length]=======================');
let lista6= ['Ovo','Farinha','Corante','Massa'];
lista6[lista6.length]=('Liquidificador'); // add um item no vetor
console.log('Um novo item foi adicionado na lista.');
let resp6=lista6;
console.log('Logo temos: ',resp6); 

console.log('=======================Fim=======================');