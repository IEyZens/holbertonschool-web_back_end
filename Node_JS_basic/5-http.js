const http = require('http');
const fs = require('fs');
const path = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students' && req.method === 'GET') {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        res.end('Cannot load the database');
        return;
      }

      res.write('This is the list of our students\n');

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      const students = lines.slice(1);

      res.write(`Number of students: ${students.length}\n`);

      const fields = {};

      students.forEach((line) => {
        const parts = line.split(',');
        const firstname = parts[0];
        const field = parts[3];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      for (const [field, names] of Object.entries(fields)) {
        res.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
      };

      res.end();
    });
  }
});

app.listen(1245, () => {

});

module.exports = app;
