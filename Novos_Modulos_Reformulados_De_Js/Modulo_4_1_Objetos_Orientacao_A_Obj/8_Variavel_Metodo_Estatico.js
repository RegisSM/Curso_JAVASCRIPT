/* Obs:
        Funções dentro de uma classe é chamada de método.
        Static => a variável não se aplica a ninguém especifico mas, passa a pegar
        os dados geral de uma classe que for especificada; 
        This => a variável pega os dados de um objeto especifico.
        */

class Person {
    static hands =  2; // significa que variável esta associada com a classe Person, mas não
                       // esta associada com o objeto, ou seja esta variável sera valida para
                       // apenas a classe Person. 
    age = 0;
    constructor(name){
        this.name = name; // aqui é um exemplo que esta como 
    }
    sayHi(){
        console.log(`Oi, eu sou o ${this.name} e tenho ${this.hands} mãos.`);
        // este exemplo mostra que o hands usado com this não é mais reconhecido como um objeto.
    
        // Agora, para validar temos, que indetifica-lá como uma Person ex:
        console.log(`Oi, eu sou o ${this.name} e tenho ${Person.hands} mãos.`);
    }

    //Agora, criando uma uma função estática.
    static sayBye(){
        console.log(`Até logo: ${this.name}`);
    }
}

let p1 = new Person('Regis'); // Primeira instancia criada
p1.sayHi();


let p2 = new Person('Goro'); // Segunda  instancia criada
Person.hands = 4;
console.log(`O personagem: ${p2.name} do Mortal Kombat tem ${Person.hands} mãos.`);


// método errado de chamar uma função statica: p1.sayHello();
// método correto de chamar uma função statica:

Person.sayBye();
// logo se chamarmos uma função estatica ela 'não' ira informar um valor correto,
// pois o método statico, não apresenta um objeto especifico.