// 1-promise.js

// Definir la función getFullResponseFromAPI
export default function getFullResponseFromAPI(success) {
  // Devolver una nueva Promise
  return new Promise((resolve, reject) => {
    // Verificar el valor del parámetro booleano
    if (success) {
      // Si es true, resolver la Promise con un objeto que representa una respuesta exitosa
      resolve({ status: 200, body: 'Success' });
    } else {
      // Si es false, rechazar la Promise con un objeto de error
      reject(new Error('The fake API is not working currently'));
    }
  });
}
