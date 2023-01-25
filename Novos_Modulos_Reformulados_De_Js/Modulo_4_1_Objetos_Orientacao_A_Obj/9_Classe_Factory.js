class Person{
    age= 0;
    constructor(name){
        this.name = name;
    }

}
// Abaixo temos uma factory, pode ser considerada como uma 
// função que cria um objeto para uma determinada finalidade
function createPerson(name,age){ 
    let p = new Person(name);  // pega o nome
        p.age = age; // tb recebe uma idade
        return p;  // retorna a nome e idade
}

let p1 = createPerson('Regis',90);
console.log (`${p1.name} tem ${p1.age} anos`);