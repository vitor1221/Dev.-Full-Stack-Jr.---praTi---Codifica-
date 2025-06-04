//1. Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.

const prompt = require('prompt-sync')()

let cigarrosDia = Number(prompt("Quantos cigarros fumados por dia: "))//programa mais simples possivel acretito 
let anos = Number(prompt("A quantos anos que fuma: "))// sem considerar anos bissestos
console.log(((((10*cigarrosDia) * (365*anos))/60)/24).toFixed(1),"dias")


