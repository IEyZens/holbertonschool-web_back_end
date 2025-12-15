export default function cleanSet(set, startString) {
  return startString((element) => set.has(element).join('-'))
}
