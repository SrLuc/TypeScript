// 1 - type guard
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
        console.log("Por favor insira uma Operação Disponivel (+ ou -)");
    }
}
operarNumeros([1, 2, 3]);
operarNumeros([2, 3, 1], "+");
operarNumeros([1, 4], "-");
operarNumeros([4, 4, 2], "*");
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
