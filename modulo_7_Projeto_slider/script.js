

//informa a qtd de eslider que tenho
let totalSlider= document.querySelectorAll('.slider--item').length;
let currencySlider=0;// sempre começa do slider 0

// a variavel abaixo ajudara a
//definir um tamanho fixo para tela
let sliderWidth =document.querySelector('.slider').clientWidth;

/* Para usar o slider show como 100% da tela ative
o codigo abaixo:

document.querySelector('.Largura--slider').style.width =
    `calc(100vw *${totalSlider})`;  

*/

/*o codigo acima calcula a distancia que precisamos mover a linha inteira
 de slides para chegar no slide desejado */
 
 
 //para definir um tamanho fixo use o codigo abaixo
 document.querySelector('.Largura--slider').style.width =
 `${sliderWidth * totalSlider}px`;
 document.querySelector('.slider--controls').style.width=
 `${sliderWidth}px`; 
 document.querySelector('.slider--controls').style.Height=
 `${document.querySelector('.slider').clientHeight}px`; 

 /* funçoes de click*/
 function goPrev(){
    currencySlider--;// ira voltar 
    if (currencySlider<0){ // entra quando estiver no primeiro slide e voltar ele
        currencySlider= totalSlider -1; // volta para o slide 2 q é o ultimo
    }
    updateMargin();
 }
 function goNext(){
    currencySlider++;//ira para o próximo
   // o totalSlider vai passar a valer 2
    if(currencySlider>(totalSlider-1)){ // entra quando for mair q 2
        currencySlider=0; // volta para o primeiro slider
    }
    updateMargin();
 }

 function updateMargin(){
    // corrige o bug da margin sobrando de uma imagem para outra
    let sliderItemWidth= document.querySelector('.slider--item').clientWidth;
    //clientWidth => pega a largura  da tela
    // logo é calculado a largura de cada slider
    // para preencher o  tamanho correto.
    let newMargin=(currencySlider * sliderItemWidth);
    document.querySelector('.Largura--slider').style.marginLeft=
    `-${newMargin}px`;// leva a imagem para esquerda
  
 }

 setInterval(goNext,5000);