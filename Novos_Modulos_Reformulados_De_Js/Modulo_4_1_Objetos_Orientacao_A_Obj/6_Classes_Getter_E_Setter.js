
//get => pega o valor. Ex pode ser usado em calculos, alteraçoes de variaveis , e também em juntamento de string
//set => seta o valor
class Person2{ 

    // Exemplo usando o getter
    _age = 20; //   declaração de uma variável do tipo guetter
    staps = 0 ; // passos começa em 0
    constructor(firstName, lastName){
        this.primeiroNome = firstName;
        this.ultimoNome = lastName;
    }

    takeAStap(){ // guarda os passso
        this.staps++;   
    }

    get age(){
        return this._age; // pega o valor da variavel
    }    

    get fullName(){
        return `${this.primeiroNome} ${this.ultimoNome}`;
    }


    //Exemplo usando o setter  para setar uma varival para uma possivel atualização posterior
    set age(x){
        if (typeof x=== 'number'){
            this._age = x;
        }
        
    }

}
let P1 = new Person2("João","Doidão");
let P2 = new Person2("Maria","Faria");
let P3 = new Person2("Pedro","Arrodo");
P1.age = 30;
console.log(`${P1.fullName} tem ${P1.age} anos.`) // responsável em chamar a função.

console.log(`${P2.fullName} tem ${P2.age} anos.`) 

console.log(`${P3.fullName} tem ${P3.age} anos.`) 

