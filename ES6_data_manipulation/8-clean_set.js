export default function cleanSet(set, startString) {
  return startString.every((element) => set.has(element).join('-'))
}
