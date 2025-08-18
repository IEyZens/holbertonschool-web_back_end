# ES6 Basics Project

## Description

This project introduces **ECMAScript 6 (ES6)**, also known as ECMAScript 2015, a major update to JavaScript that brought many new features and improvements.
It focuses on variables, functions, template literals, objects, iterators, and more.

---

## Learning Objectives

By the end of this project, you should be able to explain the following concepts:

- What ES6 is
- New features introduced in ES6
- Difference between constants and variables
- Block-scoped variables (`let`, `const`)
- Arrow functions and default parameters
- Rest and spread function parameters
- String templating using template literals
- Object creation and shorthand property syntax
- Iterators and `for...of` loops

---

## Requirements

- **Environment:** Ubuntu 20.04 LTS
- **NodeJS version:** 20.x.x
- **npm version:** 9.x.x
- **Testing framework:** Jest
- **Linter:** ESLint (with provided rules)

Additional requirements:

- Files must end with a new line
- Code must use `.js` extension
- All functions must be exported
- A `README.md` is mandatory

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

1. **Const or let?** – Replace `var` with `const` and `let`.
2. **Block Scope** – Prevent variable overwriting using block scope.
3. **Arrow Functions** – Rewrite standard functions with arrow syntax.
4. **Parameter Defaults** – Use default parameter values in functions.
5. **Rest Parameter** – Count arguments passed using rest syntax.
6. **Spread Syntax** – Concatenate arrays and strings using spread.
7. **Template Literals** – Use ES6 template strings.
8. **Object Shorthand** – Simplify object property assignments.
9. **Computed Property Names** – Build objects dynamically with keys.
10. **ES6 Method Properties** – Use shorthand syntax for object methods.
11. **For...of Loops** – Replace `for` loops with `for...of`.
12. **Iterator** – Create an object with department and employees.
13. **Report Object** – Create a report object with employees by department.

---

## Resources

- [ECMAScript 6 - ECMAScript 2015](https://262.ecma-international.org/6.0/)
- [Statements and Declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest Parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Iterables and Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)

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

---

## Author

Project created as part of **Holberton School Web Back End Curriculum**.

---
