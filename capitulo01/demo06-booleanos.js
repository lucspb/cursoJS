const podeDirigir = true

if(podeDirigir) {
    console.log("ela pode dirigir")
}

const saldoEmConta = 1

if(!saldoEmConta){
    console.log('não tem saldo!')
}

const boolString = "boolean com string"


//força o valor pra boolean
console.log('boolString', !!boolString)

//negação
console.log('negacao', !boolString)

//negação + forçar o valor
console.log("negacao + forçar a bool",
    ! (!!boolString)
)