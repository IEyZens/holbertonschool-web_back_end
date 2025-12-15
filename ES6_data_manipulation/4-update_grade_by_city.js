export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents
    .filter(s => s.location === city)
    .map(s => {
      const gradeObj = newGrades.find(g => g.studentId === s.id);
      s.grade = gradeObj ? gradeObj.grade : 'N/A';
      return s;
    });
}
