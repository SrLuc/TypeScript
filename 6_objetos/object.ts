
//herança de interfaces com type
interface character {
    name:string
}

interface gun {
    type:string
    
}

type Char = character & gun;

const arnold:Char = {
    name:'arnod',
    type:'shotgun'
}

console.log(arnold);

//readonly arrays
const  frutas: ReadonlyArray<string> = ['abacaxi','maça','uva'];
let lerFrutas = frutas.forEach((element) => 'Fruta: ' + element);
console.log(lerFrutas);

const maquinas: ReadonlyArray<string> = ['makita', 'Solda', 'Furadeira'];
let mostrarMaquinas = maquinas.map((element) => `Máquina - ${element}`);
console.log(mostrarMaquinas);

//tuplas
type validacao = [string, boolean];
let usuario1:validacao = ['sim', true];

type atirar = [string, boolean];
let arma = ['m4a1', true];

type confiscar = [string, boolean, number];
let mercadoria = ['bebidas', true, 24.99];

//readonlly tuplas
function mostrarNumeros(numbers: readonly [number, number]){
    return numbers
}




