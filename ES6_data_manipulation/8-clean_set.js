export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') return '';

  const array = Array.from(set);

  return array
    .filter(value => value.startsWith(startString))
    .map(value => value.slice(startString.length))
    .join('-');
}
