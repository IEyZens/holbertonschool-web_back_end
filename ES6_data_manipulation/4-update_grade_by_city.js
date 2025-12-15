export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents.filter(s => s.location === city).map(newGrades.city);
}
