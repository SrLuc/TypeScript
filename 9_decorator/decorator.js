"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function teste1() {
    return function (target, propertyKey, descriptor) {
        console.log("teste1");
    };
}
function teste2() {
    return function (target, propertyKey, descriptor) {
        console.log("teste2");
    };
}
function teste3() {
    return function (target, propertyKey, descriptor) {
        console.log("teste3");
    };
}
class Exemplo {
    decorar() { }
}
__decorate([
    teste1(),
    teste2(),
    teste3()
], Exemplo.prototype, "decorar", null);
//teste com decorator
function multiplicaDecorator() {
    return function (target, propertyKey, descriptor) {
        console.log("Multiplicando por 5");
    };
}
class multiplicarPorCinco {
    multiplicar(numero) {
        return numero * 5;
    }
}
__decorate([
    multiplicaDecorator()
], multiplicarPorCinco.prototype, "multiplicar", null);
const novoNumero = new multiplicarPorCinco();
//console.log(novoNumero.multiplicar(5));
