export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce((a, b) => a + b, 0);
}
