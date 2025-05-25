//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
const prompt = require('prompt-sync')()

let nota = Number(prompt("Insira sua nota de 0 a 10: "))//pede a nota ao usuario
//verifica a nota
if(nota >= 7){//se é maior igual a 7 aprovado
    console.log('Aprovado')
} else if(nota >= 5 && nota < 7){//se é maior que 5 e menos que 7 recuperação
    console.log("Recuperação")
} else{//se esta abaixo de 5 reprovado
    console.log("Reprovado")
}