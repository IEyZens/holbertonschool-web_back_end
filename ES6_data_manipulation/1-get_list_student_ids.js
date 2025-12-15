export default function getListStudentIds(id) {
  if (id === null) {
    return [];
  }

  return id.map(a => a.id);
}
