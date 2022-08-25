let person = {
    nome: 'Diego', 
    Idade: 12,
    notas:{
        math: 5,
        ptg: 8,
    },
    cadastro: true,
}
// ele mostra  os dados 
console.log(person.nome)

function isCadastrado(){
    if(person.cadastro == true){
        console.log('ele está cadastrado')    
    }else{
        console.log("não está cadastrado")
    }
}
isCadastrado()


function eMaior(){
if(person.idade> 18){
    console.log('maior de idade')
}else{
    console.log('menor de idade')
}
}
eMaior()