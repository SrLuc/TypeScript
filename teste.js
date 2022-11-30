"use strict";
/*
    primeiramente lembrar de iniciar o json com o comando  tsc --init
    lembrar de usasr o comando  node nomedoarquivo.js
*/
//String type
let nomeCompleto = "Ruan Rickelme Lucena Ramos";
let nomeEmpresa = "Amaral Ltda";
let minhaIdade = 22;
//Array type
let componentes = [
    "Nome",
    "Idade",
    "CPF",
    "DataNascimento",
    "Endereço",
];
let cadastrados = [
    "ruan rickelme",
    "maria eduarda",
    "alvaro victor",
    "marcelo telles",
    "alexandra fernandes",
    "vitoria riveiro",
];
//Object type
let car;
car = { name: "Subaro", price: 120.0, year: "2022" };
let device;
device =
    { serie: 'J8', id: 65165, model: 'Samsumg', number1: '+55988745214', number2: '+558199874517' },
    { serie: 'XR', id: 34322, model: 'Iphone', number1: '+55523533423', number2: '+5582454252537' };
console.log('the ID ' + device.id + ' is Series : ' + device.serie);
//Function Type
function multiplicar(num1, num2) {
    let result = num1 * num2;
    return console.log(result);
}
function walk(direciton) {
    direciton = direciton;
    console.log('walking to ' + direciton);
}
