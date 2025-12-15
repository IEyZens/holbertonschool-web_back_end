export default function groceriesList(groceries) {
  const map = new Map();

  groceries.forEach(g => map.set(g.name, g.quantity));

  return map;
}
