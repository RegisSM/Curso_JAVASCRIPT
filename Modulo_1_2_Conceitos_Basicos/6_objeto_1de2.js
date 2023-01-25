



console.log('============= Usando vetor =============');
let carros =['Palio','Uno','Corolla','Ferrari']; // Ex: de um array
console.log(carros[0]); // Ex para chamar uma posição

console.log('=========================================');
console.log('\n');
console.log('============= Usando Objeto =============');
let Tipo_carro={nome:'Fiat',modelo:'Uno',peso:'800kg',
                ligar:function(){console.log("vrum! vrum!")},
                acelerar:function(){console.log("vummmmm! vummmmm! vummmm!")}
            } //Ex: de um objeto
console.log('Barulho do carro Ligando: ');
Tipo_carro.ligar();
console.log('Barulho do carro Acelerando: ');
Tipo_carro.acelerar();
console.log('=========================================');

console.log('\n');
console.log('Temos dois métodos de mostrar o objeto na tela, \n sendo eles:');
console.log('1º: Tipo_carro["nome"] =>',Tipo_carro['nome']);// ou 
console.log('2º: Tipo_carro.nome =>',Tipo_carro.nome); // mais utilizado
Tipo_carro.ligar();
//Ex de um objeto sendo usando na prática: document.getElementById('Titulo').style.display='block';
//Aqui temos um objeto chamado document, e dentro dele temos uma função chamada
// getElementById, onde ela me retorna um objeto. Logo é acessado o stilo desta função
// e em seguida aplica-se um display block.
