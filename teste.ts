/*
    primeiramente lembrar de iniciar o json com o comando  tsc --init  
    lembrar de usasr o comando  node nomedoarquivo.js
*/

//string type
let nomeCompleto: string = "Ruan Rickelme Lucena Ramos";
let nomeEmpresa: string = "Amaral Ltda";
let minhaIdade: number = 22;

//array type
let componentes: string[] = [
	"Nome",
	"Idade",
	"CPF",
	"DataNascimento",
	"Endereço",
];

let cadastrados: string[] = [
	"ruan rickelme",
	"maria eduarda",
	"alvaro victor",
	"marcelo telles",
	"alexandra fernandes",
	"vitoria riveiro",
];

//Array type object
let frutas: Array<string> = ["morango", "abacaxi", "laranja", "maçã", "limão"];

//array functions
frutas.push("maracuja");
frutas.length;

//array spread operator
let listaNumeros = [1, 2, 3, 4, 5, 6];
listaNumeros = [...listaNumeros, 7, 8, 9, 10];

//array com laço de iteração
let cachorrosArray: Array<string> = ["belga", "poodle", "pitbull"];
function funcaoCachorros(cachorros: string[]) {
	for (let index = 0; index < cachorros.length; index++) {
		console.log(cachorrosArray[index]);
	}
}
//funcaoCachorros(cachorrosArray);

let quitandaArray: Array<string> = [
	"coentro, mandioca",
	"banana",
	"batata",
	"tomate",
	"alface",
	"cebola",
];
function chamarQuitandaArray(item: string[]) {
	for (let i = 0; i < quitandaArray.length; i++) {
		console.log(item[i]);
	}
}
//chamarQuitandaArray(quitandaArray);

//array operation functions
const trans = quitandaArray.map((element) => element.toUpperCase());
//console.log(trans);

//object type
let car: {
	name: string;
	price: number;
	year: string;
};

car = { name: "Subaro", price: 120.0, year: "2022" };

let device: {
	serie: string;
	id: number;
	model: string;
	number1: string;
	number2: string;
};

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
function multiplicar(num1: number, num2: number) {
	let result: number = num1 * num2;
	return console.log(result);
}

function walk(direciton: string) {
	direciton = direciton;
	console.log("walking to " + direciton);
}

//Boolean, boolean type
let tarefaConcluida: boolean = true;
let tarefaPendente: boolean = false;
//console.log(tarefaConcluida);

//number type (reis, decimais, hexadecimal. octal, binarty and NaN)
let num1: number = 14;
let num2: number = 14.0;
let num3: number = 0x373cf;
let num4: number = 0o377;
let num5: number = 0b111001;

//bigint type (numeros inteiros grandes )
//nao funciona antes da versao de 2020
let big1: bigint = 324235425452452452455451123423n;

//typeof function
typeof num1;
//console.log(typeof(num1));

//tuple Type - deve seguir a ordem que está definida na declaração
let tupla: [string, number, boolean];
tupla = ["ruan", 22, true];

//tuple heterogen
let listFruits: [string, ...string[]] = [
	"orange",
	"pineapple",
	"apple",
	"grape",
	"lemon",
	"strawberryes",
	"banana",
	"orange",
];
let listFruits2: [number, boolean, ...string[]] = [5, true, ...listFruits];

//enum type
enum Langauge {
	Php, //0
	Ruby, //1
	Csharp, //2
	Javascript, //3
	Typescript, //4
} //console.log(Langauge.Csharp);

enum Idioms {
	Portugues = "PT-BR",
	English = "EN",
	Espanhol = "ES",
	Frances = "FR",
} //console.log(Idioms);

enum Taks {
	Todo,
	Doing,
	Done,
}

const completeTaks = {
	id: 0,
	status: Taks.Todo,
	description: "Taks To Do !",
};

if (completeTaks.id == Taks.Todo) {
	//console.log(completeTaks.description);
} else {
	//console.log("Task complete!");
}

//any type  (padrinho dos tipos, ou seja, any é default do typescript, evitar o máximo usar o any// hirarquia de tipos)
let qualquerCoisa: any = 888;
let qualquerCoisa2: any = "oito oito oito";
let qualquerCoisa3: any = qualquerCoisa + qualquerCoisa2;
//console.log(qualquerCoisa3);

//unknow type (não sabe qual tipo definir, evitar problemas no codigo, any !== unknow)
let naoSei: unknown = 1;
let naoSei2: unknown = [];
let naoSei3: unknown = "ola";
let naoSei4: unknown = {};
//console.log(typeof(naoSei));
//console.log(typeof(naoSei2));
//console.log(typeof(naoSei3));
//console.log(typeof(naoSei4));

//void type  (oposto do tipo any e é a ausência de qualquer tipo)
function exemploFuncao(): void {}
const exemploFuncao2 = () => {};
