//Aula 7: listas, arrys
let lista = Array()
let lista2 = [1,2,3,4,'5','pera']

lista[0] = 'maça'
lista[1] = '1'
lista[2] = 1
lista2['adocidadas'] = 'pera'

console.log(lista)
console.table(lista2)

for(let i = 0; i < lista2.length; i ++){
    console.log(lista2[i])
}
lista.push('melancia')// adição no fim
lista.unshift('laranja')//adição no inicio
console.table(lista)

lista.pop()//remoção no fim
lista.shift()//remoção no inicio
console.table(lista)

//Aula 8: Exercício:
// Crie um array chamado 'numeros contendo 10 valores numéricos à sua escolha. 
// Use métodos de array para calcular: 
// A soma de todos os elementos. 
// A média dos elementos. 
// Gere um novo array chamado pares que contenha apenas os números pares de numeros. 

// Imprima no console: 
//O array original 'numeros'
//A soma 
//A média 
//O array pares

let numero = Array(1,2,3,4,5,6,7,8,9,10), soma = 0, pares =[]


for(let i = 0; i < numero.length; i ++){//sem os metodos de array
    soma += numero[i]
    if ((numero[i] % 2) == 0){
        pares.push(numero[i])
    }
}

console.log("soma: ",soma)
console.log("media: ",soma/numero.length)
console.table(pares)

soma =numero.reduce((acumulador, valor) => acumulador + valor, 0)//com os metodos de array
pares = numero.filter((num => num % 2 === 0))

console.log("soma: ",soma)
console.log("media: ",soma/numero.length)
console.table(pares)

//ordenar um array
let listas = [5,3,9,2,6,8,1,4,7,-1]//Bubble Sort
let n = listas.length

for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
        if (listas[j] > listas[j + 1]) {
            let temp = listas[j];
            listas[j] = listas[j + 1];
            listas[j + 1] = temp;
        }
    }
}

console.log(listas)

listas = [5,3,9,2,6,8,1,4,7,-1]//medodo sort
console.log(listas.sort((a, b) => (a - b)))

let matriz = []
soma = 0

for (let i = 0; i < 3; i++){
    matriz[i] =[]

    for(let j = 0;j < 3; j++){
        matriz[i][j] = 10
        if (i == j){
            soma += matriz[i][j]
        }
    }
}
console.table(matriz)
console.log(soma)

let mercado =[]
mercado[1] = ['maça', 'abacate', 'pera']
mercado['açougue'] = ['picanha','alcatra','file']
console.table(mercado)

let listaCoisas = Array()
listaCoisas ['hardware'] = [] 
listaCoisas ['hardware'] [0] = 'Placa de Vídeo' 
listaCoisas ['hardware'] [1] = 'Smartwatch' 
listaCoisas ['games'] = ['GTA VI'] 
listaCoisas ['games'][1] = 'The Witcher' 
console.table(listaCoisas)