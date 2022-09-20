const pessoa = {
    // criamos a variavel com _ pra identificar que é uma variavel privada
    _nome : '',
    _idade: 26,

    get nome(){
        return this._nome
    },
    set nome(value){
        this._nome = value.toUpperCase();
    },

    get podeDirigir(){
        return this._idade > 18
    },

    get idade(){
        return this._idade
    },

    set idade(i){
        this._idade = i
    }

}

pessoa.nome = "lucas estanislau"
pessoa.idade = 15
console.log( pessoa.nome)
console.log(pessoa.idade)

console.log(pessoa.podeDirigir)