var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//USANDO CLASSES
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat(breed) {
        this.breed = breed;
    }
    return Cat;
}());
var Car = /** @class */ (function () {
    function Car(name) {
        this.wheels = 4;
        this.name = name;
    }
    return Car;
}());
var Machine = /** @class */ (function () {
    function Machine(name) {
        this.name = name;
    }
    Machine.prototype.firegun = function () {
        return "TEI TEI TEI TEI";
    };
    return Machine;
}());
var KillerMachine = /** @class */ (function (_super) {
    __extends(KillerMachine, _super);
    function KillerMachine(name, guns) {
        var _this = _super.call(this, name) || this;
        _this.guns = guns;
        return _this;
    }
    KillerMachine.prototype.firegun = function () {
        return "pow pow pow pow";
    };
    return KillerMachine;
}(Machine));
var kame = new KillerMachine("darkdeath", 5);
//console.log(kame.firegun());
var Dwarf = /** @class */ (function () {
    function Dwarf(name) {
        this.name = name;
    }
    Dwarf.prototype.greeting = function (name) {
        return "hello " + name;
    };
    return Dwarf;
}());
var bilbo = new Dwarf("bilbo");
//console.log(bilbo.greeting('gandalf'));
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Object.defineProperty(Person.prototype, "fullname", {
        get: function () {
            return "hello " + this.name + " " + this.surname;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var soldado = new Person("Makaliste", "Lannister");
//console.log(soldado.fullname);
//TESTANDO GETTERS AND SETTERS
var Transporte = /** @class */ (function () {
    function Transporte() {
        this.rodas = 4;
    }
    Object.defineProperty(Transporte.prototype, "fillName", {
        set: function (nome) {
            if (nome == "onibus") {
                console.log("Seu transporte é um" + nome);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transporte.prototype, "fillWeight", {
        set: function (carga) {
            if (carga > 31) {
                console.log("O {nome} execeu o limite de passageiros em " + (carga - 31) + " passageiros");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transporte.prototype, "fillPassagers", {
        get: function () {
            return "Quantidade de passageiros: " + this.carga;
        },
        enumerable: false,
        configurable: true
    });
    return Transporte;
}());
var busao = new Transporte();
//busao.fillName;
//busao.fillWeight = 54;
//console.log(busao);
var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    Object.defineProperty(Cliente.prototype, "preencherAdm", {
        set: function (adm) {
            if (adm != undefined) {
                console.log("Administrador - " + adm);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "preencherName", {
        set: function (name) {
            console.log("Bem vindo : " + name);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "preencherId", {
        set: function (id) {
            if (this.adm == true) {
                console.log("Id = " + id);
            }
        },
        enumerable: false,
        configurable: true
    });
    return Cliente;
}());
var u1 = new Cliente();
var Bussola = /** @class */ (function () {
    function Bussola(direcao) {
        this.direcao = direcao;
    }
    Bussola.prototype.localizar = function () {
        return "Segundo Cordenadas a dire\u00E7\u00E3o \u00E9 " + this.direcao;
    };
    Bussola.prototype.ir = function () {
        return "";
    };
    return Bussola;
}());
var ponto = new Bussola("Norte");
//console.log(ponto.localizar());
var Instrumento = /** @class */ (function () {
    function Instrumento(notas) {
        this.notas = notas;
        this.notas = notas;
    }
    Object.defineProperty(Instrumento.prototype, "tocarNota", {
        get: function () {
            return this.notas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instrumento.prototype, "trocarNota", {
        set: function (novaNota) {
            if (this.notas == 5) {
                this.acorde = this.notas;
                novaNota = this.acorde;
                console.log(novaNota);
            }
        },
        enumerable: false,
        configurable: true
    });
    return Instrumento;
}());
var teclado = new Instrumento(5);
//console.log(teclado.tocarNota);
