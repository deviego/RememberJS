let corSite = 'azul'


// função que sobre  escreve a variavel
function resetaCor(cor){
    corSite = cor
}

console.log(corSite)
resetaCor('a cor agora é vermelho')
console.log(corSite)

// tipos de funções

// função com parâmetro 

function MultiplicaPorDois( value){
    return value *2
}

console.log("O numero multiplicado por 2 é: " + MultiplicaPorDois(8))