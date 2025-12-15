import getListStudents from './0-get_list_students.js';

export default function getListStudentIds(id) {
  return id.map(getListStudents(id));
}
