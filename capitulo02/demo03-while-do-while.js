//enquanto não mudar, não para!

// let parada = true
// let contador = 0
// while(parada){
//     parada = contador < 10
//     if(contador % 2 === 0){
//         console.log('par', contador)
//         console.log(parada)
//     } 
//     contador +=1
// }


// //roda a primeira vez e testa a variavel depois
// do{
//     console.log('só uma vez!, pois parada é', parada)
// } while(parada)

// let contador = 10
// while(contador > 0 ){
//     // nao deve rodar
//     contador -=1
//     console.log('o contador é', contador)
// }

const listaDeTarefas = [

    { tarefa: 'lavar o chão', id: 1},
    
    { tarefa: 'lavar a louça', id: 2},
    
    { tarefa: 'arrumar o quarto', id: 3},
    
    ]

    let indice = 0
while(indice < listaDeTarefas.length) {

indice++

console.log(listaDeTarefas[indice].tarefa)

}