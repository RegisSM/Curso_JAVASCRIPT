async function lerPosts(){
    let postArea =  document.querySelector('.posts')
    postArea.innerHTML='<br/> Carregando...';
    try{
        let resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
        let GuardaTransformacao= await resposta.json();
        // Entra no if caso haja post 
           if (GuardaTransformacao.length > 0 ){
            postArea.innerHTML=''; // limpa tela
            for ( let i in GuardaTransformacao ){
                let postHtml = 
                `<div>
                    <h1> ${GuardaTransformacao[i].title}</h1>
                    ${GuardaTransformacao[i].body}
                    <hr/>
                </div>`
                postArea.innerHTML+=postHtml;
            }
        } 
        else{ 
            postArea.innerHTML='Nenhum Post Encotrado';
        }
    }
    catch(e){
        console.error('Deu erro: ' + e.message);    
    }
}
// Fazendo uma requisição do tipo POST
async function addNewPost(title,body){
    await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method:'POST',
            headers:{ // informações sobre o  json 
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                body,// body: body é mesma coisa que colocar apenas body
                userId:2
            })
        }); // envia os dados para o servidor, para fazer a inserção do post
  
        //limpa os campos
        document.querySelector('#titleField').value='';
        document.querySelector('#bodyField').value='';
        //Execulta a função que ira recarregar os  posts da api
        lerPosts();
}

function inserir(){
    let title = document.querySelector('#titleField').value;
    let body = document.querySelector('#bodyField').value;
    if (title && body){
        addNewPost(title,body);
    }
    else{
        alert('Preencha todos os campos.');
    }
}


lerPosts();
document.querySelector('#inserirButton').addEventListener('click',inserir);