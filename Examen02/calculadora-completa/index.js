// Importar todas las librerías de operaciones matemáticas
const paqueteSuma = require('2025a-swgr1-fasg-suma');
const paqueteResta = require('2025a-swgr1-fasg-resta');
const paqueteMultiplicacion = require('2025a-swgr1-menq-multiplicacion');
const paqueteDivision = require('2025a-swgr1-menq-division');

console.log('=== EXAMEN 2do Bimestre ===\n');

// Realizar las operaciones solicitadas
console.log('Operaciones solicitadas:');

// suma(2,1); // resultado 3
const resultadoSuma = paqueteSuma.suma(2, 1);
console.log(`suma(2, 1) = ${resultadoSuma}`);

// resta(3,2); // resultado 1
const resultadoResta = paqueteResta.resta(3, 2);
console.log(`resta(3, 2) = ${resultadoResta}`);

// multiplicacion(2,5); // resultado 10
const resultadoMultiplicacion = paqueteMultiplicacion.multiplicacion(2, 5);
console.log(`multiplicacion(2, 5) = ${resultadoMultiplicacion}`);

// division(9,3); // resultado 3
const resultadoDivision = paqueteDivision.division(9, 3);
console.log(`division(9, 3) = ${resultadoDivision}`);

console.log('\n=== TODAS LAS OPERACIONES COMPLETADAS EXITOSAMENTE ===');

// Información adicional sobre las librerías utilizadas
console.log('\n--- Librerías utilizadas ---');
console.log('• Suma: 2025a-swgr1-fasg-suma (Francisco Sánchez)');
console.log('• Resta: 2025a-swgr1-fasg-resta (Francisco Sánchez)');
console.log('• Multiplicación: 2025a-swgr1-menq-multiplicacion (Maicol Nasimba)');
console.log('• División: 2025a-swgr1-menq-division (Maicol Nasimba)');
