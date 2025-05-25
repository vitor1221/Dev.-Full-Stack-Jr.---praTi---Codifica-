//Aula 5: loops
const prompt = require('prompt-sync')()
let mult = Number(prompt("Qual taboada fazer? ")) //exercício : fazer uma taboada com laço de remetição while
let contador = 0

while(contador <= 10){
    console.log(`${contador} X ${mult} = ${contador * mult}`)// usar a crase para fazer isso
    contador++
}

// while(contador >= 0){
//     console.log(contador)
//     contador--
// }

for(contador = 0; contador <= 10; contador++){//exercício : fazer uma taboada com laço de remetição for
    console.log(`${contador} X ${mult} = ${contador * mult}`)
}

//faça a média aritmética de números inseridos até que o usuário digite 0
let num, soma = 0, conta = 0
while(num != 0){
    num = Number(prompt("numeros para fazer a media: para parar digite(0) "))
    soma += num
    conta ++
}
let media =soma/(conta -1)
console.log("A media é:", media)

contador = 0

do{//teste no fim
    console.log(contador, ++contador)
}while(contador > 10)

while(contador > 10){//teste no inicio
    console.log(contador, ++contador)
}