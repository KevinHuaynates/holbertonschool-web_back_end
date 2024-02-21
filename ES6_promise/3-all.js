// 3-all.js

// Importar funciones desde utils.js
import { uploadPhoto, createUser } from './utils.js';

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
    // Manejar el error si ocurre
    console.error('Signup system offline');
  }
}
