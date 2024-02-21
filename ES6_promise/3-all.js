// 3-all.js

// Importar las funciones desde utils.js
import { uploadPhoto, createUser } from './utils.js';

// Definir la función handleProfileSignup
export default function handleProfileSignup() {
  // Crear un array para almacenar las promesas
  const promises = [uploadPhoto(), createUser()];

  // Utilizar Promise.all() para manejar múltiples promesas
  return Promise.all(promises.map(promise =>
    promise.catch(error => {
      // En caso de error, logear "Signup system offline"
      console.error("Signup system offline");
      // Retornar una promesa rechazada para mantener el flujo
      return Promise.reject(error);
    })
  ))
  .then(([photoResponse, userResponse]) => {
    // Lograr el cuerpo (body) de la respuesta de uploadPhoto y el firstName y lastName de la respuesta de createUser
    console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
  });
}
