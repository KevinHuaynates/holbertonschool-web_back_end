// Archivo: 9-groceries_list.js

// Definir la función groceriesList
function groceriesList() {
  // Crear un nuevo mapa (Map) con los artículos de la lista de compras y sus cantidades
  const groceries = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);

  return groceries;
}

// Exportar la función groceriesList para que pueda ser utilizada en otros archivos
export default groceriesList;
