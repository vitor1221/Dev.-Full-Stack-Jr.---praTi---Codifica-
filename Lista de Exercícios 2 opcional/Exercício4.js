//4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.

const prompt = require('prompt-sync')()

let RetaA = Number(prompt("Qual o tamanho da reta A: "))//programa mais simples possivel acretito
let RetaB = Number(prompt("Qual o tamanho da reta B: "))
let RetaC = Number(prompt("Qual o tamanho da reta C: "))

if((RetaA < (RetaB + RetaC)) && (RetaB < (RetaA + RetaC)) && (RetaC < (RetaA + RetaB))){
    console.log('é um triângulo')
} else{
    console.log('Não é um triângulo')
}