"use strict";
function somar(num1, num2) {
    return num1 + num2;
}
console.log(somar(5, 2));
function falarNome(nome) {
    return console.log('ola ' + nome);
}
falarNome('ruan');
function areaTriangulo(base, altura) {
    return base * altura / 2;
}
console.log(areaTriangulo(7, 7));
function caixaAlta(substantivo) {
    return substantivo.toLocaleUpperCase();
}
console.log(caixaAlta('ruan rickelme'));
function arredondar(numero) {
    return numero.toPrecision(2);
}
console.log(arredondar(4.343533));
function dizerTipo(item) {
    return typeof (item);
}
console.log(dizerTipo(5));
function desafioDois(item) {
    let novoItem = item.toString();
    return novoItem;
}
console.log('o numero do desafio 2 é:' + desafioDois(10));
function tiposArray() {
    //o tipo any diz que a (variavel/parametro) pode receber qualquer tipo de dado, ou seja, any lembra a tipagem fraca
    let listaLetras = ['frutas', 'vegatais', 'hortalicas', 'verduras', 'grãos'];
    let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let listaBool = [true, false, false, false, true];
    return console.log(listaLetras, listaNumeros, listaBool);
}
tiposArray();
