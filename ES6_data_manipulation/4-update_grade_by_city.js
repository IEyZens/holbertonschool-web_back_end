export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const studentsCity = listOfStudents.filter((student) => student.location === city);

  const studentsGrades = studentsCity.map((student) => {
    const grade = newGrades.find((g) => g.studentId === student.id);

    return {
      ...student,
      grade: grade ? grade.grade : "N/A",
    };
  });

  return studentsGrades;
}
