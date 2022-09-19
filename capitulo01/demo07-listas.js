const minhaLista = []

let listaTarefas = [
    "ir pra academia",
    "estudar",
    "lavar a louça"
]

// acessar o 1o item
console.log(listaTarefas[0])
// acessar o 2o item
console.log(listaTarefas[1])
// acessar um item inexistente retorna undefined
console.log(listaTarefas[5])

//quantidade de itens no array
console.log(listaTarefas.length)

// adicionar item (por padrao, adiciona no final da lista)
listaTarefas.push("lavar mousepad")

console.log(listaTarefas)

// remover ultimo item da lista
const ultimo = listaTarefas.pop()
console.log(ultimo, listaTarefas)

// remover o primeiro item da lista
const primeiro = listaTarefas.shift()
console.log(primeiro, listaTarefas)

// remover um item especifico a partir de um indice
console.log(listaTarefas[2])
// splice(qual item de inicio, quantos remover)
listaTarefas.splice(2,1)

console.log(listaTarefas)

let itens = [
    1,
    "hello world",
    0.93
]

// verificar o tipo do array
console.log(typeof(itens))

console.log(Array.isArray(itens))

//ordenar
const numeros = [4,7,3,8,9,2,5]
console.log(numeros.sort())

const letras = ["j", "d", "z", "f", "p", "a"]
console.log(letras.sort())

// juntar dois arrays
const novo = itens.concat([1, 2, 3])
console.log(novo)

// juntar arrays em só uma string
console.log(itens.join(','))

// verificar indice do item
let index = itens.indexOf(0.93)
console.log(index)

