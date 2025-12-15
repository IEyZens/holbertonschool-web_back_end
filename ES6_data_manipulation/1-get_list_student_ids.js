import getListStudents from './0-get_list_students.js';

export default function getListStudentIds([{ arrayId }]) {
  return arrayId.map(getListStudents());
}
