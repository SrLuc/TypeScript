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
// testando visibilidade publica
var A = /** @class */ (function () {
    function A() {
        this.x = 10;
    }
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return B;
}(A));
var bInstance = new B();
bInstance.x = 5;
console.log(bInstance);
//testando visibilidade protegida
var G = /** @class */ (function () {
    function G() {
        this.x = 10;
        this.y = 15;
    }
    G.prototype.somarXY = function () {
        var soma = this.x + this.y;
        return soma;
    };
    return G;
}());
var H = /** @class */ (function (_super) {
    __extends(H, _super);
    function H() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    H.prototype.showX = function () {
        console.log("" + this.x);
    };
    H.prototype.showY = function () {
        console.log("" + this.y);
    };
    H.prototype.showSomar = function () {
        console.log("" + (this.x + this.y));
    };
    return H;
}(G));
var hInstance = new H();
hInstance.showX();
hInstance.showY();
hInstance.showSomar();
//testando visibilidade privada
var Z = /** @class */ (function () {
    function Z() {
        this.name = 'Raneva';
        this.id = 2384;
    }
    Z.prototype.showName = function () {
        return this.name;
    };
    Z.prototype.showId = function () {
        return this.id;
    };
    Z.prototype.showData = function () {
        return "hello " + this.name + " - " + this.id;
    };
    return Z;
}());
var newChar = new Z();
console.log(newChar.showName());
console.log(newChar.showId());
console.log(newChar.showData());
