// 8-try.js

// Definir la función divideFunction
export default function divideFunction(numerator, denominator) {
  // Verificar si el denominador es igual a 0
  if (denominator === 0) {
    // Lanzar un error si el denominador es 0
    throw new Error('cannot divide by 0');
  }
  
  // Devolver el resultado de la división
  return numerator / denominator;
}
