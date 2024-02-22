// Archivo: 7-has_array_values.js

// Definir la función hasValuesFromArray
function hasValuesFromArray(set, array) {
  // Iterar sobre cada elemento del array
  for (let const of array) {
    // Verificar si el elemento no está presente en el conjunto
    if (!set.has(value)) {
      return false; // Si no está presente, devolver falso
    }
  }
  return true; // Si todos los elementos están presentes, devolver verdadero
}

// Exportar la función hasValuesFromArray para que pueda ser utilizada en otros archivos
export default hasValuesFromArray;
