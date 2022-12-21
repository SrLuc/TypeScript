function somar(num1: number, num2: number): number {
	return num1 + num2;
}
console.log(somar(5, 2));

function falarNome(nome: unknown) {
	return console.log("ola " + nome);
}
falarNome("ruan");

function areaTriangulo(base: number, altura: number): number {
	return (base * altura) / 2;
}
console.log(areaTriangulo(7, 7));

function caixaAlta(substantivo: string): string {
	return substantivo.toLocaleUpperCase();
}
console.log(caixaAlta("ruan rickelme"));

function arredondar(numero: number): string {
	return numero.toPrecision(2);
}
console.log(arredondar(4.343533));

function dizerTipo(item: unknown): unknown {
	return typeof item;
}
console.log(dizerTipo("5"));

function desafioDois(item: number): string {
	let novoItem = item.toString();
	return novoItem;
}
console.log("o numero do desafio 2 é:" + desafioDois(10));

//arrays types

function tiposArray(): void {
	//o tipo any diz que a (variavel/parametro) pode receber qualquer tipo de dado, ou seja, any lembra a tipagem fraca
	let listaLetras: string[] = [
		"frutas",
		"vegetais",
		"hortalicas",
		"verduras",
		"grãos",
	];
	let listaNumeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	let listaBool: boolean[] = [true, false, false, false, true];
	return console.log(listaLetras, listaNumeros, listaBool);
}
tiposArray();

//optional type

function usuario(nome: string, email?: string) {
	email != undefined
		? console.log("ola " + nome + " seu email é " + email)
		: console.log("ola " + nome);
}
usuario("ruan", "gatinho003@typescript.dot");
usuario("bobinho");

//type alias + union type
//type ID = type alias   number | string = union types
type ID = number | string;
//type ID = boolean
function uniao(element: ID) {
	return console.log("tipo do elemento: " + typeof element);
}
uniao(2);
uniao("2");

//interface type é semelhante ao type alias

interface localizacao {
	x: number;
	y: number;
}

const cordenada: localizacao = {
	x: 10,
	y: 15,
};

function localizar(lugar: localizacao) {
	return console.log(lugar);
}

localizar(cordenada);

//LITERAL TYPE restringe os tipos de dados a valores e não apenas tipos
function place(direction: "left" | "right" | "front" | "back") {
	return direction;
}

console.log("direction is " + place("left"));
console.log("direction is " + place("right"));
console.log("direction is " + place("front"));
console.log("direction is " + place("back"));

//encerrando modulo 1, 2 e 3
