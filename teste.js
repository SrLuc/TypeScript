"use strict";
/*
    primeiramente lembrar de iniciar o json com o comando  tsc --init
    lembrar de usasr o comando  node nomedoarquivo.js
*/
//string type
let nomeCompleto = "Ruan Rickelme Lucena Ramos";
let nomeEmpresa = "Amaral Ltda";
let minhaIdade = 22;
//array type
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
//Array type object
let frutas = ["morango", "abacaxi", "laranja", "maçã", "limão"];
//array functions
frutas.push("maracuja");
frutas.length;
//array spread operator
let listaNumeros = [1, 2, 3, 4, 5, 6];
listaNumeros = [...listaNumeros, 7, 8, 9, 10];
//array com laço de iteração
let cachorrosArray = ["belga", "poodle", "pitbull"];
function funcaoCachorros(cachorros) {
    for (let index = 0; index < cachorros.length; index++) {
        console.log(cachorrosArray[index]);
    }
}
//funcaoCachorros(cachorrosArray);
let quitandaArray = ['coentro, mandioca', 'banana', 'batata', 'tomate', 'alface', 'cebola'];
function chamarQuitandaArray(item) {
    for (let i = 0; i < quitandaArray.length; i++) {
        console.log(item[i]);
    }
}
//chamarQuitandaArray(quitandaArray);
//array operation functions
const trans = quitandaArray.map(element => element.toUpperCase());
console.log(trans);
//object type
let car;
car = { name: "Subaro", price: 120.0, year: "2022" };
let device;
(device = {
    serie: "J8",
    id: 65165,
    model: "Samsumg",
    number1: "+55988745214",
    number2: "+558199874517",
}),
    {
        serie: "XR",
        id: 34322,
        model: "Iphone",
        number1: "+55523533423",
        number2: "+5582454252537",
    };
//console.log('the ID ' + device.id + ' is Series : ' + device.serie);
//function Type
function multiplicar(num1, num2) {
    let result = num1 * num2;
    return console.log(result);
}
function walk(direciton) {
    direciton = direciton;
    console.log("walking to " + direciton);
}
//Boolean, boolean type
let tarefaConcluida = true;
let tarefaPendente = false;
//console.log(tarefaConcluida);
//number type (reis, decimais, hexadecimal. octal, binarty and NaN)
let num1 = 14;
let num2 = 14.0;
let num3 = 0x373cf;
let num4 = 0o377;
let num5 = 0b111001;
//bigint type (numeros inteiros grandes )
//nao funciona antes da versao de 2020
let big1 = 324235425452452452455451123423n;
//typeof function
typeof (num1);
//console.log(typeof(num1));
