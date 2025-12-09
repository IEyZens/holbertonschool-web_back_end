import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const threeClass = [
    { maxStudentsSize: 19 },
    { maxStudentsSize: 20 },
    { maxStudentsSize: 34 }
  ];

  return initializeRooms(threeClass);
}
