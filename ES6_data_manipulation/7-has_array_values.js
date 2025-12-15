export default function hasValuesFromArray(set, array) {
  if (array === set) {
    return false;
  } else if (array !== set) {
    return true;
  }
}
