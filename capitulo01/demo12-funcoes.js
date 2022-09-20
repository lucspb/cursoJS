function nomeFuncao(parametro){
    //codigo
}

function queDiaEHoje(){
    const data = new Date()
    console.log(`Hoje é dia: ${data.getDate()}`)
}

queDiaEHoje()

function soma(v1, v2){
    console.log(`A soma de ${v1} e ${v2} é:`, v1 + v2)
}

soma(3, 5)
soma(50, 100)

// funcoes podem retornar valores
function novaSoma(valor1, valor2){
    return valor1 + valor2
}
const idade = 20
const altura = 179
const resultado = novaSoma(idade, altura)
console.log('resultado', resultado)

function multiplicar(valor1, valor2){
    const resultado = valor1 * valor2
    return resultado
}
console.log(`o resultado da multiplicação é:`, multiplicar (10, 5))

const funcionario1 = {
    nome: 'Lucas',
    desconto: 500,
    salarioBruto: 3200,
    salarioLiquido: 0
}

const funcionario2 = {
    nome: 'Mariazinha',
    desconto: 800,
    salarioBruto: 5000,
    salarioLiquido: 0
}

// minha regra pra o desconto
function calcularDesconto(salarioBruto, desconto){
    return salarioBruto -  desconto
}

funcionario1.salarioLiquido = calcularDesconto(
    funcionario1.salarioBruto,
    funcionario1.desconto
)

funcionario2.salarioLiquido = calcularDesconto(
    funcionario2.salarioBruto,
    funcionario2.desconto
)

console.log(
    `Salario ${funcionario1.nome}: ${funcionario1.salarioLiquido}`,
    `Salario ${funcionario2.nome}: ${funcionario2.salarioLiquido}`,
)








