// Para darle enter
document.getElementById("numero")
    .addEventListener("keyup", function(e) {
        if (e.keyCode === 13) {
            document.getElementById("btnAgregar").click();
        }
    });

//interactuando con el HTML
// Lista de numeros

const numeros = [];
let numero = document.getElementById("numero"); 
let btnAgregar = document.getElementById("btnAgregar"); 
let listar = document.getElementById("listado"); 

function agregar(){
        numeros.push(numero)
        btnAgregar.addEventListener("click", () => {
          numeros.forEach((elemento) => {
            listar.innerHTML += `<p>${elemento.value }</p>`
          })
          document.getElementById("numero").value = "";
        })

}
agregar();
function mostrarLista(){

}


// Ordenamso la lista con el metodo sort


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


