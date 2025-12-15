export default function getListStudentIds(id) {
  return id.map(getListStudentIds(id));
}
