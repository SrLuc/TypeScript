//desafio de logica de programação financeira
function criteirosEmprestimos(
	renda: number,
	totalEmprestimo: number,
	Vprestacao: number
): void {
	if (totalEmprestimo > renda * 10) {
		console.log(
			"Emprestimo não concedido devido a valor total ultrapassar taxa fixa multiplicadora de renda"
		);
	} else if (Vprestacao <= renda * 0.3) {
		console.log(
			"Emprestimo não concedido devido a valor da prestação ser menor que 30% da renda mensal"
		);
	} else {
		console.log(`Emprestimo concedido no valor de :${totalEmprestimo}`);
		console.log(
			`Quantidade de Parcelas a serem Pagas: ${(
				totalEmprestimo / Vprestacao
			).toPrecision(2)} Parcelas de  R\$${Vprestacao}`
		);
	}
}

//desafio logica de programação da fazenda
function pulverizar(acre: number, tipoPul: number) {
	let desconto: number = 0.95;
	switch (tipoPul) {
		case 1:
			var valorCompra: number = acre * 50;
			console.log(
				`A de compra de ${acre} pulverizadores de Ervas Daninhas custa R$${valorCompra}`
			);
			if (acre >= 1000) {
				console.log(
					`Quantidade supeior ou igual a 1000 hectares, valor com desconto: ${(
						valorCompra * desconto
					).toPrecision(7)}`
				);
			}
			break;

		case 2:
			var valorCompra: number = acre * 100;
			console.log(
				`A de compra de ${acre} pulverizadores de Gafanhotos custa R$${valorCompra}`
			);
			if (acre >= 1000) {
				console.log(
					`Quantidade supeior ou igual a 1000 hectares, valor com desconto: ${(
						valorCompra * desconto
					).toPrecision(7)}`
				);
			}
			break;

		case 3:
			var valorCompra: number = acre * 150;
			console.log(
				`A de compra de ${acre} pulverizadores de Brocas custa R$${valorCompra}`
			);
			if (acre >= 1000) {
				console.log(
					`Quantidade supeior ou igual a 1000 hectares, valor com desconto: ${(
						valorCompra * desconto
					).toPrecision(7)}`
				);
			}
			break;

		case 4:
			var valorCompra: number = acre * 250;
			console.log(
				`A de compra de ${acre} pulverizadores de Roedores custa R$${valorCompra}`
			);
			if (acre >= 1000) {
				console.log(
					`Quantidade supeior ou igual a 1000 hectares, valor com desconto: ${(
						valorCompra * desconto
					).toPrecision(7)}`
				);
			}
			break;
	}
}

//desafio logica de programação das notas do aluno
type exames = [number, number, number, number, number];

function avaliar(notas: exames) {
	let resultado: number = 0;
	for (let i = 0; i < 5; i++) {
		console.log(`Notas por Unidade : ${notas[i]}`);
		resultado += notas[i];
	}
	console.log(`Media do Aluno ${resultado / 5}`);
}
const provaFabricio: exames = [2, 5, 2, 3, 4];
//avaliar(provaFabricio);

//desafio logica de programaçaõ das notas do aluno 2
function avaliarAluno(...notas: number[]) {
	let resultado = notas.reduce((nota, somatorio) => somatorio + nota);
	console.log(`Media do Aluno: ${resultado / notas.length}`);
}
//avaliarAluno(2, 3, 4, 5, 1);

//exameple rest operator na função
function somarTudo(...n: number[]) {
	return n.reduce((elemento, somatorio) => somatorio + elemento);
}

//rest operator na função
function juntarLetras(...s: string[]) {
	return s.reduce((elemento, juntar) => elemento + juntar);
}

//destructing operator na função
function mostrarDetalhesProduto({
	nome,
	preco,
}: {
	nome: string;
	preco: number;
}) {
	return `o produto ${nome} custa ${preco}`;
}
const camisa = { nome: "polo lacoste verde", preco: 189.99 };
//console.log(mostrarDetalhesProduto(camisa));


//desafio de logica de programação do peso ideal
interface PesoIdeal {
	altura: number;
	masculino: boolean;
}

function calcularPesoIdeal(dado: PesoIdeal):void {
	let idealHomen = (72.2 * dado.altura - 58).toPrecision(4);
	let idealMulher = (62.1 * dado.altura - 44.7).toPrecision(4);

	dado.masculino == true
		? console.log(`Peso ideal para sua altura ${idealHomen}`)
		: console.log(`Peso ideal para sua altura ${idealMulher}`);
}

const ruanRickelme:PesoIdeal = {altura:1.65, masculino:true};
const mariaDuarda:PesoIdeal = {altura:1.60, masculino:false};

calcularPesoIdeal(ruanRickelme);
calcularPesoIdeal(mariaDuarda)