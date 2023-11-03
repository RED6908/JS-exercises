//1
var edad = prompt("Ingrese su edad:");

if (edad >= 18) {
    alert("Tiene la edad suficiente para conducir.");
} else {
    var añosFaltantes = 18 - edad;
    alert("Te faltan " + añosFaltantes + " años para conducir.");
}

//2
var myAge = prompt("Ingrese su edad:");
var yourAge = prompt("Ingrese la edad de otra persona:");

if (myAge > yourAge) {
    console.log("Eres mayor que yo.");
} else if (myAge < yourAge) {
    console.log("Yo soy mayor que tú.");
} else {
    console.log("Tenemos la misma edad.");
}

//3
var a = prompt("Ingrese el primer número:");
var b = prompt("Ingrese el segundo número:");

if (a > b) {
    console.log("a es mayor que b");
} else {
    console.log("a es menor o igual que b");
}

var a = prompt("Ingrese el primer número:");
var b = prompt("Ingrese el segundo número:");

var resultado = (a > b) ? "a es mayor que b" : "a es menor o igual que b";
console.log(resultado);

//4
var mes = prompt("Ingrese el nombre del mes:");

switch (mes) {
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        console.log("La temporada es Otoño.");
        break;
    case "Diciembre":
    case "Enero":
    case "Febrero":
        console.log("La temporada es Invierno.");
        break;
    case "Marzo":
    case "Abril":
    case "Mayo":
        console.log("La temporada es Primavera.");
        break;
    case "Junio":
    case "Julio":
    case "Agosto":
        console.log("La temporada es Verano.");
        break;
    default:
        console.log("Mes inválido. Por favor, ingrese un mes válido.");
}

//5
var puntaje = prompt("Ingrese el puntaje del estudiante:");

if (puntaje >= 80 && puntaje <= 100) {
    console.log("Calificación: A");
} else if (puntaje >= 70 && puntaje < 80) {
    console.log("Calificación: B");
} else if (puntaje >= 60 && puntaje < 70) {
    console.log("Calificación: C");
} else if (puntaje >= 50 && puntaje < 60) {
    console.log("Calificación: D");
} else if (puntaje >= 0 && puntaje < 50) {
    console.log("Calificación: F");
} else {
    console.log("Puntaje inválido. Por favor, ingrese un puntaje válido.");
}