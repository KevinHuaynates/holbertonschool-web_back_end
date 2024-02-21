// Importar las funciones necesarias
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Definir la función handleProfileSignup
export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    // Llamar a las funciones signUpUser y uploadPhoto
    const userPromise = signUpUser(firstName, lastName);
    const photoPromise = uploadPhoto(fileName);

    // Esperar a que todas las promesas se resuelvan o se rechacen
    const [userResult, photoResult] = await Promise.allSettled([userPromise, photoPromise]);

    // Retornar el arreglo de resultados
    return [
      {
        status: userResult.status,
        value: userResult.status === 'fulfilled' ? userResult.value : `Error: ${userResult.reason.message}`
      },
      {
        status: photoResult.status,
        value: photoResult.status === 'fulfilled' ? photoResult.value : `Error: ${photoResult.reason.message}`
      }
    ];
  } catch (error) {
    // Si hay un error en el manejo de las promesas, imprimir el error y retornar un arreglo vacío
    console.error('Error:', error.message);
    return [];
  }
}

