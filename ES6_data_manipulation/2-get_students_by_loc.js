export default function getStudentsByLocation(listStudents, city) {
  return listStudents.filter(typeof city === 'string');
}
