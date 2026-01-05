const fs = require('node:fs');

function countStudents(filepath) {
  const data = fs.readFileSync('./database.csv', 'utf8');

  if (!data) {
    console.log('Cannot load the database');
  } else {
    console.log(`Number of students: ${filepath}`);
  }
  console.log(`Number of students in FIELD: ${filepath}. List: ${filepath}`);
}

module.exports = countStudents;
