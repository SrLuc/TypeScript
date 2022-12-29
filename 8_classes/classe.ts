//USANDO CLASSES
class Dog {
	breed!: string;
}

class Cat {
	breed;

	constructor(breed: string) {
		this.breed = breed;
	}
}

class Car {
	name;
	readonly wheels = 4;

	constructor(name: string) {
		this.name = name;
	}
}

class Machine {
	name;
	constructor(name: string) {
		this.name = name;
	}

	firegun(): string {
		return `TEI TEI TEI TEI`;
	}
}

class KillerMachine extends Machine {
	guns;
	constructor(name: string, guns: number) {
		super(name);
		this.guns = guns;
	}
	firegun(): string {
		return `pow pow pow pow`;
	}
}

const kame = new KillerMachine("darkdeath", 5);
//console.log(kame.firegun());

class Dwarf {
	name;
	constructor(name: string) {
		this.name = name;
	}

	greeting(name: string) {
		return `hello ${name}`;
	}
}
const bilbo = new Dwarf("bilbo");
//console.log(bilbo.greeting('gandalf'));

class Person {
	name;
	surname;

	constructor(name: string, surname: string) {
		this.name = name;
		this.surname = surname;
	}

	get fullname() {
		return "hello " + this.name + " " + this.surname;
	}
}
const soldado = new Person("Makaliste", "Lannister");
//console.log(soldado.fullname);

//TESTANDO GETTERS AND SETTERS
class Transporte {
	nome!: string;
	carga!: number;
	readonly rodas = 4;

	set fillName(nome: string) {
		if (nome == "onibus") {
			console.log("Seu transporte é um" + nome);
		}
	}
	set fillWeight(carga: number) {
		if (carga > 31) {
			console.log(
				`O {nome} execeu o limite de passageiros em ${carga - 31} passageiros`
			);
		}
	}

	get fillPassagers() {
		return `Quantidade de passageiros: ${this.carga}`;
	}
}
const busao = new Transporte();
//busao.fillName;
//busao.fillWeight = 54;
//console.log(busao);

class Cliente {
	name!: string;
	id!: number;
	adm?: boolean;

	set preencherAdm(adm: boolean) {
		if (adm != undefined) {
			console.log(`Administrador - ${adm}`);
		}
	}

	set preencherName(name: string) {
		console.log("Bem vindo : " + name);
	}

	set preencherId(id: number) {
		if (this.adm == true) {
			console.log(`Id = ${id}`);
		}
	}
}
const u1 = new Cliente();
//u1.preencherName = "Ruan Rickelme";
//u1.preencherId = 4557;
//u1.preencherAdm = true;

//HERDANDO INTERFACES COM IMPLEMENTS
interface Cordenada {
	localizar(): string;
	ir(): string;
}
class Bussola implements Cordenada {
	direcao: string;

	constructor(direcao: string) {
		this.direcao = direcao;
	}

	localizar(): string {
		return `Segundo Cordenadas a direção é ${this.direcao}`;
	}

	ir(): string {
		return ``;
	}
}
const ponto = new Bussola("Norte");
//console.log(ponto.localizar());

class Instrumento {
	acorde!:number;
	constructor(public notas:number){
		this.notas = notas;
	}

	get tocarNota():number{
		return this.notas
	}

	set trocarNota(novaNota:number){
		if(this.notas == 5){
			this.acorde = this.notas;
			novaNota = this.acorde;
			console.log(novaNota);
		} 
	}
}

const teclado = new Instrumento(5);
//console.log(teclado.tocarNota);