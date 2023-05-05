// Lista de numeros

const lista = [
    1,
    1,
    1,
    2,
    2,
    3,
    4
  ];

  const lista2 = [
    10,
    10,
    10,
    20,
    20,
    30,
    40
  ];


// Ordenamso la lista con el metodo sort

lista.sort(function(a, b){return a - b})
console.log(lista);

// Media

function calcularMediaAritmetica(lista) {
    let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Mediana

function calcularMedianaAritmetica(lista){
    if(lista.length % 2 == 0){
        const mitadLista = lista.length / 2;
        const elemento1 = (lista[mitadLista]);
        const elemento2 = (lista[mitadLista- 1]);
        const promedio = (elemento1+elemento2)/2;
        return promedio;

    }else{
        const mitadLista = parseInt(lista.length / 2);
        const promedio = (lista[mitadLista]);
        return promedio;
    }
}

//moda

function calcularModa(lista){
    //Creamos un objeto vacio
const listaCount = {}

//map recorre nuestro array
lista.map(
    function (elemento){
        if(listaCount[elemento]){
            listaCount[elemento] += 1;
        }else{
            listaCount[elemento] = 1;
        }
    }
); 

const listaArray = Object.entries(listaCount).sort(
    function(valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1];
    }
);

const moda = listaArray[listaArray.length - 1];
return moda[0];
}

console.log(calcularModa(lista));
