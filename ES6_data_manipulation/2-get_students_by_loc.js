export default function getStudentsByLocation(listStudents, city) {
  return listStudents.filter(s => s.city);
}
