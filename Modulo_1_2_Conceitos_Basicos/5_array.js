let carros=['Palio','Uno','Corolla','Ferrari'];
console.log(carros[3]); //vai de 0 a 3
let carros1 = new Array('Palio','Uno','Corolla','Ferrari'); // não é muito utilizada mais

// podemos usar funçoes dentro de array ex:
let carros2=[
    'Palio',
    'Uno',
    'Corolla',
    'Ferrari',
    function(){
        console.log('Testando!');
    }
];
carros2[4](); //chamando a função

let ingredientes=[
    ['uva','pera','maça'],
    ['arroz','macarrão']
    
];
console.log('O conteudo desta posição é:',ingredientes[1][1]);// acessa o segudo array e printa a posição 1 do mesmo.
console.log(ingredientes.shift(0));

//Para Execultar a extenção Precione: ctrl+alt+n