export default function getListStudentIds(id) {
  if (id === null || typeof id === 'string' || id === undefined) {
    return [];
  }

  return id.map(a => a.id);
}
