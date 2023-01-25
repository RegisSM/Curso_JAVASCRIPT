let informacoes = ['NomeCompleto: arroz doce', 'Nome: arroz','Sobrenome: doce','@arroz'];

//let [nomeCompleto, nome, sobrenome, instragram]=informacoes;

// para pular o conteudo que não queira informar basta fazer:
let [ ,nome, sobrenome]=informacoes;
console.log(nome,sobrenome);


// outro jeito de descontruir array.
//podemos add uma informaçao dentro ja recebendo algum valor ex:
let [nomeP, sobrenomeP,idade=25]=['Regis','Souza'];

console.log(nomeP, sobrenomeP,idade);


// outra obs: é possivel gerar um array e em seguida 
// ja fazer a descotrução dele atravez utilizando uma função ex:
function criar(){
    let a =[1,2,3];
    return a;
}
let numeros= criar(); // chama a função onde retorna [1,2,3]
// ou  let [a,b,c]= criar();
let [a,b,c]=numeros; // transforma 1,2,3 em variaves 
console.log(a,b,c);

//Exercício: Receba 2 valores e troque eles de posição, usando descotrucao de array
let n1=20,n2=30;
console.log(n1,n2,' Antes de fazer a descontrução');
[n1,n2]=[n2,n1];
console.log(n1,n2,'Após realizar a descontrução');

/* Exercicio:
No processo de desconstrução de um array, o que devemos fazer na hora de capturar os dados do array anterior?
Resp: Setar um novo nome para os dados que virão do array e vão se tornar uma variável. */