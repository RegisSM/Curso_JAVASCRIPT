//==================================Primeira Parte=============================================
class Formulario{ // Obs: a função formulario sera renderizada dentro do container
    items = []; // O vetor começa vazio, mas logo recebera os input's
    method = 'GET';
    constructor(container,method,action){
        this.container = document.querySelector(container);
        this.method = method;
        this.action = action;
    }

    addItem(item){ // Este parâmetro ira add os item dentro do vetor Items.
        this.items.push(item);
    }
    render(){
        // criando o elemento para ser renderizado no dom
        //Obs: a função formulario sera renderizada dentro do container
        let formElement = document.createElement('form'); // container do form
        formElement.setAttribute('metodo',this.method);
        formElement.setAttribute('action',this.action);

        // vamos varrer o array de todos os items
        for (let i  in this.items){
            // O codigo abaixo fara com que os input's sejam renderizado dentro do formulário.
            this.items[i].render(formElement); // varre os inputs, e já informa que o sera renderizado dentro do formulário.
          
        }
        this.container.appendChild(formElement); // add os elementos do formulario do container 
    }
}
class Input{
    _type = 'text'; // criando tipo get. Começa como text
    required = false;

    constructor(name, label){
        this.name = name;
        this.label = label;
    }

    get type(){
        return this._type; // retorna o valor que foi pego
    }

    set type(t){// serve para qual é o tipo do texto informado
        if(['text','password','email','submit'].includes(t)){ 
            //O comando acima verifica se t pertence a  um dos tipos apresentado no vetor
            this._type=t;
        }else{
            throw new Error`O Input do tipo "${t}" não existe.`;
        }
    }
    // Esta função tem o objetivo de rendezirar os input's dentro de um formulário.
    render(formElement){// o paramentro usado é o formulario onde sera preenchido com os input's 
        let el = document.createElement('input');
        el.type = this.type; // tipo do input
        el.name = this.name;
        el.placeholder= this.label;
        el.required = this.required;
        formElement.appendChild(el); // add o elemento

    }
}
//==================================Segunda Parte=============================================

class Botao extends Input{
 constructor(label){
    super('',label); //pega o costrutor do input
    this.type = 'submit'; //entra na função 'type'como submit
 }

    //Agora vamos reescrever a função render para ser usada no button.
    render(formElement){
        let el = document.createElement('input');
        el.type = this.type;
        el.required = this.required;
        el.value = this.label; //valor que o botão recebera.
        formElement.appendChild(el); // add o elemento.

    }
}
//============================================================================================

// Implementação do formulário
let form = new Formulario('.formArea','POST','https://site.google.com.br');
// acima temos os paramentros para: classe,  metódo e  a url


// Implementação do email
let email = new Input('email','Digite seu email'); //Parâmentros: input e label
email.type = 'email'; //tipo
email.required= true;  //requisito valido implica que este campo é obrigatório 
form.addItem(email);

//Implementação da senha           
let senha = new Input('password','Digite sua senha'); //Parâmentros: input e label
senha.type='password';
senha.required= true; // requisito valido implica que este campo é obrigatório 
form.addItem(senha);

// Implementação do botão
let botao = new Botao('Confirmar');
form.addItem(botao); // add o item botão
console.log(form.items); 


form.render(); // renderiza os input 

//============================================================================================