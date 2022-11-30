"use strict";
/*
    primeiramente lembrar de iniciar o json com o comando  tsc --init
    lembrar de usasr o comando  node nomedoarquivo.js
*/
//String type
let nomeCompleto = "Ruan Rickelme Lucena Ramos";
console.log(nomeCompleto);
//Array type
let componentes = [
    "Nome",
    "Idade",
    "CPF",
    "DataNascimento",
    "Endereço",
];
console.log(componentes);
//Object type
let car;
car = { name: 'Subaro', price: 120.000, year: '2022' };
console.log(car);
//Function Type
function multiplicar(num1, num2) {
    let result = num1 * num2;
    return console.log(result);
}
multiplicar(2, 4);
