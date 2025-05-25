//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
const prompt = require('prompt-sync')()

let valor1 = Number(prompt("Insira um valor: "))//pede os dois valor ao usuario
let valor2 = Number(prompt("Insira outro valor: "))

if(valor1 > valor2){// verifica qual é o maior
    console.log(valor1, ',', valor2)
} else{
    console.log(valor2, ',', valor1)
}