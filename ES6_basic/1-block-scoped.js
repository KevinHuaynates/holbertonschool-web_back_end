export default function taskBlock(trueOrFalse) {
  const task = false; // Se cambió let a const
  const task2 = true; // Se cambió let a const

  if (trueOrFalse) {
    const taskInBlock = true; // Se cambió let a const y se le dio un nombre diferente
    const task2InBlock = false; // Se cambió let a const y se le dio un nombre diferente
    return [taskInBlock, task2InBlock]; // Se agregó un return aquí para que devuelva el resultado del bloque condicional
  }

  return [task, task2];
}
