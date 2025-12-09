export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const idx of newArray) {
    newArray.push(appendString + array[idx]);
  }

  return newArray;
}
