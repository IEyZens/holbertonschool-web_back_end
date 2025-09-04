# NodeJS Basics Project

## Description
This project introduces **Node.js fundamentals** and the ecosystem around it (Core modules, the Process API, file I/O, HTTP servers, Express, and developer tooling like Babel and Nodemon). You’ll progressively build small programs and HTTP services, then reorganize an Express app using controllers and routes.

---

## Learning Objectives
By the end of this project, you should be able to explain (without Google):
- Run JavaScript using **NodeJS**
- Use **NodeJS modules** (`require`, `module.exports`)
- Read files with **fs** (sync and async)
- Use **process** to access CLI arguments and environment vars
- Create a small HTTP server using **Node’s `http`** module
- Create a small HTTP server using **Express**
- Create advanced routes with **Express**
- Use **ES6** with Node via **Babel**
- Use **Nodemon** for faster development

---

## Requirements
- **OS:** Ubuntu 20.04 LTS
- **Node:** 20.x.x
- **npm:** 9.x.x (or 10.x as installed with Node 20)
- All files must end with a new line
- Code uses the **`.js`** extension
- A **`README.md`** at project root is mandatory
- Your code will be tested with **Jest** (`npm run test`) and verified with **ESLint**
- Your code must pass tests and lint; check with **`npm run full-test`**
- **Export everything** using CommonJS: `module.exports = myFunction;`
- Provide: `package.json`, `babel.config.js`, `.eslintrc.js`, and `database.csv`

---

## Provided File
`database.csv`
```
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
```

---

## Setup
Install NodeJS 20.x.x (example):
```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install -y nodejs
node -v
npm -v
```

Install project dev dependencies (inside your project folder):
```bash
npm install
```
> The repository includes `package.json`, `babel.config.js`, `.eslintrc.js`. **Do not** commit `node_modules`.

Helpful tools you may use locally:
- **Mocha** or **Jest** documentation
- **Nodemon** for auto-reload during development
- **Babel** to run ES6+ with Node

---

## Scripts (typical)
- `npm run dev` – run development server or script (see tasks that expose servers)
- `npm test` – run Jest tests
- `npm run full-test` – run both tests and lint

(Your exact script definitions depend on the provided `package.json`.)

---

## Tasks Overview
1. **0-console.js – STDOUT print**
   - Implement `displayMessage(string)` that prints the string to STDOUT.
   - Export with `module.exports = displayMessage;`

2. **1-stdin.js – Read from stdin**
   - CLI program that greets, reads a name, echoes it, and on exit prints a closing message.

3. **2-read_file.js – Synchronous CSV parse**
   - `countStudents(path)` reads `database.csv` **synchronously**.
   - On error, **throw** `Error('Cannot load the database')`.
   - On success, log:
     - `Number of students: X`
     - Per field: `Number of students in FIELD: N. List: first1, first2, ...`

4. **3-read_file_async.js – Asynchronous CSV parse**
   - `countStudents(path)` returns a **Promise** and logs the same statistics **asynchronously**.
   - Reject with `Error('Cannot load the database')` if file is not accessible.

5. **4-http.js – HTTP server (core `http`)**
   - Export `app` (server instance).
   - Listen on **port 1245**.
   - Respond **plain text**: `Hello Holberton School!` for any endpoint.

6. **5-http.js – HTTP server (core `http`) with routes**
   - Export `app`. Listen on **1245**.
   - `GET /` → `Hello Holberton School!`
   - `GET /students` → First line `This is the list of our students` then the same stats produced by task **3**.
   - Database file name is passed as a CLI argument to this script.

7. **6-http_express.js – Express hello**
   - Export `app`. Listen on **1245**.
   - `GET /` → `Hello Holberton School!`
   - Unknown routes show default Express 404 page.

8. **7-http_express.js – Express with routes + stats**
   - Export `app`. Listen on **1245**.
   - `GET /` → `Hello Holberton School!`
   - `GET /students` → Same content as task **3** (uses CLI argument for DB filename).

9. **8 – Full Express server structure (`full_server/`)**
   - **`full_server/utils.js`**
     - `readDatabase(filePath)` → returns a **Promise**.
     - Resolves to an **object** mapping field → **array of first names** (by appearance order).
     - Rejects on read errors.
   - **`full_server/controllers/AppController.js`**
     - Class `AppController` with static `getHomepage(req, res)` → status **200**, body `Hello Holberton School!`.
   - **`full_server/controllers/StudentsController.js`**
     - Class `StudentsController` with:
       - `getAllStudents(req, res)`:
         - Status **200**.
         - First line `This is the list of our students`.
         - Then **for each field**, in **alphabetical order (case-insensitive)**:
           - `Number of students in FIELD: N. List: first1, first2, ...`
         - On DB error → status **500**, `Cannot load the database`.
       - `getAllStudentsByMajor(req, res)`:
         - Accepts `:major` path param. Only **`CS`** or **`SWE`** are valid.
         - On invalid major → status **500**, `Major parameter must be CS or SWE`.
         - On success → `List: first1, first2, ...` for that field.
         - On DB error → status **500**, `Cannot load the database`.
   - **`full_server/routes/index.js`**
     - Map `/` → `AppController.getHomepage`
     - Map `/students` and `/students/:major` → `StudentsController` methods
   - **`full_server/server.js`**
     - Build the Express app, **use routes**, listen on **1245**.
     - **Export the Express app**: `export default app;`
     - **DB filename is a process arg**; retrieve it at request time inside controllers.
   - **Package script** (if running from project root):
     `nodemon --exec babel-node --presets babel-preset-env ./full_server/server.js ./database.csv`

---

## Usage Examples
- Run simple scripts:
  ```bash
  node 0-main.js
  node 1-stdin.js
  ```

- Start HTTP servers:
  ```bash
  node 4-http.js
  curl localhost:1245
  ```

- Start Express servers:
  ```bash
  node 6-http_express.js
  curl localhost:1245/
  ```

- Start the full Express app (example command):
  ```bash
  npm run dev
  # or explicitly:
  nodemon --exec babel-node --presets babel-preset-env ./full_server/server.js ./database.csv
  ```

---

## Tips
- Empty trailing lines in the CSV are **invalid** and should be ignored.
- Keep outputs **exactly** as specified (punctuation, spacing, and casing matter for tests).
- Prefer **async I/O** for non-blocking servers (see task 3).
- Always **export** functions/classes with CommonJS unless a task explicitly uses ES6 modules in the full server.

---

## Resources
- Node JS getting started
- Process API doc
- Child process
- Express getting started
- Mocha documentation
- Nodemon documentation

(See official docs for each topic.)

---

## Author
Project created as part of the **Holberton School Web Back End Curriculum**.
