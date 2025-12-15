export default function cleanSet(set, startString) {
  const array = Array.from(set);

  const result = array
    .filter(value => value.startsWith(startString))
    .map(value => value.slice(startString.length))
    .join('-');

  return result;
}
