function minhaFuncao1(parametro){
    return `aeee`
}

// funcao anonima
const minhaFuncao2 = function(parametro){
    return `aeee ${parametro}`
}

// arrow function
const minhaFuncao3 = (parametro) => {
    return `eae ${parametro}`
}

//se tiver apenas um parametro na arrow function, nem precisa do parenteses
const minhaFuncao4 = parametro => `aee ${parametro}`


const objeto = { 
    minhaFuncao: parametro1 => `aeee ${parametro1}`
}

objeto.minhaFuncao('teste')

const objeto2 = {
    minhaFuncao(parametro){
        return `Olá, ${parametro}`
    }
}

console.log(objeto2.minhaFuncao('Andreza'))

