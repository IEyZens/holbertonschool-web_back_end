# ES6 Classes Project

## Description
This project introduces **JavaScript ES6 Classes**.
It covers how to define classes, add methods, use static methods, extend classes, and apply metaprogramming concepts such as symbols.

---

## Learning Objectives
By the end of this project, you should be able to explain the following concepts:
- How to define a Class
- How to add methods to a class
- Why and how to add a static method to a class
- How to extend a class from another
- Metaprogramming and symbols in ES6

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
1. **ClassRoom** – Implement a class with a `maxStudentsSize` attribute.
2. **Initialize Rooms** – Return an array of multiple `ClassRoom` objects.
3. **HolbertonCourse** – Create a course class with getters, setters, and type validation.
4. **Currency** – Create a class with attributes, getters, setters, and a method to display currency.
5. **Pricing** – Implement a class with methods and a static method for price conversion.
6. **Building** – Abstract class requiring a method override.
7. **SkyHighBuilding** – Inherits from `Building` and overrides evacuation messages.
8. **Airport** – Create a class with default string representation as airport code.
9. **HolbertonClass** – Implement primitive casting (`Number` and `String`).
10. **Hoisting** – Fix hoisting-related issues with class definitions.
11. **Car** – Implement a class with cloning functionality using ES6 Symbols.

---

## Resources
- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Metaprogramming](https://developer.mozilla.org/en-US/docs/Glossary/Metaprogramming)

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
