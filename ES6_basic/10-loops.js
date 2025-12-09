export default function appendToEachArrayValue(array, appendString) {
  const newArray = array;
  for (const idx of newArray) {
    const value = newArray[idx];
    newArray[idx] = appendString + value;
  }

  return [appendString + [newArray[0]], appendString + [newArray[1]], appendString + [newArray[2]]];
}
