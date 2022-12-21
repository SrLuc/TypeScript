
//interface com generic type
interface Craft<h,d> {
    name:string,
    quantity:number;
    healthing:boolean,
    healthPoints:h,
    damagePoints:d;
}

type Food = Craft<number, []>;
type Material = Craft<number, number>;
type Spell = Craft<string, string>;

const cake : Food = {name:'Chocolat Cake', quantity:1, healthing:true, healthPoints:5, damagePoints:[]};
const bread : Food = {name:'Old Bread', quantity:1, healthing:true, healthPoints:3, damagePoints:[]};
const sword : Material = {name:'iron sword', quantity:1,healthing:false, healthPoints:0, damagePoints:5};
const arch : Material = {name:'Self Arch', quantity:1,healthing:false, healthPoints:0, damagePoints:3};
const spear: Material = {name:'Gold Spear', quantity:1,healthing:false, healthPoints:0, damagePoints:6};
const frozen : Spell = {name:'Frozening', quantity:1,healthing:false, healthPoints:'no', damagePoints:'stun'};
const fireball:typeof frozen = {name:'Burn', quantity:1,healthing:false, healthPoints:'no', damagePoints:'burning'};

//typeof type
const pessoa1:string = 'ruan';
const pessoa2: typeof pessoa1 = 'rickelme';
const pessoa3: typeof pessoa2 = 'lucena';
const pessoa4: typeof pessoa3 = 'ramos';

//conditional types
interface A{};
interface B extends A {};
type C = B extends A ? number : string;
type D = B extends C ? string : boolean;
const numero:C = 5;
const teste:D = false;
