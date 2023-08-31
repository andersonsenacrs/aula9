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
valor.splice (3, 2)
console.log(valor.length)

// aula 10



// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida imprima//

const nome = anderson;
const email = anderson.hotmail.com;
const frase = " O e-mail " + email + "foi cadastrado com sucesso. Seja bem-vindo(a)" + nome

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

// a) Imprima no console o array completo

//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.

//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista

const listaDecomidas = ["churrasco", "lasanha", "Peixe frito", "frango", "bife"]
const comidas = Number(prompt("Digite um número de 0 a 4"))
console.log(listaDecomidas[comidas])

console.log("Essas são minhas comidas preferidas")
console.log(listaDecomidas[0]);
console.log(listaDecomidas[1]);
console.log(listaDecomidas[2]);
console.log(listaDecomidas[3]);
console.log(listaDecomidas[4]);

