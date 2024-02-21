// 9-try.js

// Definir la función guardrail
export default function guardrail(mathFunction) {
  // Crear un array para almacenar los resultados y mensajes
  const queue = [];
  
  try {
    // Ejecutar la función mathFunction y agregar el resultado a la queue
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    // Capturar cualquier error y agregar el mensaje de error a la queue
    queue.push(error.toString()); // Cambiado a error.toString()
  } finally {
    // Agregar el mensaje "Guardrail was processed" a la queue
    queue.push('Guardrail was processed');
  }
  
  // Retornar el array queue
  return queue;
}
