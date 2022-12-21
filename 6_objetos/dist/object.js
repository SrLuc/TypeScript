var arnold = {
    name: 'arnod',
    type: 'shotgun'
};
console.log(arnold);
//readonly arrays
var frutas = ['abacaxi', 'maça', 'uva'];
var lerFrutas = frutas.forEach(function (element) { return 'Fruta: ' + element; });
console.log(lerFrutas);
var maquinas = ['makita', 'Solda', 'Furadeira'];
var mostrarMaquinas = maquinas.map(function (element) { return "M\u00E1quina - " + element; });
console.log(mostrarMaquinas);
var usuario1 = ['sim', true];
var arma = ['m4a1', true];
var mercadoria = ['bebidas', true, 24.99];
//readonlly tuplas
function mostrarNumeros(numbers) {
    return numbers;
}
