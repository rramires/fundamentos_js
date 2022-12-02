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

/**
 * Sincrono = na sequencia, uma coisa apos a outra 
 * Assincrono = eventLoop cria uma thread, 
 * fica livre pra atender/fazer outras coisas 
 * qdo a thread acabar avisa o eventLoop que responde
 */
// Ex: acesso ao disco é lento
/*
const fs = require('fs');
// 1 - eventLoop abre uma thread
fs.writeFile('teste1.txt', 'Olá arquivo!', () => {
    // 3 - thread avisa/responde o eventLoop que acabou
    console.log('Escreveu no disco');
});
// 2 - eventLoop livre processa outra coisa
console.log('Outra coisa leve...');
*/


/**
 * Evitando o "Callback Hell" = 
 * um monte de funcoes aninhadas
 * use promises com o .then
 */
// *** Usar o fs com promises
const fs2 = require('fs').promises;
// 1 - eventLoop abre uma thread
fs2.writeFile('teste.txt', 'Primeiro texto...\n')
    .then(() => {
        // 3 - thread avisa/responde o eventLoop que acabou a thread do writeFile
        console.log('Escreveu no disco');
        // 4 - caso necessite aninhar outro processo, abre outra thread
        return fs2.appendFile('teste.txt', 'Segundo texto!')
    })
    .then(() => {
        // 5 - thread avisa/responde o eventLoop que acabou o a thread do appendFile
        console.log('Adicinou no arquivo');
    })
    // para capturar possiveis erros
    .catch(er => {
    console.log(er);
    });
// 2 - eventLoop livre processa outra coisa
console.log('Outra coisa leve 2...');

