export default function cleanSet(set, startString) {
  return set.filter(startString.join('-'));
}
