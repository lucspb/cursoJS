class Heroi{
    atacar(){
        console.log(`atacou!`)
    }
    defender(){
        console.log(`defendeu`)
    }
}

const heroi = new Heroi()
heroi.atacar()
heroi.defender()

// usando construtor!
class Heroi2 {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    atacar(){
        console.log(`${this.nome} atacou`)
    }
    defender(){
        console.log(`${this.nome} defendeu`)
    }
}

const heroi2 = new Heroi2("Spider-Man", 15)

heroi2.atacar()

// usando static (apenas pra valores que não se alteram)

class Heroi3{
    static obterAnoNascimento(idade){
        return 2022 - idade
    }
}

const anoNascimento = Heroi3.obterAnoNascimento(26)
console.log(`o ano de nascimento é ${anoNascimento}`)