//2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km h^-1 , exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
const prompt = require('prompt-sync')()

let velocidade = Number(prompt("Qual a velocidade do carro: "))//programa mais simples possivel acretito

if (velocidade > 80){
    console.log((velocidade - 80)* 5, "reais de multa")
}