var textoComun = 'El tren Numero ';
var textoFuncionando = ' está funcionando ';
var textoNoFuncionando = ' No está funcionando'

class Tren {
    constructor(name, number, status) {
        this.name = name;
        this.number = number;
        this.status = status;
    }
}

var trenes = [];

for (i = 1; i <= 8; i++) {
    if (i <= 3) {
        trenes.push(new Tren('T' + i, i, true))
    } else {
        trenes.push(new Tren('T' + i, i, false))
        new Tren('T' + i, i, false);
    }
}

iterate(trenes);

function iterate(params) {
    console.log(typeof params);
    for (i = 0; i <= params.length; i++) {
        if (params.status) {
            console.log(textoComun + params.number + textoFuncionando);
        }
        console.log(textoComun + params.number + textoNoFuncionando);
    }
}