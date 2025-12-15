export default function groceriesList(groceries) {
  return groceries.map(g => g.name && g.quantity);
}
