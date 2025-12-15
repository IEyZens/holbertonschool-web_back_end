export default function getStudentsByLocation(loc) {
  return loc.filter(getStudentsByLocation(loc));
}
