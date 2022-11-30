/*
    primeiramente lembrar de iniciar o json com o comando  tsc --init  
    lembrar de usasr o comando  node nomedoarquivo.js
*/

//String type
let nomeCompleto: string = "Ruan Rickelme Lucena Ramos";
let nomeEmpresa: string = "Amaral Ltda";
let minhaIdade: number = 22;

//Array type
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

//Object type
let car: {
  name: string;
  price: number;
  year: string;
};

car = { name: "Subaro", price: 120.0, year: "2022" };

let device: {
    serie:string;
    id: number;
    model:string;
    number1:string;
    number2:string
}

device = 
{serie: 'J8', id: 65165, model: 'Samsumg', number1: '+55988745214', number2:  '+558199874517'},
{serie: 'XR', id: 34322, model: 'Iphone', number1: '+55523533423', number2:  '+5582454252537'};

console.log('the ID ' + device.id + ' is Series : ' + device.serie);

//Function Type
function multiplicar(num1: number, num2: number) {
  let result: number = num1 * num2;
  return console.log(result);
}

function walk(direciton: string){
    direciton = direciton;
    console.log('walking to ' + direciton);
}

