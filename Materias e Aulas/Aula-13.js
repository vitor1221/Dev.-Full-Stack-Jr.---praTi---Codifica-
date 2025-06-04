//Aula 13: Recursividade e TADs

function fatorial(n){// função recursiva
    if( n == 0){// tem que ter uma condição de parada
        return 1
    } else {
        return n * fatorial(n -1)// o que torna ela recursiva
    }
}

console.log(fatorial(5))


//Soma dos números de 1 até N

function soma(n){
    if( n == 1){
        return 1
    } else {
        return n + soma(n -1)
    }
}

console.log(soma(5))

//Fibonacci

function fibo(n){// acho q tem um problema
    if( n == 0){
        return 0
    }else if(n == 1){
        return 1
    } else {
        return n + fibo(n -1) + fibo(n - 2)
    }
}

console.log(fibo(5))

let categorias = [
    {
        id: 1,
        nome: "Eletrônicos",
        filhos: [
            {id: 2, nome: "Celulares", filhos: []},
            {id: 3, nome: "Computadores", filhos: [
                {id:4, nome: "Tablets", filhos: []}
            ]}
        ]
    },
    {
        id: 5,
        nome: "Louças",
        filhos:[]
    }
]

function nomes(lista, nivel = 0){
    for(let categoria of lista){
        console.log(" ".repeat(nivel * 2 ) + categoria.nome)
        if(categoria.filhos.length > 0){
            nomes(categoria.filhos, nivel + 1)
        }
    }
}

nomes(categorias)


//TAD - Tipos Abstratos de Dados

//Abstração
//Encapsulamento
//Ocultação de informação
//Separação entre Interface e Implementação