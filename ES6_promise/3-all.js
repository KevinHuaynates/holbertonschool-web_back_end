// 3-all.js

// Importar la función uploadPhoto desde utils.js
import { uploadPhoto, createUser } from './utils';

// Definir la función handleProfileSignup
export default async function handleProfileSignup() {
  try {
    // Llamar a las funciones uploadPhoto y createUser
    const [photoResponse, userResponse] = await Promise.all([uploadPhoto(), createUser()]);
    
    // Extraer los datos necesarios de las respuestas
    const { body: photoBody } = photoResponse;
    const { firstName, lastName } = userResponse;
    
    // Imprimir el resultado en la consola
    console.log(`${photoBody} ${firstName} ${lastName}`);
  } catch (error) {
    // Manejar el error si ocurre al cargar la foto
    console.error('Signup system offline');
  }
}

// Eliminar los espacios en blanco al final del archivo
