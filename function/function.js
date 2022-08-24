let corSite = 'azul'


function resetaCor(cor){
    corSite = cor
}

console.log(corSite)
resetaCor('a cor agora é vermelho')
console.log(corSite)

// tipos de funções

function MultiplicaPorDois( value){
    return value *2
}

console.log("O numero multiplicado por 2 é: " + MultiplicaPorDois(8))