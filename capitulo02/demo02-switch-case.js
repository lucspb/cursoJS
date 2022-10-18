const readLine = require('readline')
const terminal = readLine.createInterface({
    // definir o modo de entrada via terminal
    input: process.stdin,
    // saída via terminal
    output: process.stdout
})


const textoMenu = `Olá seja bem vindo ao sistema! 
Digite 1 para acessar o Menu Inicial, 
Digite 2 para acessar o Menu de Herois
Digite 3 para acessar o Menu de Guerreiras
Digite 0 para sair`

// console.log('textoMenu', textoMenu)
// const opcao = 5

// switch(opcao){
//     case 1:
//         console.log('pressionou 1')
//         break;
//     case 2:
//         console.log('pressionou 2')
//         break;
//     case 3:
//         console.log('pressionou 3')
//         break;
//     case 0:
//         console.log('pressionou 0')
//         break;
//     default:
//         console.log('opção inválida')
//         break;
// }


// terminal.question('Qual é o seu nome?', (msg) => {
//     console.log('você escreveu', msg)
//     terminal.close()
// })

const questoes = {
    menuInicial: {
        texto: textoMenu,
        fn: menuInicial
    },
    opcao1: {
        texto: 'SUBMENU!, pressione enter para selecionar mais opções',
        fn: opcao1
    }
}

function opcao1(msg){
    console.log('não há mais opções!')
    terminal.close()
}

function menuInicial(msg){
    const opcao = Number(msg)
    if(isNaN(opcao)){
        throw new Error('Não é um número', msg)
    }
    switch(opcao){
        case 0:
            console.log('Saindo...')
            terminal.close()
            break;
        case 1:
            console.log('Menu Inicial')
            terminal.question(
                questoes.opcao1.texto,
                questoes.opcao1.fn
            )
            break;
        default:
            console.log('opção inválida')
            terminal.close()
            break;
    }
} 

terminal.question(
    questoes.menuInicial.texto,
    questoes.menuInicial.fn
)