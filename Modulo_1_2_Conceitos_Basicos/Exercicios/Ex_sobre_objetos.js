/* let celularAsus = { //declarando um tipo de objeto
                Fabricante:'Asus',
                Modelo:'ZB634KL-4J020BR',
                Nome:'Smartphone Asus Zenfone Shot Plus',
                sistema:'Android',
                Dados: function(){
                    console.log('============ Dados Técnicos sobre o aparelho: ============\n'+
                                'Nome: '+celularAsus.Nome+'\n'+
                                'Fabricante: '+celularAsus.Fabricante+'\n'+
                                'Sistema Operacional: '+celularAsus.sistema);
                    console.log('==========================================================');
                }
            }; 

let celularSamsung = { 
    Fabricante:'Samsung',
    Modelo:'Samsung Galaxy',
    Nome:'Smartphone A71 Dual SIM 64GB Preto',
    sistema:'Android(Atualizado)',
    Dados2: function(){
        console.log('============ Dados Técnicos sobre o aparelho: ============\n'+
                    'Nome: '+celularSamsung.Nome+'\n'+
                    'Fabricante: '+celularSamsung.Fabricante+'\n'+
                    'Sistema Operacional: '+celularSamsung.sistema);
        console.log('==========================================================');
    }
}; 
celularAsus.Dados();
console.log('\n \n');
celularSamsung.Dados2();
*/

// podemos reesrever a função acima  criando dois objetos iguais que se comportam
// baseado nos próprios dados, em programação orientada a objetos. Ex:
class Celular{ //declarando um tipo de objeto
    constructor(Fabricante,Modelo,Nome,Sistema) {
        this.Fabricante = Fabricante;
        this.Modelo = Modelo;
        this.Nome = Nome;
        this.Sistema = Sistema;
    }
   
    Dados(){
        console.log('============ Dados Técnicos sobre o aparelho: ============\n'+
                    'Nome: '+this.Nome+'\n'+
                    'Fabricante: '+this.Fabricante+'\n'+
                    'Sistema Operacional: '+this.Sistema);
        console.log('==========================================================');
    }
};
const celularAsus = new Celular(
    'Asus',
    'ZB634KL-4J020BR',
    'Smartphone Asus Zenfone Shot Plus',
    'Android'
);

const celularSamsung = new Celular(
    'Samsung',
    'Samsung Galaxy',
    'Smartphone A71 Dual SIM 64GB Preto',
    'Android(Atualizado)',
);
celularAsus.Dados();
console.log('\n');
celularSamsung.Dados();