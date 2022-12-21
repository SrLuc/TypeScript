"use strict";
//USANDO CLASSES
class Dog {
}
class Cat {
    constructor(breed) {
        this.breed = breed;
    }
}
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    firegun() {
        return `TEI TEI TEI TEI`;
    }
}
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
    firegun() {
        return `pow pow pow pow`;
    }
}
const kame = new KillerMachine("darkdeath", 5);
//console.log(kame.firegun());
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting(name) {
        return `hello ${name}`;
    }
}
const bilbo = new Dwarf("bilbo");
//console.log(bilbo.greeting('gandalf'));
class Person {
    constructor(name, surname) {
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
    constructor() {
        this.rodas = 4;
    }
    set fillName(nome) {
        if (nome == "onibus") {
            console.log("Seu transporte é um" + nome);
        }
    }
    set fillWeight(carga) {
        if (carga > 31) {
            console.log(`O {nome} execeu o limite de passageiros em ${carga - 31} passageiros`);
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
    set preencherAdm(adm) {
        if (adm != undefined) {
            console.log(`Administrador - ${adm}`);
        }
    }
    set preencherName(name) {
        console.log("Bem vindo : " + name);
    }
    set preencherId(id) {
        if (this.adm == true) {
            console.log(`Id = ${id}`);
        }
    }
}
const u1 = new Cliente();
class Bussola {
    constructor(direcao) {
        this.direcao = direcao;
    }
    localizar() {
        return `Segundo Cordenadas a direção é ${this.direcao}`;
    }
    ir() {
        return ``;
    }
}
const ponto = new Bussola("Norte");
//console.log(ponto);
//OVERRIDE DE MÉTODOS
//somente reescrever os métodos com o mesmo nome e mudar seu conteudo
