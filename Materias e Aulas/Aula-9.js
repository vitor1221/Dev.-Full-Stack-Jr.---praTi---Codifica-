//Aula 9: funçãoes: que retorna valor , procedimento: não retorna valor

function RetornaParOuImpar(valor){
    let resultado

    if(valor % 2 === 0){
        resultado = 'PAR'
    } else {
        resultado = 'IMPAR'
    }
    return resultado
}
let numero = 10
let resultado
console.log(resultado = RetornaParOuImpar(numero))

function CalculaArea(altura,largura){
    return altura * largura
}

console.log(CalculaArea(5,5))

//faça uma função que retorna um array ordenado

function OrdenaArray(lista, n){
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (lista[j] > lista[j + 1]) {
                let temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;
        }
    }
}
    return lista
}
let lista = [5,2,10,4,6,8],  n = lista.length
console.table(OrdenaArray(lista, n))

//funções anonimas

let exibeNome = function(nome){
    console.log(nome)
}

let exibeNome1 = (nome) => console.log(nome)

exibeNome1('Vitor')

//Exercicios: fazer uma função que soma os elementos de um array e retornta o valor
let soma = 0 

function SomaArray(lista){
    for(let i = 0; i < lista.length; i ++){
    soma += lista[i]
    }
    return soma
}
console.log(SomaArray(lista))

//Retornar o mair número em um array

function MaiorValor (lista){
    let maior = lista[0]
    for (let i = 0; i < lista.length; i++) {
            if (lista[i] > maior) {
                maior = lista[i];
            }
    }
    return maior
}
console.log(MaiorValor(lista))