/*
    primeiramente lembrar de iniciar o json com o comando  tsc --init  
    lembrar de usasr o comando  node nomedoarquivo.js
*/

//String type
let nomeCompleto: string = "Ruan Rickelme Lucena Ramos";
console.log(nomeCompleto);

//Array type
let componentes: string[] = [
  "Nome",
  "Idade",
  "CPF",
  "DataNascimento",
  "Endereço",
];
console.log(componentes);

//Object type
let car: {
  name: string;
  price: number;
  year: string;
};

car = {name: 'Subaro', price: 120.000, year: '2022'}
console.log(car);

//Function Type
function multiplicar(num1:number, num2:number){
    let result: number = num1 * num2;
    return console.log(result);
}

multiplicar(2,4);
