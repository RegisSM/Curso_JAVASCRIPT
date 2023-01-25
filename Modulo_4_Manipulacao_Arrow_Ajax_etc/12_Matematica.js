let pi = Math.PI;
let novoValor= 3.8484544;
let arrendonda= Math.round(novoValor);
let arredondaBaixo= Math.floor(novoValor);
let arredondaCima= Math.ceil(novoValor);
console.log('Valor de pi:',novoValor);
console.log('Valor de pi arredondado:',pi); // arrendonda o valor.
// Se valor > 5 arredonda pra cima se valor <5 arredonda para baixo

console.log('Valor de pi arredondado para baixo:',arredondaBaixo);

console.log('Valor de pi arredondado para cima:',Math.ceil(pi));
let valorAbsoluto= Math.abs(-7.5464568768);
console.log('valor absoluto:',valorAbsoluto);

console.log('=============================================\n');
let lista=[10,5,7,8,12,9,54,1,596,3];
let menorValor = Math.min(...lista); //
console.log('Seja a lista',lista,'\no menor valor dela é: ',menorValor);

let maiorValor = Math.max(...lista); //operador de espelhamento (...), conhecido como Spread Operator
//faz com que a array seja iterada um por um.
console.log('Seja a lista',lista,'\no maior valor dela é: ',maiorValor);

console.log('=============================================\n');
let ValorAleatorio = Math.random();
let ValorAleatorioMaiorQue1= (Math.random()*100);// valores quebrados
console.log('Função padrao do Math.random',ValorAleatorio);  // gera um valor aleatorio entre 0 e 1
let x=Math.floor(ValorAleatorioMaiorQue1);// transforma para baixo
console.log('Funcao random ',ValorAleatorioMaiorQue1);
console.log('Função random dentro da função Math.floor',x);