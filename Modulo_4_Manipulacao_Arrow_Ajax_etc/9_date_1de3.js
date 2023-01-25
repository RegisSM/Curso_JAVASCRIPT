
let data= new Date();  // cria um objeto com da classe date
console.log('mostra a data e as horas com fuso horário de Brasilia\n',data,'\n');
console.log('O toDateStrin mostra apenas a data:',data.toDateString());
console.log('\n O toString Mostra apenas o texto:',data.toString());
console.log('O toUTCStrin não informa o fuso horário do brasil mas, mostra',
            'o horario de um outro pais: ',data.toUTCString());

console.log('\n');
console.log('==================data com parametro==================')
let dataComParametro= new Date(2022, 0, 1, 12, 30, 12);
console.log(dataComParametro);

console.log('\n');
console.log('================data com parametro string=============')
let dataComParametroString= new Date('2022-01-01 10:57:55');
console.log(dataComParametroString);

console.log('\n');
console.log('================data com parametro 0==================')
let dataComParametro0= new Date(0); // esta definido como 0 milisegundos
console.log(dataComParametro0.toUTCString());


console.log('\n');
console.log('===============data Atual em milisegundos==============')
let dataAtualEmMilisegundos= new Date().getTime(); // esta definido como 0 milisegundos
console.log(dataAtualEmMilisegundos);

console.log('\n');
console.log('======Exercicio: Passando apenas dois paramentro ===')
let dataAnoEmes= new Date(2055,4); // o mes começa em 0
//Logo: 0 janeiro; 1 fev; 2 março; 3 abril; maio 4
console.log('Ano/Mes:',dataAnoEmes);

console.log('\n');
console.log('Exercicio: Data atual no padrao brasileiro');
var dataPadraoBrasileiro= new Date().toLocaleDateString('pt-BR');
console.log('Data no padrao Brasileiro',dataPadraoBrasileiro);
console.log('\n');
var dataEHoraPadraoBrasileiro= new Date().toLocaleString('pt-BR');
console.log('Data e hora no padrao Brasileiro',dataEHoraPadraoBrasileiro);