// 5-photo-reject.js

// Definir la función uploadPhoto
export default function uploadPhoto(fileName) {
  // Devolver una promesa rechazada con un mensaje de error personalizado
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
