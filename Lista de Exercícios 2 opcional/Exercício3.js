//3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas.

const prompt = require('prompt-sync')()

let distancia = Number(prompt("Qual a distância que sera percorrida em Km: "))//programa mais simples possivel acretito

if (distancia <= 200){
    console.log((distancia)* 0.5, "reais de passagem")
}else {
    console.log((distancia)* 0.45, "reais de passagem")
}