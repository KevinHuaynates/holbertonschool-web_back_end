export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const taskInBlock = true; 
    const task2InBlock = false; 
    return [taskInBlock, task2InBlock];
  }

  return [task, task2];
}

