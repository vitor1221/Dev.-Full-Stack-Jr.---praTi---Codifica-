//Aula 16: Pilhas e Filas

class Node{//Pilha
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
    }

    push(value){
        let newNode = Node(value)
        newNode.next = this.top
        this.top = newNode
    }

    pop(){
        if(!this.top) return null
        let poppedValue = this.top.value
        this.top =this.top.next
        return poppedValue
    }

    peek(){
        if(!this.top) return null
        return this.top.value
    }

    isEmpty(){
        return this.top == null
    }
}


class Node {
    constructor(valor){
        this.valor = valor
        this.next = null
    }
}


class Queue { //Fila
    constructor(){ 
        this.front = null
        this.rear = null
        this.size = 0
    }

    enqueue(value){
        let newNode = new Node(value)
        if(this.rear){
            thisrear.next = newNode
        }

        this.rear =newNode

        if(!this.front){
            this.front = newNode
        }
        this.size++
    }
    dequeue(){

    }
}