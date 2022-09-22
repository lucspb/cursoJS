let temCPUSuficiente = true

if(temCPUSuficiente){
    console.log('consegue rodar o COD')
} else{
    console.log('não consegue rodar o COD')
}

//
// obter valores do terminal

const args = process.argv
const saldo = args[args.length -1]
// console.log('args', args)
// console.log('saldo', saldo)

if(isNaN(saldo)){
    console.log(`valor inválido!`)
    return;
}

let tipoCliente = "premium"

if(saldo < 9){
    tipoCliente = "basic"
}
else if(saldo >=10 && saldo < 20){
    tipoCliente = "gold"
}
else{
    tipoCliente = null
}

// null, undefined, vazio, 0 === false

if(!tipoCliente){
    tipoCliente = "indefinido"
}

console.log('tipo do cliente', tipoCliente)

let idade = 10

// const resultado = idade >= 18 ? "pode dirigir!": "não pode dirigir!!";

// console.log(`Você ${resultado}`)

const item = "0" 
console.log(!!item);

// const resultado = 1 ? (null || ((1 != '1') ? "Hello world!": "Hackerzao")) : "não zero";

// console.log(resultado)