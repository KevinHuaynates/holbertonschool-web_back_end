// 3-all.js

// Importar las funciones desde utils.js
import { uploadPhoto, createUser } from './utils.js';

// Definir la función handleProfileSignup
export default function handleProfileSignup() {
  // Utilizar Promise.all() para manejar múltiples promesas
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      // Lograr el cuerpo (body) de la respuesta de uploadPhoto y el firstName y lastName de la respuesta de createUser
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(error => {
      // En caso de error, logear "Signup system offline"
      console.error("Signup system offline");
    });
}
