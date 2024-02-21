// 3-all.js

// Importar las funciones desde utils.js
import { uploadPhoto, createUser } from './utils.js';

// Definir la función handleProfileSignup
export default function handleProfileSignup() {
  // Retornar una nueva Promise
  return new Promise((resolve, reject) => {
    // Utilizar Promise.all() para manejar múltiples promesas
    Promise.all([uploadPhoto(), createUser()])
      .then(([photoResponse, userResponse]) => {
        // Lograr el cuerpo (body) de la respuesta de uploadPhoto y el firstName y lastName de la respuesta de createUser
        console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
        // Resolver la Promise principal
        resolve();
      })
      .catch(error => {
        // En caso de error, logear "Signup system offline" y rechazar la Promise principal
        console.error("Signup system offline");
        reject(error);
      });
  });
}
