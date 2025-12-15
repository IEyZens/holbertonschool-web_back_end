export default function getListStudentIds([{ arrayId }]) {
  if (typeof arrayId !== 'object') {
    return []
  } else {
    return new Map([arrayId])
  }
}
