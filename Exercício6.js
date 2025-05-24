//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
//Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
//Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
//Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
//Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
const prompt = require('prompt-sync')()

let peso = Number(prompt("Insira seu peso (kg): "))//pede o peso ao usuario
let altura = Number(prompt("Insira sua altura (cm): "))//pede a altura ao usuario
let IMC = peso/(altura*altura)
//verifica a IMC
if(IMC < 18.5){//se é menor que 18.5 é baixo peso
    console.log('Você esta abaixo do peso')
} else if(IMC >= 18.5 && IMC <= 24.9){//se é maior igual a 18.5 e menos igual 24.9 peso normal
    console.log('Você esta com o peso normal')
} else if(IMC >= 25 && IMC <= 29.9){//se é maior igual a 25 e menos igual 29.9 sobrepeso
    console.log('Você esta com sobrepeso')
} else {//se esta acima de 30 obesidade
    console.log('Você esta como obesidade')
}