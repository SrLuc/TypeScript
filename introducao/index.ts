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
console.log(dizerTipo(5));

function desafioDois(item: number): string {
	let novoItem = item.toString();
	return novoItem;
}
console.log("o numero do desafio 2 é:" + desafioDois(10));

function tiposArray(): void {
	//o tipo any diz que a (variavel/parametro) pode receber qualquer tipo de dado, ou seja, any lembra a tipagem fraca
	let listaLetras: string[] = [
		"frutas",
		"vegatais",
		"hortalicas",
		"verduras",
		"grãos",
	];
	let listaNumeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	let listaBool: boolean[] = [true, false, false, false, true];
	return console.log(listaLetras, listaNumeros, listaBool);
}
tiposArray();

function cordenadas(valores: { x: number; y: number }) {
	console.log("valor x = " + valores.x + "valor y = " + valores.y);
}
const valor = { x: 343, y: 135 };
console.log(valor);

function usuario(nome: string, email?: string) {
	console.log("ola " + nome);
	if (email != undefined) {
		console.log("ola " + nome + " seu email é " + email);
	}
}
usuario('ruan','gatinho003@typescript.dot');
