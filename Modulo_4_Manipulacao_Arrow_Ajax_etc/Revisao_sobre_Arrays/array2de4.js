
console.log('=======================Ex01: splice: Remove posição=======================');
let lista1 =['Ovo','Farinha','Corante','Massa'];
let resp1= lista1.splice(2,1); 
//1º paramentro: indentifica a posição. 2º parametro: quandidade de posiçoes que sera excluido.
console.log('O item: "'+resp1+'" foi removido.');
console.log('Logo, restaram os seguintes ingredientes: \n'+lista1);
console.log('=======================Fim=======================');

console.log('\n');

console.log('=======================Ex02:concat junta 2 array=======================');
let lista2 =['Ovo','Farinha','CoranTE','Massa'];
let lista2_1 =['Forno','Liquidificador','Prato'];
let resp2= lista2.concat(lista2_1); //juntara dois array em 1
console.log(resp2);
console.log('=======================Fim=======================');

console.log('\n');
console.log('=======================Ex03:concat junta 2 array=======================');
console.log('=======================Ordena e coloca em orderm reversa===============');
let lista3 =['Ovo','Farinha','CoranTE','Massa'];
let lista3_1 =['Forno','Liquidificador','Prato'];
let resp3= lista2.concat(lista3_1); //juntara dois array em 1
console.log(resp3);
resp3.sort();//ordena em ordem alfabetica
console.log('Vetor em ordem alfabetica: \n ',resp3);
resp3.reverse();//inverte
console.log('Vetor em ordem alfabetica, mas invertido: \n ',resp3);
console.log('=======================Fim=======================');

console.log('\n');
