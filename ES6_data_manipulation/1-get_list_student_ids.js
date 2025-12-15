export default function getListStudentIds([{ arrayId }]) {
  return arrayId.map((a) => a.arrayId);
}
