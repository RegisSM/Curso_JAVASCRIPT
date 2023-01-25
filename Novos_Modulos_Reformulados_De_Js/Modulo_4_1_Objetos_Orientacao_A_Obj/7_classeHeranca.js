class Person{
    age= 0;

    constructor(name){
        this.name = name;
    }
    sayHi(){ // função de saldações
        console.log(`Seja bem vindo ${this.name}!`);
    }

};

class Student extends Person{  // herda os dados da classe person
    constructor(name,id){
        super(name)// classe pai, refere a person
        this.id = id; // numero de matricula
    }

/*     //Exemplo de sobrescrever a função sayHi()
    sayHi(){ 
        console.log(` ${this.name} consta matriculado na faculdade.`); 
        // essa função ira substituir a sua anterior
    } */
    
    sayHello(){ // execulta a função sayHi do person
        super.sayHi();
    }
};

let p1 = new Student('Regis', 1);
let p2 = new Student('João', 2);
p1.age = 20;
p1.sayHello();
console.log(`${p1.name} tem ${p1.age} anos, e sua matricula é #${p1.id}`);
p2.sayHi();
console.log(`${p2.name} tem ${p2.age} anos, e sua matricula é #${p2.id}`);