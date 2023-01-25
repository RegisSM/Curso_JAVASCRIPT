
/* feth => usada para fazer requisição. Ele simplifica a escrita das requisições, 
pois, como vimos antes, precisávamos informar vários “callbacks” 
para sabermos ou manipularmos a requisição. */


/*Json => é um objeto que faz a comunicação entre requisições,
tanto para guarda informações, quanto enviar e receber informações nestas requisições */

/* Requisições => em JavaScript se traduzem em realizar chamadas com verbos HTTP, ou seja,
 criar uma requisição POST, PUT, DELETE, PATH e GET. */
function clicou(){ 
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( //e então faça
        (response)=>{ // pega uma resposta
               return response.json(); // converte a resposta para um objeto json
            }
        )
        .then(
            (json)=>{
                    console.log(json[0]); // mostra as informaçoes do primeiro item do array após conversão
                    alert('O titulo do primeiro post é: '+json[0].title);
                }
            )
}

document.querySelector('#botao').addEventListener('click',clicou);