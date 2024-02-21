// Importar funciones desde 4-user-promise y 5-photo-reject
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Definir la función handleProfileSignup
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Llamar a las funciones signUpUser y uploadPhoto
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);

  // Utilizar Promise.allSettled() para manejar múltiples promesas
  return Promise.allSettled([promise1, promise2])
    .then(results => {
      // Retornar un array con el estado y el valor o error de cada promesa
      return results.map(result => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason.message
      }));
    });
}
