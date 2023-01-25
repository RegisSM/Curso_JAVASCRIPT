/* 
Métodos principais de envio: GET, POST, PUT, DELETE.

Obs: Quando não informa o method de envio para o fetch ele usa o método GET como padrão.

GET => pega informaçoes
POST => Inserir/Enviar as informaçoes
PUT => Altera alguma informação ja existente
DELETE => deleta*/

function clicou(){ // Por padrão o método esta como GET
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
            return response.json();
        }
    )
    .then((json)=>{
        alert(`Titulo: ${json[0].title}`);
    })
    .catch(()=>{
            alert('Deu problema na requisição');
        }
    )
}

function inserir(){
    fetch('https://jsonplaceholder.typicode.com/posts',
    { // sera tratado como objeto por ter que enviar varias informações sendo elas:
        method:'POST',
        headers: {
            // conteudo do body => tipo do conteudo
            'content-type':'application/json', // serão enviado no formato json
        },
        //corpo da requisção
        //scringify => Transforma o objeto em um json com formato de string
        body: JSON.stringify({
            title:'Titulo',
            body:'Corpo de Teste da requisição',
            userId: 2
        })

    })
    //abaixo temos a resposta da requisição: onde informa se deu certo ou não.
    .then((response)=>{
            return response.json() // transforma para um objeto real
        }
    )
    .then((json)=>{ // le o objeto que foi inserido
            console.log(json);
        }
    )
}

document.querySelector('#botao').addEventListener('click',clicou);
document.querySelector('#inserir').addEventListener('click',inserir);