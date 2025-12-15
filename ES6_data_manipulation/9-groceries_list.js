export default function groceriesList(groceries = []) {
  const map = new Map();

  groceries.forEach(g => {
    if (g && g.name && g.quantity !== undefined) {
      map.set(g.name, g.quantity);
    }
  });

  return map;
}
