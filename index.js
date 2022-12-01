//
const frutas = ["Banana", "Morango", "Laranja", "Maçã"];
// Breakpoint no let, teste o debug
for(let i = 0 ; i < frutas.length ; i++){
    let fruta = frutas[i];

    console.log("i: ", i, "Fruta: ", fruta);
}


const calculadora = require('./calculadora');

// Breakpoint, ver o step into que vai para o modulo
const res1 = calculadora.somar(1, 3);
console.log("Soma: ", res1, " Sub: ", calculadora.subtrair(5, 2));