//Gerar uma sequencia de números para compor uma cartela de loteria, 
//que vão de 1 a 60 sequencialmente.
//1.1 (Nivel mais dificil) - Uma vez que você já gera uma cartela, 
//consegue usar o mesmo código dentro de um loop para gerar 10 cartelas iguais? =)
let posicao='';
    for (let j=1; j<=10; j++)
    {
        posicao=posicao+j;
        let sequencia='';
       
        for (let i=1; i<=60; i++)
        {
            sequencia=sequencia+i+'\n';
            
        }
        console.log('A '+j+'ª cartela, possui a seguinte sequencia:\n'+sequencia);
    }
    //console.log('Possui a seguinte sequencia: \n'+sequencia);