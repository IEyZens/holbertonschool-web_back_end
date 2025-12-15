function cleanSet(set, startString) {
  const array = Array.from(set);

  const filtered = array
    .filter(value => value.startsWith(startString))
    .map(value => value.slice(startString.length));

  return filtered.join('-');
}
