// Declare una variable denominada 'challenge' y asígnele un valor inicial '30DaysOfJavaScript'.
let challenge = '30DaysOfJavaScript';

// Imprima la cadena en la consola del navegador usando console.log().
console.log(challenge);

// Imprima la longitud de la cadena en la consola del navegador usando console.log().
console.log(challenge.length);

// Cambie todos los caracteres de la cadena a letras mayúsculas usando el método toUpperCase().
console.log(challenge.toUpperCase());

// Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase().
console.log(challenge.toLowerCase());

// Corte (corta) la primera palabra de la cadena usando el método substr() o substring().
console.log(challenge.substring(2)); // Salida: 'DaysOfJavaScript'

// Corta la frase 'DaysOfJavaScript' de '30DaysOfJavaScript'.
console.log(challenge.substring(2, 14)); // Salida: 'DaysOfJavaScript'

// Compruebe si la cadena contiene la palabra 'Script' usando el método include().
console.log(challenge.includes('Script')); // Salida: true

// Divida la cadena en una matriz usando el método split().
console.log(challenge.split('')); // Salida: ['3', '0', 'D', 'a', 'y', 's', 'O', 'f', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

// Divida la cadena '30díasdeJavaScript' en palabras usando el método split().
console.log(challenge.split(/(?=[A-Z])/)); // Salida: ['30', 'Days', 'Of', 'JavaScript']

// 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon' divide la cadena por la coma y cámbiala a una matriz.
let companies = 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon';
console.log(companies.split(',')); // Salida: ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// Cambie '30díasdeJavaScript' a '30díasdeNode' usando el método replace().
console.log(challenge.replace('JavaScript', 'Node')); // Salida: '30DaysOfNode'

// Carácter en el índice 15 en la cadena '30díasdeJavaScript' usando charAt().
console.log(challenge.charAt(15)); // Salida: 'J'

// Código de carácter de 'J' en la cadena '30díasdeJavaScript' usando charCodeAt().
console.log(challenge.charCodeAt(15)); // Salida: 74

// Utilice indexOf para determinar la posición de la primera aparición de 'a' en '30díasdeJavaScript'.
console.log(challenge.indexOf('a')); // Salida: 1

// Utilice lastIndexOf para determinar la posición de la última aparición de 'a' en '30díasdeJavaScript'.
console.log(challenge.lastIndexOf('a')); // Salida: 3

// Utilice indexOf para encontrar la posición de la primera aparición de la palabra 'porque'.
let sentence = 'No puedes terminar una oración con porque porque porque es una conjunción';
console.log(sentence.indexOf('porque')); // Salida: 35

// Utilice lastIndexOf para encontrar la posición de la última aparición de la palabra 'porque'.
console.log(sentence.lastIndexOf('porque')); // Salida: 47

// Utilice trim() para eliminar cualquier espacio en blanco al principio y al final de una cadena.
let stringWithSpaces = '    30díasdeJavaScript    ';
console.log(stringWithSpaces.trim()); // Salida: '30díasdeJavaScript'

// Utilice startsWith() con la cadena '30DaysOfJavaScript' y haga que el resultado sea verdadero.
console.log(challenge.startsWith('30DaysOf')); // Salida: true

// Utilice endsWith() con la cadena '30díasdeJavaScript' y haga que el resultado sea verdadero.
console.log(challenge.endsWith('JavaScript')); // Salida: true

// Utilice match() para encontrar todas las 'a' en '30díasdeJavaScript'.
console.log(challenge.match(/a/g)); // Salida: ['a', 'a']

// Use concat() y combine '30díasde' y 'JavaScript' en una sola cadena, '30díasdeJavaScript'.
let part1 = '30díasde';
let part2 = 'JavaScript';
console.log(part1.concat(part2)); // Salida: '30díasdeJavaScript'

// Use repeat() para imprimir '30díasdeJavaScript' 2 veces.
console.log(challenge.repeat(2)); // Salida: '30DaysOfJavaScript30DaysOfJavaScript'