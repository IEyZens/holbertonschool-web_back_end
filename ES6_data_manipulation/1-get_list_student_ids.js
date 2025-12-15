export default function getListStudentIds(id) {
  return id.map((a) => getListStudentIds(a));
}
