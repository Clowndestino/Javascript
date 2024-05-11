//console.log("Asi se programa de verdad")

// console.log es un metodo que me va a permitir visualizar en consola un mensaje
// este mensaje puede ser tanto una cadena de texto, cualquier tipo de dato, etc

//Sintaxis --> son reglas que se establecen a la hora de generar instrucciones
// No se tienen en cuenta los espacios o saltos de linea

//La identacion o sangria es el espacio que se genera entre lineas de codigo anidadas

//CamelCase
//ej: edadDelUsuario
//se hace uso de mayus en la primera letra que deviene de una palabra anterior
// La palabra siempre va a estar en minuscula, las consecuentes, solamente en mayus la primera letra
//ej: verificadorDelUsuario,carritoDeCompras

//No se define el tipo de variables
//JavaScript tiene tipado debil
// De que las variables no precisan que se le asignen un tipo especifico de dato

// Se pueden incluir comentarios ----> // para codigo de una sola linea /*para codigo extenso*/

//Javascript es case-sensitive: que distingue mayusculas de minusculas
// PERRO,Perro,perro,PerRo, etc.

//En JavaScript no es necesario el uso de ;


// Declaracion de Variables
// Const es una declaracion de variable que va a generar que el valor al cual se asigna sea constante
//Que una vez iniciada esta variable, ese valor va a mantenerse siempre igual.

//const gustoFavoritoDeFernando = "Menta"

//const nombre = "carolina"

// gustoFavoritoDeFernando = "Chocolate Suizo"

//console.log(gustoFavoritoDeFernando)
//console.log(nombre)

//Let es una forma de declaracion de variable que permite la reasignacion del valor

//let edad = 28

//console.log(edad)

//edad = 29

//console.log(edad)

// una cosa es declarar una variable

//let edadDelUsuario = 50

//reasignacion

//edadDelUsuario = 55

//redeclarar no se puede

//let edadDelUsuario = 1999 ----> Esto es un error!!!!

// var esEstudiante = "Si"

// var esEstudiante = "No"

// console.log(esEstudiante)

// No se utiliza Var para nada, esta deprecado, esta obsoleto
//No se redeclaran variables con Var ni con nada, esta mal, es un error.


//Datos Primitivos

// Son tipos de datos que no precisan instrucciones para manipular valores

// String, cadena de caracteres
//String = texto 
// lo que define a los string es el uso de comiillas, back sticks ``
// si intentas escribir texto sin comillas, javascript interpreta que estas escribiendo el identificador de una variable
// en javascript no se usa la enie

//const segundoNombre = "Elizabeth"
//console.log(segundoNombre)

//`Daniel`
//"Daniel"// ----> datos tipo string

//number
//en js los numeros con coma se llaman numeros flotantes
// todos los numeros se pueden asignar a una variable

//const numeroFavorito = 4
//const numeroConComa = 4.98988 // asi se representan los numeros con coma

// Operadores aritmeticos

//suma
//console.log(1 + 1)

//resta
//console.log( 10 - 5)

//multiplicacion
//console.log( 5 * 10)

//division
//console.log( 10 / 2)

// COncatenacion

//const usuario1 = "Agustin"
//const usuario2 = "Andres"
//const usuario3 = "Joaquin"

//console.log(usuario1+ " " + usuario2 +  " y " + usuario3)

//Prioridad

//console.log( 2 * 4 + 5)

//const suma = 2 * 5 + 10

//Cuadros de Dialogo

//Es una ventana emergente con la cual interactua el usuario
//Es nativa del navegador
//Esa ventana no es customizable
//Es horrible
//Solamente se usa para aprender lo basico de JS

// Alert visualiza un mensaje del usuario

//alert("Hola Chicos, Bienvenidos a mi pagina")

// Prompt interactua con el usuario a traves  de un input

//const edadRealDelUsuario = prompt("INGRESE SU EDAD")

//console.log( `Usted tiene: ${ edadRealDelUsuario}`)

// 1) Muestre un mensaje en consola que diga lo siguiente: " MIRA MAMAAA, ESTOY PROGRAMANDO!"
// 2) Hacer una Variable que almacene un numero par mayor a 10.
// 3) Hacer una Variable que almacene un numero impar menor a 100.
// 4) Visualizar en consola la suma de las dos variables numericas que hicimos.
// 5) Con un cuadro de dialogo, preguntele el nombre  al usuario  que ingresa a la web y guarde su valor en una variable.
// 6) Visualizar en consola, junto al nombre del usuario, el siguiente mensaje: "Bienvenide a nuestra primera web -usuario-"
// 7) Genere  una nueva variable que almacene el numero 5 y que se multiplique con el numero impar.
// 8) Visualice en consola cada uno de los nombres de las participantes del grupo.
// 9) Reste 100 a la variable que multiplica por 5 al numero primo.
//10) Cotejar el tipo de dato del punto 3 y 5.

// Type of es un metodo que te dice cual es el tipo de dato que le pasaste

// 1) Muestre un mensaje en consola que diga lo siguiente: " MIRA MAMAAA, ESTOY PROGRAMANDO!"

console.log(" MIRA MAMAAA, ESTOY PROGRAMANDO!")

// 2) Hacer una Variable que almacene un numero par mayor a 10.

let par = 22

// 3) Hacer una Variable que almacene un numero impar menor a 100.

const impar = 33

// 4) Visualizar en consola la suma de las dos variables numericas que hicimos.

console.log(par + impar)

// 5) Con un cuadro de dialogo, preguntele el nombre  al usuario  que ingresa a la web y guarde su valor en una variable.

let nombreDeUsuario = prompt("Cual es su Nombre?")

// 6) Visualizar en consola, junto al nombre del usuario, el siguiente mensaje: "Bienvenide a nuestra primera web -usuario-"

console.log(`Bienvenide a nuestra primera web ${nombreDeUsuario}`)

// 7) Genere  una nueva variable que almacene el numero 5 y que se multiplique con el numero impar.

let multiplica = 5 * impar
console.log(multiplica)

// 8) Visualice en consola cada uno de los nombres de las participantes del grupo.



// 9) Reste 100 a la variable que multiplica por 5 al numero primo.

console.log(multiplica - 100)

//10) Cotejar el tipo de dato del punto 3 y 5.

console.log(typeof impar)
console.log(typeof nombreDeUsuario)