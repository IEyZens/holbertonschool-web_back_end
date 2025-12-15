export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents.filter(s => s.location === city).map(s => s.grade = newGrades[city] !== undefined ? newGrades[city] : 'N/A');
}
