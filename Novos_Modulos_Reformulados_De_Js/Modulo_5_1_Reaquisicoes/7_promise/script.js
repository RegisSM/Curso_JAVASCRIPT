/* Promise=> Espera um determinado tempo para que a promise finalize*/

function clicou (){
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(
        (response)=>{
            return response.json();
        }
    )
    .then(
        (json)=>{
            alert(`Title: ${json[0].title}`);   
        }
    );
    alert('Opa, Clicou');
}


document.querySelector('#botao').addEventListener('click',clicou);