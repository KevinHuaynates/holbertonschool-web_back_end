// Archivo: 8-clean_set.js

// Definir la función cleanSet
function cleanSet(set, startString = '') {
  // Verificar si startString no es una cadena
  if (typeof startString !== 'string') {
    return '';
  }

  // Inicializar una matriz vacía para almacenar los valores que coinciden con el startString
  const matches = [];

  // Iterar sobre cada elemento del conjunto
  for (const value of set) {
    // Verificar si el valor comienza con el startString o si startString está vacío
    if (value.startsWith(startString)) {
      // Si coincide, agregar el valor (sin startString) a la matriz matches
      matches.push(value.slice(startString.length));
    }
  }

  // Si no se proporciona startString, unir los elementos del conjunto con "-" y devolver la cadena resultante
  // De lo contrario, unir los elementos de la matriz matches con "-" y devolver la cadena resultante
  return startString === '' ? Array.from(set).join("-") : matches.join("-");
}

// Exportar la función cleanSet para que pueda ser utilizada en otros archivos
export default cleanSet;
