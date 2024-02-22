// Archivo: 5-typed_arrays.js

// Definir la función createInt8TypedArray
function createInt8TypedArray(length, position, value) {
  // Verificar si la posición está dentro del rango
  if (position < 0 || position >= length) {
    throw new Error("Position outside range");
  }

  // Crear un nuevo ArrayBuffer con la longitud dada
  const buffer = new ArrayBuffer(length);

  // Crear una vista TypedArray para manipular el ArrayBuffer
  const view = new Int8Array(buffer);

  // Asignar el valor en la posición especificada
  view[position] = value;

  return view;
}

// Exportar la función createInt8TypedArray para que pueda ser utilizada en otros archivos
export default createInt8TypedArray;
