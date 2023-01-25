// instancia => é pegar o tamplate de uma classe criada e criar um objeto partir dela

class Person2{ 
    age = 0; //  caso declare aqui todas as pessooas tera esse valor em age
    staps = 0 ; // passos começa em 0
    constructor(name){
        this.name = name;
    }

    takeAStap(){ // guarda os passso
        this.staps++;   
    }

    setAge(newAge){ // Seta a idade
        if (typeof newAge === 'number'){ // typeof => usando para verificar o qual é o tipo da variável
            this.age = newAge;
        } else{
            this.age = 'Favor informar um numero!';
        }
          
    }
}
let Pa = new Person2("João A", 20);
let Pb = new Person2("Maria B",30);
let Pc = new Person2("Pedro C",30);


//Ações para o objeto:
Pa.takeAStap();
Pa.takeAStap();


Pb.takeAStap();



Pc.takeAStap();


// chamando idade
Pa.setAge('20');


console.log(' Nome: '+ Pa.name, ' Passo:'+Pa.staps, 'Idade: '+Pa.age+ '\n',
            'Nome: '+ Pb.name, ' Passo:'+Pb.staps,'\n',
            'Nome: '+ Pc.name, ' Passo:'+Pc.staps,'\n');

