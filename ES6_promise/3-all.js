// 3-all.js

// Importar las funciones desde utils.js
import { uploadPhoto, createUser } from './utils.js';

// Definir la función handleProfileSignup
export default function handleProfileSignup() {
  // Utilizar Promise.allSettled() para manejar múltiples promesas
  return Promise.allSettled([uploadPhoto(), createUser()])
    .then(results => {
      // Verificar si hay algún error en los resultados
      const errors = results.filter(result => result.status === 'rejected');
      if (errors.length > 0) {
        // Si hay errores, imprimir "Signup system offline"
        console.error("Signup system offline");
        return;
      }
      // Si no hay errores, lograr el cuerpo (body) de la respuesta de uploadPhoto y el firstName y lastName de la respuesta de createUser
      const [photoResponse, userResponse] = results.map(result => result.value);
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    });
}
