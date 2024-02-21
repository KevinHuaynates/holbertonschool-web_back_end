// 0-promise.js

// Definir la función getResponseFromAPI
export default function getResponseFromAPI() {
  // Devolver una nueva Promise
  return new Promise((resolve) => {
    // Implementar la lógica para resolver la Promise
    // Por ejemplo, puedes simular una respuesta exitosa con un tiempo de espera
    setTimeout(() => {
      // Resuelve la Promise con algún valor, por ejemplo, un objeto vacío
      resolve({});
    }, 1000); // Tiempo de espera de 1 segundo
  });
}
