// Para darle enter
document.getElementById("numero")
    .addEventListener("keyup", function(e) {
        if (e.keyCode === 13) {
            document.getElementById("env").click();
        }
    });

//interactuando con el HTML

function agregar(){
    const inputNumero = document.getElementById("numero");
    const numero = inputNumero.value;
    lista.push(numero);
    document.getElementById("numero").value = "";
    lista.sort(); // Ordenamos

}

function mostrarLista(){

    for (i = 0; i < lista.length; i++) {
        contenido = `${lista[i]}`;
        document.getElementById('listado').innerHTML += `<p> Numero: ${contenido}</p>`;
        console.log(lista[i]);
    }
}
// Lista de numeros

const lista = [];



// Ordenamso la lista con el metodo sort

lista.sort(function(a, b){return a - b})

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


