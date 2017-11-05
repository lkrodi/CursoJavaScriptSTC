/*
    Objeto, es un espacio de memoeria que se almacena temporalmente,
    es decir una base de datos temporal en memoria del computador.
*/

var lista_integrantes = [
    'Emymi',
    'Rodolfo',
    'Nicolas',
    'Christian'
];

/*Declaración básica de una variable básica en cadena(String)*/
var direccion = 'Independencia';

/*Push, Agrega un nuevo elemento al arreglo*/
lista_integrantes.push(direccion);

/*Imprime el cuarto elemento del arreglo*/
console.log(lista_integrantes[3]);

/*Imprime el tercer elemento del arreglo en el navegador*/
document.write(lista_integrantes[2],'<br>');

/*for, es un bucle que realiza secuencias automaticas de una manera repetitiva*/
for(var i=0; i<lista_integrantes.length; i++){
    console.log(lista_integrantes[i]);
    document.write(lista_integrantes[i], '<br>');
}

/*Ejercicio: crear un objeto de equipo de futbol*/
/*
    Los objetos se componen de la siguiente manera:
    var nombre_de_objeto = {
        'nombre_propiedad' : valor
    }
*/
var lista_futbol={
    'Delantero':'Miguel',
    'Mediocampista':'Patrick',
    'Defensa':'Christian',
    'Arquero':'Aldair',
    'Entrenador':'Witer',
}

/*Imprime la propiedad Arquero del objeto: lista_futbol en el navegador*/
document.write(lista_futbol.Arquero);

/*Imrpime la propiedad Defensa del objeto: lista_futbol en consola*/
console.log(lista_futbol.Defensa);

/*for in, se utiliza para recorrer los elementos de un objeto, mas no de un arreglo*/
for(var propiedad in lista_futbol){
    console.log(lista_futbol[propiedad]);
}

/*Ejercicio: Realizar un objeto con diferentes tipos de propiedades, incluir arreglos, enteros, strings y objetos*/
var yo = {
    'Nombre' : 'Christian Rios Sanchez',
    'DNI' : 756600789,
    'Edad' : 19,
    'Estudios' : 'I.S.E.T.P Carlos Cueto Fernandini',
    'GrupodeEstudios' : 'Student Tech Club',
    'Fechadenacimiento' : {
        'Dia' : 13,
        'Mes' : 05,
        'Año' : 1998
    },
    'Hoby' : {
        '1' : 'Futbol',
        '2' : 'Canto',
        '3' : 'Baile', 
    }
}

console.log(yo.Fechadenacimiento);

/*Enlace al curso de Javascript desde 0:
    https://www.youtube.com/watch?v=nsdjNe78BMk&list=PLEtcGQaT56cij4cilDUzKYcu6-wW44kTx
*/


