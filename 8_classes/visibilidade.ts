// testando visibilidade publica
class A {
	x = 10;
}
class B extends A {}

const bInstance = new B();

bInstance.x = 5;

console.log(bInstance);

//testando visibilidade protegida

class G {
	protected x: number = 10;
	protected y: number = 15;
	protected somarXY() {
		let soma = this.x + this.y;
		return soma;
	}
}

class H extends G {
	showX() {
		console.log(`${this.x}`);
	}

	showY() {
		console.log(`${this.y}`);
	}

	showSomar() {
		console.log(`${this.x + this.y}`);
	}
}

const hInstance = new H();
hInstance.showX();
hInstance.showY();
hInstance.showSomar();

//testando visibilidade privada

class Z {
    private name:string = 'Raneva';
    private id:number = 2384;

    showName():string{
        return this.name
    }

    showId():number{
        return this.id;
    }

    showData(){
        return `hello ${this.name} - ${this.id}`
    }

}

const newChar = new Z();
console.log(newChar.showName());
console.log(newChar.showId());
console.log(newChar.showData());