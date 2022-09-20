//meses começam do zero
const dataAniversario = new Date(2023, 0, 1)
console.log(dataAniversario)

const primeriaDataJS = new Date(0)
console.log(primeriaDataJS.getTime())

//hoje - time br
const hoje = new Date()
console.log(hoje.toString())
console.log(hoje.toLocaleDateString())

//formato global recomendado
console.log(hoje.toISOString())

// alterar data
const dia = hoje.getDate()
hoje.setDate(dia + 5) // acrescentando 5 dias
hoje.setHours(10, 30, 0) // (horas, minutos, segundos)
console.log(`
    Dia: ${hoje.getDate() }
    Mes: ${hoje.getMonth()}
    Ano: ${hoje.getFullYear()}
    Hora: ${hoje.getHours()}
    Minuto: ${hoje.getMinutes()}
    Segundos: ${hoje.getSeconds()}
    `)

// comparar duas datas usando comparadores
console.log(
    new Date(2020, 1, 20) > new Date(2022, 1, 30)
)