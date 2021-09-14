
//---------------------ARRAYS JS--------------------------
//creamos un arrays
var arreglo = ['Juan', 'Agustin', 'Patricio', 55, 66, 25]

var arreglo2 = new Array('Alex', 'Sebas', 'Martin', 45, 5, 48)

//mostramos el array
console.log(arreglo);

console.log(arreglo2);

console.log("mostramos el elemento del indice cero");
console.log(arreglo[0]);


console.log("mostramos el elemento del indice tres");
console.log(arreglo[3]);

console.log("obtenemos la cantidad de datos que tiene el arreglo ");
console.log(arreglo.length);
//---------------------MANIPULANDO ELEMENTOS DEL DOM--------------------------

//selecciono un elemento del DOM mediante su id 
document.getElementById('caja').innerText = arreglo;

//seleciono un elemento por nombre de tag
var tagObtenido = document.getElementsByTagName("p");
console.log(tagObtenido);

//selecciono un elemento por clase
var elemntoObtenidoPorSuClase = document.getElementsByClassName("intro");
console.dir(elemntoObtenidoPorSuClase);

//si desea encontrar todos los elementos HTML que coincidan con un selector
// especificado (id, nombre de clase , tipos , atributos ,valores de atritubos , ....etc) utilizamos
//el mètodo querySelectorAll()
var elementoQSA = document.querySelectorAll("p.intro");

console.log(elementoQSA);


//este buscaria en el DOM el elemento formulario con id ="frm1"
//en la coleccion de formulario
document.forms["frm1"];

//---------------------   OBJETOS   --------------------------
//creamos un objeto llamado alumnos con dos propiedades (nombre , apellido )
var alumno = {
    nombre: 'Ivan',
    apellido: 'Garcia',
}

//alert(alumno.nombre);
//alert(alumno.apellido);
console.dir(alumno);



//----------------------------- Arreglos + Objetos -------------------
var empleados = [
    { nombre: 'Juan', apellido: 'garcia', sueldo: 1500, edad: 40 },

    { nombre: 'Alex', apellido: 'Martinez', sueldo: 5000, edad: 45 },

    { nombre: 'Pedro', apellido: 'Gonzalez', sueldo: 7500, edad: 59 },

    { nombre: 'Mirta', apellido: 'Legrand', sueldo: 5500, edad: 45 },
];


console.log(empleados);

//accedemos al apellido del objeto en el indice 3
console.log(empleados[3].apellido);

//recorremos el array de objetos con JS

for (let i = 0; i < empleados.length; i++) {
    // alert(empleados[i].nombre);

}


//--------------------------- metodos útiles para trabajar con arrays

var puntos = [1, 8, 2, 11, 54]
var cosas = ['word', 'Word', '1 Word', '2 Words'];


console.log(cosas);

console.log("sort()");
console.log(cosas.sort());
//En unicode , los numeros vienen antes que las letras mayúsculas 
//y estas vienen antes que las letras minúsculas 
//'1 Word', '2 Words', 'Word', 'word']}


//accedo al ultimo elemento del array 
var ultimoDatoDelArray = cosas[cosas.length - 1];
console.log("ultimo elemento : " + ultimoDatoDelArray);
console.log(cosas[-1]);


//metodos push 
var nombres = ['marcelo', 'Juan', 'Roberto', 'jose']

//metodo push() : agrega un dato al final del arreglo
var retorno = nombres.push('Maria');
console.log("push() retorno: " + retorno);
console.log(nombres);

//metodo pop(): si queremos sacar un dato de nuestro array utilizamos pop()
nombres.pop();
console.log("pop():");
console.log(nombres);

//metodo unshift(): para agregar elementos al inicio de mi array 
nombres.unshift('Patricio');
console.log("unshift():");
console.log(nombres);

//metodo shift(): para eliminar elementos al inicio del array 
nombres.shift();
console.log("shift():");
console.log(nombres);

//splice() : si no queremos quitar datos excatamente al inicio o al final 
//nombres.splice(2);//en este caso elimina el elemento del indice 2 y todos los que estan a su derecha 
nombres.splice(1, 2);//a partir del indice 1 me borra 2 elemntos 

console.log(nombres);

//metodo concat  : para unir dos arrays
var sectorA = ['Juan', 'Robert', 'Maxi'];

var sectorB = ['Susa', 'Martina', 'Evelin'];

var sectorAyB = sectorA.concat(sectorB);
console.log(sectorAyB);

//slice  : nos permite partir un array a aprtir de una determinada posicion 
var chicas = sectorAyB.slice(3);
console.log(chicas);
