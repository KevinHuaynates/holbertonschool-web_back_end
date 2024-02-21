// Importar funciones desde 4-user-promise.js y 5-photo-reject.js
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

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
      { status: 'rejected', reason: `Error: ${fileName} cannot be processed` } // Cambiado "value" a "reason" para reflejar correctamente el motivo del rechazo
    ];
  } catch (error) {
    // Lanzar el error nuevamente, no es necesario un bloque try...catch aquí
    throw error;
  }
}
