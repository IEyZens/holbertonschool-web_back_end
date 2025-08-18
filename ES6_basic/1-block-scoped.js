export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // variables inside should not overwrite the outer ones
  }

  return [task, task2];
}
