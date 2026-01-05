const fs = require("node:fs");

function countStudents(filepath) {
  try {
    const data = fs.readFileSync(filepath, "utf8");

    const lines = data.split(/\r?\n/).filter((line) => line.trim() !== "");

    if (lines.length === 0) return;

    const headers = lines[0].split(",");

    const students = lines
      .slice(1)
      .map((line) => line.split(","))
      .filter((cols) => cols.length === headers.length);

    const fields = {};

    for (const student of students) {
      const entry = {};
      headers.forEach((h, i) => {
        entry[h.trim()] = student[i].trim();
      });

      const { field, firstname } = entry;
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }

    console.log(`Number of students: ${students.length}`);

    for (const [field, names] of Object.entries(fields)) {
      const msg = `Number of students in ${field}: ${
        names.length
      }. List: ${names.join(", ")}`;
      console.log(msg);
    }
  } catch (err) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
