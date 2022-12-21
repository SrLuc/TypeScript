"use strict";
const arnold = {
    name: 'arnod',
    type: 'shotgun'
};
console.log(arnold);
//readonly arrays
const frutas = ['abacaxi', 'maça', 'uva'];
let lerFrutas = frutas.forEach((element) => 'Fruta: ' + element);
console.log(lerFrutas);
const maquinas = ['makita', 'Solda', 'Furadeira'];
let mostrarMaquinas = maquinas.map((element) => `Máquina - ${element}`);
console.log(mostrarMaquinas);
let usuario1 = ['sim', true];
let arma = ['m4a1', true];
let mercadoria = ['bebidas', true, 24.99];
//readonlly tuplas
function mostrarNumeros(numbers) {
    return numbers;
}
