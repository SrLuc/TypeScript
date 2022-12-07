function somar(num1, num2) {
    return console.log(num1 + num2);
    ;
}
somar(1, 2);
function falarNome(nome) {
    return console.log('ola ' + nome);
}
falarNome('ruan');
function areaTriangulo(base, altura) {
    return console.log(base * altura / 2);
}
areaTriangulo(7, 7);
function caixaAlta(substantivo) {
    return console.log(substantivo.toLocaleUpperCase());
}
caixaAlta('ruan rickelme');
function arredondar(numero) {
    return console.log(numero.toPrecision(2));
}
arredondar(4.343533);
function dizerTipo(item) {
    return console.log(typeof (item));
}
dizerTipo('5', 5, true);
/*  Comando para compilar ts => js
    node index.js
    tsc index.ts
*/
