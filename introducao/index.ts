

function somar(num1:number, num2:number) {
    return console.log(num1 + num2);;
}   somar(1,2);

function falarNome(nome:unknown){
    return console.log('ola ' + nome);
}   falarNome('ruan');

function areaTriangulo(base:number, altura:number){
    return console.log(base*altura/2);
}   areaTriangulo(7,7);

/*  Comando para compilar ts => js
    node index.js
    tsc index.ts
*/
