//Aula 11: Objetos e Manipulação

let livro  = { //Objeto
    nome: 'Marley e Eu', 
    anoLancamento: 2024, 
    autor: 'Will Smith', 
    nrPaginas: 12, 
    genero: 'comédia', 
    atores: ['Scooby', 'Super Cão', 'Batcão'],

    mostrarCaracteristicas: function() { 
        return `${this.nome} é um livro para ficar alegre.` 
    }
} 

console.log(livro.mostrarCaracteristicas())// chamada da função tenho do objeto
console.log(livro.nome)// chamada do nome dentro do objeto
let livro2 = livro // copia do objeto
livro2.preco = 20.2 // adição de caracteristica por inferência
console.log(livro) 
console.log(livro2)

let filme  = { // Objeto
    titulo: "High School Musical", 
    anoLancamento: 2007, 
    atores: ['Zac Efron', 'Arthur Morgan', 'Cloud Strife'], 
    genero: 'guerra',

    mostrarCaracteristicas: function() { 
        return `${this.titulo} é um filme de drama.` 
    } 
} 
function mostrarCaracteristicas() { 
    console.log('Teste') 
} 

mostrarCaracteristicas () 
console.log(filme.mostrarCaracteristicas())

function Anime (nome, maisForte, maisFraco, nota) {// contrutor em js
    return { 
        nome, 
        maisForte, 
        maisFraco, 
        nota 
    } 
} 
let anime1 = Anime ("Naruto", "Gemna", "Konohamaru", 5) 
let anime2 = Anime("One Piece", 'Coby', 'Ace', 5) 
console.log(anime1) 
console.log(anime2)

let jogadores = ['Caça Rato', 'Ganso', 'Pato']

for(let key in jogadores){//pega indice
    console.log(jogadores[key])
}

let palavra = 'Grêmio'

for(let char of palavra){//pega valor
    console.log(char)
    console.log(palavra)
}


//Calcular as medias das notas dos alonos de um professor e digam se a turma do professor está na media

let professor = { 
nome: 'Stark Parker', 
materia: 'Fisica', 
notas: { 
    aluno1: [10, 10], 
    aluno2: [3, 7]
    }
}

let somaNotas = 0
let numeroAlunos = 0
for(let aluno in professor.notas) { 
    somaNotas += Array.isArray (professor.notas [aluno]) ? professor.notas [aluno].reduce((acc, nota) => acc + nota, 0)/professor.notas[aluno].length : professor.notas [aluno]

    numeroAlunos++ 
} 
let media = somaNotas/numeroAlunos 
if(media >= 6){ 
    console.log(`A média da turma é ${media} e está acima do padrão`) 
} else { 
    console.log(`A média da turma é ${media} e está abaixo do padrão`) 
}

//Aula 12: Revisão do Conteúdo

let livraria = [
    {titulo: "1984", autor: "George Orwell", ano: 1984}, 
    {titulo: "O Profeta", autor: "Endrew Berthold", ano: 2001}, 
    {titulo: "Código Limpo", autor: "Martin", ano: 2010}, 
    {titulo: "O Velho e o Mar", autor: "Hemmingway", ano: 1910}, 
    {titulo: "O Principe", autor: "Maquiável", ano: 2002}, 
]

//for of para iterar e verificar os livros publicados antes do ano 2000

for(let livro of livraria){
    if(livro.ano < 2000){
        console.log(livro, 'São livros de antes de 2000')
    }
}

let filmes = [ 
    {titulo: "Sempre ao seu lado", genero: "De chorar"}, 
    {titulo: "Massacre da Serra Elétrica", genero: "Terror"}, 
    {titulo: "Minha Mãe é uma Peça", genero: "Comédia"},
    {titulo: "Tarzan", genero: "Aventura"}, 
    {titulo: "Como eu Era Antes de Você", genero: "De chorar"}, 
    {titulo: "Jogo da Imitação", genero: "Histórico"}, 
    {titulo: "Top Gun", genero: "Guerra"}, 
    {titulo: "Your Name", genero: "Romance"}, 
    {titulo: "Deadpool", genero: "Herói"}, 
    {titulo: "Batman Forever", genero: "Herói"}, 
]

//lister a contagem de generos desses filmes.

let contagemFilmes = {}

filmes.forEach((filme) => { 
    console.log(filme) 
    if(contagemFilmes [filme.genero]){ 
        contagemFilmes [filme.genero]++ 
    } else { 
        contagemFilmes [filme.genero] = 1 
    } 
})

console.table(contagemFilmes) 