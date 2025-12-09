import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  return ClassRoom(this.maxStudentsSize(19, 20, 34));
}
