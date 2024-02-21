// 2-then.js

// Definir la función handleResponseFromAPI
export default function handleResponseFromAPI(promise) {
  // Retornar una nueva Promise que resuelve con un objeto que contiene status y body
  return promise.then(() => {
    // Cuando la Promise se resuelve
    console.log('Got a response from the API');
    // Devolver un objeto con status 200 y body 'success'
    return { status: 200, body: 'success' };
  }).catch(() => {
    // Cuando la Promise es rechazada
    console.log('Got a response from the API');
    // Devolver un objeto Error vacío
    return new Error();
  });
}
