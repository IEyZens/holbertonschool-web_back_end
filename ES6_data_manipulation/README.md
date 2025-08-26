# ES6 Data Manipulation Project

## Description
This project focuses on **data manipulation in JavaScript using ES6** features.
It covers array methods (`map`, `filter`, `reduce`), typed arrays, and modern data structures like `Set`, `Map`, and `WeakMap`.

---

## Learning Objectives
By the end of this project, you should be able to explain the following concepts:
- How to use `map`, `filter`, and `reduce` on arrays
- What typed arrays are and how to use them
- The `Set`, `Map`, and `WeakMap` data structures and when to use them

---

## Requirements
- **Environment:** Ubuntu 20.04 LTS
- **NodeJS version:** 20.x.x
- **npm version:** 9.x.x
- **Testing framework:** Jest
- **Linter:** ESLint

Additional requirements:
- Files must end with a new line
- Code must use `.js` extension
- All functions must be exported
- A `README.md` is mandatory
- Run all tests using `npm run test`
- Verify the entire project with `npm run full-test`

---

## Setup Instructions
### Install NodeJS 20.x.x
```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

node -v
npm -v
```

### Install Project Dependencies
```bash
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
npm install --save-dev eslint
```

Then run:
```bash
npm install
```

⚠️ Do **not** push the `node_modules` folder to your repository.

---

## Tasks Overview
1. **Basic List of Objects** – Return an array of student objects.
2. **Get List of IDs** – Extract IDs from an array of student objects using `map`.
3. **Filter by Location** – Return students located in a specific city using `filter`.
4. **Sum IDs** – Compute the sum of student IDs using `reduce`.
5. **Update Grades by City** – Combine `filter` and `map` to update student grades.
6. **Typed Arrays** – Work with `ArrayBuffer` and `DataView`.
7. **Set Data Structure** – Convert an array into a `Set`.
8. **Check Set Values** – Verify if all values of an array exist in a `Set`.
9. **Clean Set** – Build a string from filtered `Set` values.
10. **Map Data Structure** – Build a grocery list using a `Map`.
11. **Update Unique Items** – Modify values in a `Map` where quantity equals 1.

---

## Resources
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
- [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

---

## Usage
Run a specific file with:
```bash
npm run dev filename.js
```

Run all tests with:
```bash
npm test
```

Run full project verification with:
```bash
npm run full-test
```

---

## Author
Project created as part of **Holberton School Web Back End Curriculum**.

---
