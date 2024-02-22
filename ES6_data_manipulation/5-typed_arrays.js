// Archivo: 5-typed_arrays.js

// Definir la función createInt8TypedArray
function createInt8TypedArray(length, position, value) {
  // Verificar si la posición está dentro del rango
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Crear un nuevo ArrayBuffer con la longitud dada
  const buffer = new ArrayBuffer(length);

  // Crear un DataView para manipular el ArrayBuffer
  const view = new DataView(buffer);

  // Asignar el valor Int8 en la posición especificada
  view.setInt8(position, value);

  return view;
}

// Exportar la función createInt8TypedArray para que pueda ser utilizada en otros archivos
export default createInt8TypedArray;
