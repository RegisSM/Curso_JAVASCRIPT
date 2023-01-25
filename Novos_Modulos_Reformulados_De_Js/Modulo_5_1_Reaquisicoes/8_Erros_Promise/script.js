function clicou(){
    fetch('https://jsonplaceholder.typicode.com/p4osts')
    .then(
        (response) =>{
            console.log('Status:',response.status);
            return response.json();
        }
    )
    .then(
        (json)=>{
            alert(json[0].title);
        }
    )
    .catch(
        (error)=>{
           alert(`Deu problema na requisição! ${error.message}`); 
        }
    )
    .finally(
        ()=>{
            alert('Requisição Finalizada!')
        }
    );
}
document.querySelector('#botao').addEventListener('click',clicou);