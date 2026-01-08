import fs from 'fs/promises';

export const readDatabase = (filepath) => fs
  .readFile(filepath, 'utf8')
  .then((data) => {
    const lines = data.trim().split('\n');
    const students = {};

    for (const line of lines.slice(1)) {
      if (line) {
        const [firstname, , , field] = line.split(',');
        if (!students[field]) students[field] = [];
        students[field].push(firstname);
      }
    }
    return students;
  })
  .catch(() => {
    throw new Error('Cannot load the database');
  });

export default readDatabase;
