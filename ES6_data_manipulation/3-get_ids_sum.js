export default function getStudentIdsSum(listOfStudents) {
  return listOfStudents.reduce((sum, students) => sum + students.id, 0);
}
