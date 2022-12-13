// 1 - type guard
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function somarNumeros(x, y) {
    if (typeof x === "string" && typeof y === "string") {
        var resultado = parseFloat(x) + parseFloat(y);
        console.log(resultado);
    }
    else if (typeof x === "number" && typeof y === "number") {
        var resultado = x + y;
        console.log(resultado);
    }
    else {
        console.log("Impossível realizar a operação");
    }
}
somarNumeros(2, 5);
somarNumeros("2", "6");
somarNumeros(1, "4");
// checando se valor e operação existe
function operarNumeros(numero, operacao) {
    if (operacao === "+") {
        var somatorio = numero.reduce(function (i, valorAtual) { return i + valorAtual; });
        console.log(somatorio);
    }
    else if (operacao === "-") {
        var redutorio = numero.reduce(function (valorAtual, i) { return i - valorAtual; });
        console.log(redutorio);
    }
    else if (operacao === "*") {
        var multiplicatorio = numero.reduce(function (i, valorTotal) { return i * valorTotal; });
        console.log(multiplicatorio);
    }
    else {
        console.log("Por favor insira uma Operação Disponivel (+ ou - ou *)");
    }
}
operarNumeros([1, 2, 3]);
operarNumeros([2, 3, 1], "+");
operarNumeros([1, 4], "-");
operarNumeros([4, 4, 2], "*");
//exercicio de logica de programação
function exibirData(dia, mes, ano) {
    switch (mes) {
        case 1 || "1":
            mes = "janeiro";
            break;
        case 2 || "2":
            mes = "fevereiro";
            break;
        case 3 || "3":
            mes = "março";
            break;
        case 4 || "4":
            mes = "abril";
            break;
        case 5 || "5":
            mes = "maio";
            break;
        case 6 || "6":
            mes = "junho";
            break;
        case 7 || "7":
            mes = "julho";
            break;
        case 8 || "8":
            mes = "agosto";
            break;
        case 9 || "9":
            mes = "setembro";
            break;
        case 10 || "10":
            mes = "outubro";
            break;
        case 11 || "11":
            mes = "novembro";
            break;
        case 12 || "12":
            mes = "dezembro";
            break;
        default:
            return "mes inválido";
    }
    dia >= 1 || dia <= 31
        ? console.log("Hoje é Dia " + dia + " Do mes " + mes + " do ano de " + ano)
        : "";
}
exibirData(12, 12, 2022);
//uso do instaceof
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name, email) {
        return _super.call(this, name, email) || this;
    }
    return SuperUser;
}(User));
var ruan = new User("Ruan", "ruandev@code.blitz");
var paulo = new SuperUser("paulo", "paulo@go.net");
function chamarPessoa(user) {
    if (user instanceof SuperUser) {
        console.log("ola, seja bem vindo " + user.name);
    }
    else if (user instanceof User) {
        console.log("ola " + user.email + ", seja bem vindo " + user.name);
    }
}
chamarPessoa(ruan);
chamarPessoa(paulo);
//desafio de logica de programação posto de gasolina para comprar alcool com descontos
function comprarAlcool(litros) {
    var alcool = 1.9;
    var valorTot = litros * alcool;
    console.log("Quantidade de litros:" + litros + ", valor da Compra do alcool: " + valorTot);
    if (litros <= 25) {
        var desconto = valorTot - alcool * 0.98 * litros;
        valorTot -= desconto;
        console.log("Valor da compra com desconto " + valorTot + " de 2%/L");
    }
    else if (litros > 25) {
        var desconto = valorTot - alcool * 0.96 * litros;
        valorTot -= desconto;
        console.log("Valor da compra com desconto " + valorTot + " de 4%/L");
    }
}
comprarAlcool(55);
//desafio de logica de programação posto de gasolina para comprar gasolina com descontos
function comprarGasolina(litros) {
    var gasolina = 2.7;
    var valorTot = litros * gasolina;
    console.log("Quantidade de litros:" + litros + ", valor da Compra da gasolina: " + valorTot);
    if (litros <= 25) {
        var desconto = valorTot - gasolina * 0.97 * litros;
        valorTot -= desconto;
        console.log("Valor da compra com desconto " + valorTot + " de 3%/L");
    }
    else if (litros > 25) {
        var desconto = valorTot - gasolina * 0.95 * litros;
        valorTot -= desconto;
        console.log("Valor da compra com desconto " + valorTot + " de 5%/L");
    }
}
comprarGasolina(10);
