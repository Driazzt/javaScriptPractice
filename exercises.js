// 1. Desarrolla una función en JavaScript llamada 'leapYear' que tome un año como argumento y devuelva true si es un año bisiesto y false si no lo es, siguiendo las reglas del calendario gregoriano.
let year = parseInt(prompt("Introduce el año"));
// se puede usar parseInt(prompt) (solo para numeros) usando el prompt("introduce x") y sale una ventana en el liveserver para poder probar si efectivamente funciona.
function leapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}
leapYear(year);

// 2. Crea una función llamada 'clasificarTriangulo' que tome tres argumentos representando las longitudes de los lados de un triángulo y determine si es equilátero, isósceles o escaleno, imprimiendo el resultado por consola.

function clasificarTriangulo(lado1, lado2, lado3) {
  if (lado1 != Number || lado2 != Number || lado3 != Number) {
    throw new Error`Esto no es número`();
  } else if (lado1 === lado2 && lado2 === lado3) {
    console.log("Equilatero");
  } else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
    console.log("Escaleno");
  } else {
    console.log("Isosceles");
  }
}

// 3. Crea un programa que solicite al usuario dos números, realice la división del primero por el segundo y muestre el cociente por consola. Asegúrate de manejar todos los casos para evitar errores.

// 4. Crea un programa que solicite al usuario ingresar una contraseña y luego verifique si cumple con los requisitos mínimos: al menos 8 caracteres, al menos una letra mayúscula y al menos un número. Informa al usuario si la contraseña ingresada es válida o no.
const contraseña = prompt("Ingresa tu contraseña");

const minimo8Caracteres = contraseña.lenght >= 8;
const tieneMayusculas = /[A-Z]/.test(contraseña);
const tieneNumero = /\d/.test(contraseña);
// las barras / - / son irregulares con un monton de opciones que se pueden hacer en su interior ahorrandonos trabajo!!

if (minimo8Caracteres && tieneMayusculas && tieneNumero) {
  console.log("contraseña valida");
} else {
  console.log("contraseña no valida");
}

// 5. Desarrolla un programa en JavaScript que calcule el Índice de Masa Corporal (IMC) de una persona. El IMC se calcula utilizando la fórmula: IMC = peso / (altura^2), donde el peso se mide en kilogramos y la altura en metros. Además informa al usuario sobre su estado de salud según el IMC calculado teniendo en cuenta esta tabla: IMC < 18.5: "Bajo peso" || 18.5 ≤ IMC < 25: "Peso normal" ||25 ≤ IMC < 30: "Sobrepeso" ||IMC ≥ 30: "Obesidad"

// 6. Desarrolla un programa en JavaScript que liste todos los números primos hasta un número dado por el usuario.

function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

function listarPrimos(hastaNumero) {
  const primos = [];
  for (let i = 2; i <= hastaNumero; i++) {
    if (esPrimo(i)) {
      primos.push(i);
    }
  }
  return primos;
}

const hastaNumero = parseInt(prompt("Ingresa un numero:"));
listarPrimos(hastaNumero);
console.log(listarPrimos(hastaNumero));

// 7. Crea una función que convierta temperaturas entre Celsius y Fahrenheit.
