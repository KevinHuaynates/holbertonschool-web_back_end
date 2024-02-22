// Archivo: 8-clean_set.js

// Definir la función cleanSet
function cleanSet(set, startString) {
  // Inicializar una matriz vacía para almacenar los valores que coinciden con el startString
  const matches = [];

  // Iterar sobre cada elemento del conjunto
  for (const value of set) {
    // Verificar si el valor comienza con el startString
    if (value.startsWith(startString)) {
      // Si coincide, agregar el valor (sin startString) a la matriz matches
      matches.push(value.slice(startString.length));
    }
  }

  // Unir los elementos de la matriz matches con "-" y devolver la cadena resultante
  return matches.join("-");
}

// Exportar la función cleanSet para que pueda ser utilizada en otros archivos
export default cleanSet;
