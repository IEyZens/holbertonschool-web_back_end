import getListStudents from './0-get_list_students.js';

export default function getListStudentIds([{ arrayId }]) {
  if (typeof arrayId !== 'object') {
    return []
  } else {
    return arrayId.map(getListStudents());
  }
}
