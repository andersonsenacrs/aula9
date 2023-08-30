const listaDeCompras = ["Abacate", "Banana", "Tomate"]
const segundoItem = listaDeCompras[2] // "Tomate"
console.log (segundoItem)


// Exercicio 3 Array's

const listaDeCaes = ["vira lata", "pastor alemão", "burdog", "fila", "lessie"]
const cao = Number(prompt("Digite um número de 0 a 4"))
console.log(listaDeCaes[cao])


// Propriedade length - A propriedade length nos diz qual é a quantidade de itens de um array

const pokemon = ["bulbasauro", "squirtle", "charmander"]
console.log(pokemon.length) // 3


// Método includes(elemento) - O método includes(elemento) determina se um array contém um determinado elemento, retornando true ou false


const seriesBoas = ["Breaking Bad","Brooklyn Nine-nine"]
seriesBoas.includes("Breaking Bad") // true
seriesBoas.includes("Game of Thrones") // false

// Método push(elemento) - adiciona um ou mais elementos ao final de um array

const numeros = [1, 2, 3]
numeros.push(4)
console.log(numeros) // [1, 2, 3, 4]
numeros.push(5, 6, 7)
console.log(numeros) // [1, 2, 3, 4, 5, 6, 7]

// Método pop - remove o ultimo elemento de um array

const meusPeixes = ["palhaço","mandarim","esturjão"]
meusPeixes.pop()
console.log(meusPeixes) // ["palhaço","mandarim"]


// Método splice(i, n)

const letras = ["A","B","C","D","E","F","G","H"]
// índices (i)   0   1   2   3   4   5   6   7

letras.splice(2, 1)
// letras =  ["A","B","D","E","F","G","H"]
// índices (i) 0   1   2   3   4   5   6

letras.splice(3, 2) // letras = ["A","B","D","G","H"]


// exercicio 4

const valor  = [1, 2, 3, 4, 5, 6]
valor.push(7)
console.log(valor) // [1, 2, 3, 4, 5, 6,]
valor.push(1, 2, 3, 4, 5, 6,)
console.log(valor)

