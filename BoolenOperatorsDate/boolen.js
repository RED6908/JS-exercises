// Declaración de variables
var firstName = "Carlos";
var lastName = "Antonio";
var country = "Mexico";
var city = "Quintana roo";
var age = 19;
var isMarried = false;

//tipos de datos usando el operador typeof
console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean

// Comprobación de igualdad de valor y tipo
console.log(10 === 10); // true

// Intento de convertir un número decimal a un número entero usando parseInt
console.log(parseInt('9.8')); // 9 (parseInt convierte '9.8' a 9)

// Comprobación de valores booleanos
console.log(true); // true
console.log(false); // false

// Comparaciones y operadores de igualdad
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true (igualdad estricta, verifica valor y tipo)
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false (compara el valor, no el tipo)
console.log(4 == '4'); // true (compara el valor, no el tipo)
console.log(4 === '4'); // false (compara el valor y el tipo)

// Uso del objeto Date para obtener información sobre la fecha y hora actuales
var currentDate = new Date();

console.log("Año actual: " + currentDate.getFullYear());
console.log("Mes actual: " + (currentDate.getMonth() + 1)); // Se suma 1 porque los meses comienzan desde 0
console.log("Fecha actual: " + currentDate.getDate());
console.log("Día actual: " + currentDate.getDay()); // 0 para Domingo, 1 para Lunes, ..., 6 para Sábado
console.log("Hora actual: " + currentDate.getHours());
console.log("Minutos actuales: " + currentDate.getMinutes());

var secondsSince1970 = Math.floor(currentDate.getTime() / 1000);
console.log("Número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora: " + secondsSince1970);

// Pedir al usuario que ingrese la base y la altura del triángulo
var base = parseFloat(prompt("Ingrese la base del triángulo: "));
var altura = parseFloat(prompt("Ingrese la altura del triángulo: "));

// Calcular el área del triángulo
var area = 0.5 * base * altura;

// Mostrar el resultado
console.log("El área del triángulo es: " + area);

// Pedir al usuario que ingrese los lados del triángulo
var ladoA = parseFloat(prompt("Ingrese el lado A del triángulo: "));
var ladoB = parseFloat(prompt("Ingrese el lado B del triángulo: "));
var ladoC = parseFloat(prompt("Ingrese el lado C del triángulo: "));

// Calcular el perímetro del triángulo
var perimetro = ladoA + ladoB + ladoC;

// Mostrar el resultado
console.log("El perímetro del triángulo es: " + perimetro);