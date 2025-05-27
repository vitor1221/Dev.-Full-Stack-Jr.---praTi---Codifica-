//Aula 10: Principais funções nativas do js

let nome = 'Vitor Rezer'

console.log(nome.length)
console.log(nome.charAt(0))
console.log(nome.indexOf('R'))

console.log(nome.replace('Rezer', 'Soares'))
console.log(nome.substr(6, 5))
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())

console.log("     Joaquim  ".trim())

//faça uma função que inverta uma string

function inverteString (String){
    let invertido = ''
    for(let i = String.length -1; i >= 0; i--){
        invertido += String[i]
    }
    return invertido
}

console.log(inverteString(nome))

function reverseString(str){
    return str.split('').reverse().join('')
}

console.log(reverseString(nome))

//encontre o número de vogais de um String

function numeroVogais(str){
    let vogais = str.match(/[aeiou]/gi)
    return vogais ? vogais.length : 0
}

console.log(numeroVogais('Dragon Age'))

console.log(Math.ceil(100.2)) 
console.log(Math.floor(100.2)) 
console.log(Math.round(100.2)) 

console.log(Math.sqrt(81)) 
console.log(Math.cbrt(81)) 
console.log(Math.pow(9, 2)) 

console.log(Math.abs(-100.2))

console.log(Math.random() *100)

//faça uma função que gere um numero aleatorio entre dois valores

function numeroAleatoria(max,min){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let numero = numeroAleatoria(10, 50)
console.log(numero)


let data = new Date()

console.log(data.getDate())
console.log(data.getMonth() + 1)
console.log(data.getFullYear())
console.log(data.toString())

let data1 = new Date(2015, 7, 7)
let data2 = new Date(2025, 7, 7)

console.log(data1.getTime())
console.log(data2.getTime())

let milissegundos = Math.abs(data1.getTime() - data2.getTime())

console.log(milissegundos)

let dias =(1 * 24 * 60 * 60 * 1000)

console.log('dias entre uma data e outra:', milissegundos/dias)

//faça uma função que formate um data

function fonmadaData(date){
    return `${date.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
}

let date = new Date()
console.log(fonmadaData(date))


//como revisão faça a soma de duas matrizes