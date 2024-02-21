// Importar las funciones necesarias
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Definir la función handleProfileSignup
export default async function handleProfileSignup(firstName, lastName, fileName) {
  // Llamar a las funciones signUpUser y uploadPhoto
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)
  ];

  // Esperar a que todas las promesas se resuelvan o se rechacen
  const results = await Promise.allSettled(promises);

  // Mapear los resultados para obtener el formato deseado
  const profileResults = results.map(result => {
    if (result.status === 'fulfilled') {
      return { status: 'fulfilled', value: result.value };
    } else {
      return { status: 'rejected', value: result.reason };
    }
  });

  // Retornar el arreglo de resultados
  return profileResults;
}
