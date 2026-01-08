import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const data = await readDatabase(process.argv[2]);
      let output = 'This is the list of our students\n';

      // Tri alphabétique (insensible à la casse)
      const fields = Object.keys(data).sort((a, b) => a.toLowerCase()
        .localeCompare(b.toLowerCase()));

      for (const field of fields) {
        const count = data[field].length;
        const list = data[field].join(', ');
        output += `Number of students in ${field}: ${count}. List: ${list}\n`;
      }
      return response.status(200).send(output.trim());
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase(process.argv[2]);
      const list = data[major] ? data[major].join(', ') : '';
      return response.status(200).send(`List: ${list}`);
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
