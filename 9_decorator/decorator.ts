

function teste1(){
    return function(target:any, propertyKey:string, descriptor:PropertyDescriptor){
        console.log('teste1');
    }
}

function teste2(){
    return function(target:any, propertyKey:string, descriptor:PropertyDescriptor){
        console.log('teste2');
    }
}

function teste3(){
    return function(target:any, propertyKey:string, descriptor:PropertyDescriptor){
        console.log('teste3');
    }
}


class Exemplo {
    @teste1()
    @teste2()
    @teste3()
    decorar(){} //decorator é uma implementação de um método,declarador de classe, acessador, propriedade ou parametro
                //por isso precisa estar atrelado a um desses componentes, caso contrario ira emitir erros
}