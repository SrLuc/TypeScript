//desafio de logica de programação financeira
function criteirosEmprestimos(renda, totalEmprestimo, Vprestacao) {
    if (totalEmprestimo > renda * 10) {
        console.log("Emprestimo não concedido devido a valor total ultrapassar taxa fixa multiplicadora de renda");
    }
    else if (Vprestacao <= renda * 0.3) {
        console.log("Emprestimo não concedido devido a valor da prestação ser menor que 30% da renda mensal");
    }
    else {
        console.log("Emprestimo concedido no valor de :" + totalEmprestimo);
        console.log("Quantidade de Parcelas a serem Pagas: " + (totalEmprestimo / Vprestacao).toPrecision(2) + " Parcelas de  R$" + Vprestacao);
    }
}
//desafio logica de programação da fazenda
function pulverizar(acre, tipoPul) {
    var desconto = 0.95;
    switch (tipoPul) {
        case 1:
            var valorCompra = acre * 50;
            console.log("A de compra de " + acre + " pulverizadores de Ervas Daninhas custa R$" + valorCompra);
            if (acre >= 1000) {
                console.log("Quantidade supeior ou igual a 1000 hectares, valor com desconto: " + (valorCompra * desconto).toPrecision(7));
            }
            break;
        case 2:
            var valorCompra = acre * 100;
            console.log("A de compra de " + acre + " pulverizadores de Gafanhotos custa R$" + valorCompra);
            if (acre >= 1000) {
                console.log("Quantidade supeior ou igual a 1000 hectares, valor com desconto: " + (valorCompra * desconto).toPrecision(7));
            }
            break;
        case 3:
            var valorCompra = acre * 150;
            console.log("A de compra de " + acre + " pulverizadores de Brocas custa R$" + valorCompra);
            if (acre >= 1000) {
                console.log("Quantidade supeior ou igual a 1000 hectares, valor com desconto: " + (valorCompra * desconto).toPrecision(7));
            }
            break;
        case 4:
            var valorCompra = acre * 250;
            console.log("A de compra de " + acre + " pulverizadores de Roedores custa R$" + valorCompra);
            if (acre >= 1000) {
                console.log("Quantidade supeior ou igual a 1000 hectares, valor com desconto: " + (valorCompra * desconto).toPrecision(7));
            }
            break;
    }
}
function avaliar(notas) {
    var resultado = 0;
    for (var i = 0; i < 5; i++) {
        console.log("Notas por Unidade : " + notas[i]);
        resultado += notas[i];
    }
    console.log("Media do Aluno " + resultado / 5);
}
var provaFabricio = [2, 5, 2, 3, 4];
//avaliar(provaFabricio);
//desafio logica de programaçaõ das notas do aluno 2
function avaliarAluno() {
    var notas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        notas[_i] = arguments[_i];
    }
    var resultado = notas.reduce(function (nota, somatorio) { return somatorio + nota; });
    console.log("Media do Aluno: " + resultado / notas.length);
}
//avaliarAluno(2, 3, 4, 5, 1);
//exameple rest operator na função
function somarTudo() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n.reduce(function (elemento, somatorio) { return somatorio + elemento; });
}
//rest operator na função
function juntarLetras() {
    var s = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        s[_i] = arguments[_i];
    }
    return s.reduce(function (elemento, juntar) { return elemento + juntar; });
}
//destructing operator na função
function mostrarDetalhesProduto(_a) {
    var nome = _a.nome, preco = _a.preco;
    return "o produto " + nome + " custa " + preco;
}
var camisa = { nome: "polo lacoste verde", preco: 189.99 };
function calcularPesoIdeal(dado) {
    var idealHomen = (72.2 * dado.altura - 58).toPrecision(4);
    var idealMulher = (62.1 * dado.altura - 44.7).toPrecision(4);
    dado.masculino == true
        ? console.log("Peso ideal para sua altura " + idealHomen)
        : console.log("Peso ideal para sua altura " + idealMulher);
}
var ruanRickelme = { altura: 1.65, masculino: true };
var mariaDuarda = { altura: 1.60, masculino: false };
calcularPesoIdeal(ruanRickelme);
calcularPesoIdeal(mariaDuarda);
