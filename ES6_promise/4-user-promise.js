// 4-user-promise.js

// Definir la función signUpUser
export default function signUpUser(firstName, lastName) {
  // Devolver una promesa resuelta con un objeto que contiene firstName y lastName
  return Promise.resolve({ firstName, lastName });
}
