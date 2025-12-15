export default function getStudentIdsSum(listStudents, id) {
  return listStudents.reduce((acc, value) => acc + value, id);
}
