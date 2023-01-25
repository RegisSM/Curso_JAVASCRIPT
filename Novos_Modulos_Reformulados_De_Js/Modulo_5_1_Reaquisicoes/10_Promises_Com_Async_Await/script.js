/* await => espera a reaquisição terminar */
async function clicou(){
    document.querySelector('#posts').style.display= 'block';
    document.getElementById('posts').innerHTML='<br/> Carregando...';
    try{
        let response = await fetch ('https://jsonplaceholder.typicode.com/posts');
        let json = await response.json(); 
        mantaBlog(json)
     
    }catch(error){
        alert(`Deu problema na requisição! ${error.message}`);
    }
    finally{ 
        alert('Requisição Finalizada!');
           
    }    
};
function mantaBlog(lista){
    let html= '';
    for (let i in lista){
        html +='<h3>'+ lista[i].title+'</h3>';
        html += lista[i].body+'<br/>';
        html += '<hr/>';
    }
    document.getElementById('posts').innerHTML= html;
}

async function inserir(){
   try{
    let response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                title:' Tituluzinho ',
                body:'Corpozinho da requisição',
                userId:'0'
            })
        });
        let GuardaJson = await response.json();
        console.log(GuardaJson);
   }
    catch(error){
        alert(`Deu problema na requisição! ${error.message}`);
    }
    finally{ 
        alert('Requisição Finalizada!');
           
    }    
};

document.querySelector('#botao').addEventListener('click',clicou);
document.querySelector('#inserir').addEventListener('click',inserir);
