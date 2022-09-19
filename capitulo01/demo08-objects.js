const heroi = {
    nome: "Spider-Man",
    idade: 15,
    sexo: "Masculino"
}

// console.log('nome:', heroi.nome)
// console.log('idade:', heroi['idade'])
// console.log('sexo: ', heroi.sexo)
// console.log('nada: ', heroi.nada)

//criando uma nova chave pra o heroi
heroi.id = 001

console.log(heroi)

//retornar apenas as chaves
console.log(Object.keys(heroi))

//retornar os valores das chaves
console.log(Object.values(heroi))

//juntar dois objetos
const pessoa = {
    altura: "2 metros"
}

const novo = Object.assign(heroi, pessoa)

console.log(novo)

// remover uma chave
delete novo.idade

console.log(novo)   