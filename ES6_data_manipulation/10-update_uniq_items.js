// Archivo: 10-update_uniq_items.js

// Definir la función updateUniqueItems
function updateUniqueItems(map) {
  // Verificar si el argumento no es un mapa
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterar sobre cada entrada del mapa
  for (let [item, quantity] of map.entries()) {
    // Verificar si la cantidad es 1
    if (quantity === 1) {
      // Si la cantidad es 1, actualizar la cantidad a 100
      map.set(item, 100);
    }
  }
}

// Exportar la función updateUniqueItems para que pueda ser utilizada en otros archivos
export default updateUniqueItems;
