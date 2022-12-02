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
let quitandaArray = [
    "coentro, mandioca",
    "banana",
    "batata",
    "tomate",
    "alface",
    "cebola",
];
function chamarQuitandaArray(item) {
    for (let i = 0; i < quitandaArray.length; i++) {
        console.log(item[i]);
    }
}
//chamarQuitandaArray(quitandaArray);
//array operation functions
const trans = quitandaArray.map((element) => element.toUpperCase());
//console.log(trans);
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
typeof num1;
//console.log(typeof(num1));
//tuple Type - deve seguir a ordem que está definida na declaração
let tupla;
tupla = ["ruan", 22, true];
//tuple heterogen
let listFruits = [
    "orange",
    "pineapple",
    "apple",
    "grape",
    "lemon",
    "strawberryes",
    "banana",
    "orange",
];
let listFruits2 = [5, true, ...listFruits];
//enum type
var Langauge;
(function (Langauge) {
    Langauge[Langauge["Php"] = 0] = "Php";
    Langauge[Langauge["Ruby"] = 1] = "Ruby";
    Langauge[Langauge["Csharp"] = 2] = "Csharp";
    Langauge[Langauge["Javascript"] = 3] = "Javascript";
    Langauge[Langauge["Typescript"] = 4] = "Typescript";
})(Langauge || (Langauge = {})); //console.log(Langauge.Csharp);
var Idioms;
(function (Idioms) {
    Idioms["Portugues"] = "PT-BR";
    Idioms["English"] = "EN";
    Idioms["Espanhol"] = "ES";
    Idioms["Frances"] = "FR";
})(Idioms || (Idioms = {})); //console.log(Idioms);
var Taks;
(function (Taks) {
    Taks[Taks["Todo"] = 0] = "Todo";
    Taks[Taks["Doing"] = 1] = "Doing";
    Taks[Taks["Done"] = 2] = "Done";
})(Taks || (Taks = {}));
const completeTaks = {
    id: 0,
    status: Taks.Todo,
    description: "Taks To Do !",
};
if (completeTaks.id == Taks.Todo) {
    //console.log(completeTaks.description);
}
else {
    //console.log("Task complete!");
}
//any type  (padrinho dos tipos, ou seja, any é default do typescript, evitar o máximo usar o any// hirarquia de tipos)
let qualquerCoisa = 888;
let qualquerCoisa2 = "oito oito oito";
let qualquerCoisa3 = qualquerCoisa + qualquerCoisa2;
//console.log(qualquerCoisa3);
//unknow type (não sabe qual tipo definir, evitar problemas no codigo, any !== unknow)
let naoSei = 1;
let naoSei2 = [];
let naoSei3 = "ola";
let naoSei4 = {};
//console.log(typeof(naoSei));
//console.log(typeof(naoSei2));
//console.log(typeof(naoSei3));
//console.log(typeof(naoSei4));
//void type  (oposto do tipo any e é a ausência de qualquer tipo)
function exemploFuncao() { }
;
const exemploFuncao2 = () => { };
const logErrorExample = (errorMensage) => { console.log(errorMensage); };
//esta dando erro por conta de uma regra do json que precisa ser desabilitada => stricksnullchecks
let variavel;
variavel = null;
variavel = undefined;
//variavel = 1;
//variavel = 'ola mundo';
//null type (variavel que o valor é vazio ou inexistente ou seja null);
let variavelTestenulc = null;
//console.log(typeof(variavelTestenulc));
//undefined type (representa variaveis nao inicializadas, nao definidas)
let varialtesteundeefined;
//console.log(typeof(varialtesteundeefined));
