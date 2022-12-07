function somar(num1:number, num2:number) {
    return console.log(num1 + num2);;
}   somar(1,2);

function falarNome(nome:unknown){
    return console.log('ola ' + nome);
}   falarNome('ruan');

function areaTriangulo(base:number, altura:number){
    return console.log(base*altura/2);
}   areaTriangulo(7,7);

function caixaAlta(substantivo:string){
    return console.log(substantivo.toLocaleUpperCase());
}   caixaAlta('ruan rickelme');

function arredondar(numero:number){
    return console.log(numero.toPrecision(2));
}   arredondar(4.343533);

function dizerTipo(item:string){
    return console.log(typeof(item));
}   dizerTipo('5');

/*  Comando para compilar ts => js
    node index.js
    tsc index.ts
*/
