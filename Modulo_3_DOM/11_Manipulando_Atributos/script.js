function trocarImagem(filename, animalname) {
    document.querySelector('.img1').setAttribute('src','image/'+filename);      
    document.querySelector('.img1').setAttribute('data-animal', animalname);         
}

function pegarAnimal(){
    let animal= document.querySelector('.img1').getAttribute('data-animal');
    alert('O animal selecionado é um '+animal);
}



function seraOculto(){
    var ocultar_botao = document.querySelector('button');
    b.setAttribute('disabled', 'disabled');
}