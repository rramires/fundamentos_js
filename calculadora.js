function somar(valor1, valor2){
    return valor1 + valor2;
}

function subtrair(valor1, valor2){
    return valor1 - valor2;
}
/** 
 * module.exports, torna as funções visiveis em outros locais
 * em que esse modulo for importado.
 * <=> ao public no java
 */ 
module.exports = {somar, 
                  subtrair}