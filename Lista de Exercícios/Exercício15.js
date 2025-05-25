//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

let fib1 = 0, fib2 = 1, proximo = 0

for(contador = 0; contador < 10; contador++){//faz a sequência de Fibonacci
    console.log(fib1)
    proximo = fib1 + fib2
    fib1 = fib2
    fib2 = proximo
}

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34...