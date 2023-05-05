// Media

function calcularMediaAritmetica(lista) {
   // let sumaLista = 0;

    //for (let i = 0; i < lista.length; i++) {
    //    sumaLista = sumaLista + lista[i];
   // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

// Mediana

const lista2 = [
    100,
    200,
    800,
    40000
];

function calcularMedianaAritmetica(lista2){
    if(lista2.length % 2 == 0){
        const mitadLista2 = lista2.length / 2;
        const elemento1 = (lista2[mitadLista2]);
        const elemento2 = (lista2[mitadLista2- 1] );
        const promedio = (elemento1+elemento2)/2
        console.log(lista2);
        console.log(promedio);
    }else{
        const mitadLista2 = parseInt(lista2.length / 2);
        const promedio = (lista2[mitadLista2]);
        console.log(lista2);
        console.log(promedio);
    }
}

console.log(calcularMedianaAritmetica(lista2));

/*
function calcularMediaAritmetica2(lista2) {
     const sumaLista2 = lista2.reduce(
         function (valorAcumulado = 0, nuevoElemento) {
             return valorAcumulado + nuevoElemento;
         }
     );
     const promedioLista2 = sumaLista2 / lista2.length;
 
     return promedioLista2;
 }
 

const mitadLista2 = parseInt(lista2.length / 2);

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let mediana;

if(esPar(lista2.length)){
    const elemento1 = lista2[mitadLista2];
    const elemento2 = lista2[mitadLista2 - 1];

    const promedioElemento1y2 = calcularMediaAritmetica2([elemento1, elemento2]);

    mediana = promedioElemento1y2;
}else{
    mediana = lista2[mitadLista2];
}

console.log(lista2);
console.log(mediana)
*/