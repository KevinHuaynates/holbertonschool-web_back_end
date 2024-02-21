// 6-final-user.js

// Importar funciones desde 4-user-promise.js y 5-photo-reject.js
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

// Definir la función handleProfileSignup
export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    // Llamar a las funciones signUpUser y uploadPhoto y esperar a que se completen
    const promise1 = signUpUser(firstName, lastName);
    const promise2 = uploadPhoto(fileName);

    // Esperar a que todas las promesas se completen
    await Promise.allSettled([promise1, promise2]);
    
    // Retornar un array con el estado y el valor o error de cada promesa
    return [
      { status: 'fulfilled', value: { firstName, lastName } },
      { status: 'rejected', value: `Error: ${fileName} cannot be processed` }
    ];
  } catch (error) {
    // Manejar cualquier error interno y lanzarlo nuevamente
    throw error;
  }
}
