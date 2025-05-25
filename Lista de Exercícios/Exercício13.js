//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require('prompt-sync')()

let num, soma = 0, conta = 0
while(num != 0){// loop que enquando diferente de zero 
    num = Number(prompt("numeros para fazer a media: para parar digite(0) "))
    soma += num
    conta ++
}
let media =soma/(conta -1)
console.log("A media é:", media)