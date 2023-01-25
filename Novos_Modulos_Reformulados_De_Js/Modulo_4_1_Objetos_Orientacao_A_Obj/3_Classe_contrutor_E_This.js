/*Classes seriam formas de você explicar para a linguagem como é o objeto que você quer que ela
 crie, */
//Classe: Instância => é pegar o tamplate de uma classe criada e criar um objeto partir dela.

//Exemplo 1:
class Person{ // foi criado uma classe para uma pessoa

    constructor(name,age){ // constroi as variáveis do objeto como paramentro
        this.name = name;
        this.age = age;
    }
}
let P1 = new Person("João", 20);
let P2 = new Person("Maria",30);
let P3 = new Person("Pedro",30);
console.log('Nome: '+ P1.name, ' Idade:'+P1.age,'\n',
            'Nome: '+ P2.name, ' Idade:'+P2.age,'\n',
            'Nome: '+ P3.name, ' Idade:'+P3.age,'\n');

//Exemplo 2:
class Person2{ 
    age = 0; //  caso declare aqui todas as pessooas tera esse valor em age
    constructor(name){
        this.name = name;
    }
}
let Pa = new Person2("João A", 20);
let Pb = new Person2("Maria B",30);
let Pc = new Person2("Pedro C",30);
console.log('Nome: '+ Pa.name, ' Idade:'+Pa.age,'\n',
            'Nome: '+ Pb.name, ' Idade:'+Pb.age,'\n',
            'Nome: '+ Pc.name, ' Idade:'+Pc.age,'\n');

