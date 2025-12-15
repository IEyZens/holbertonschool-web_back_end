export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents.map(s => {
    if (s.location === city) {
      s.grade = newGrades[city] !== undefined ? newGrades[city] : 'N/A';
    }
    return s;
  });
}
