export default function taskBlock(trueOrFalse) {
  let task = false;  // Cambiado var a let
  let task2 = true;  // Cambiado var a let

  if (trueOrFalse) {
    let task = true;  // Cambiado var a let
    let task2 = false;  // Cambiado var a let
  }

  return [task, task2];
}
