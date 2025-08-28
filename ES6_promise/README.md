# ES6 Promises Project

## Description
This project introduces **JavaScript Promises and async/await**.
It covers how to create promises, handle success and failure, chain promises, use async functions, and manage errors with try/catch.

---

## Learning Objectives
By the end of this project, you should be able to explain the following concepts:
- Promises (how, why, and what)
- How to use the `then`, `resolve`, and `catch` methods
- How to use every method of the `Promise` object
- How and when to throw errors
- How to use the `await` operator
- How to define and use an `async` function

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
npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
npm install --save-dev eslint
```

Then run:
```bash
npm install
```

⚠️ Do **not** push the `node_modules` folder to your repository.

---

## Tasks Overview
1. **Return a Promise** – Create a simple promise with `getResponseFromAPI`.
2. **Conditional Promise** – Resolve or reject based on a boolean parameter.
3. **Handle Response** – Chain `then`, `catch`, and `finally` for a promise.
4. **Multiple Promises** – Resolve `uploadPhoto` and `createUser` together.
5. **Sign Up User** – Return a resolved promise with user info.
6. **Reject a Promise** – Return a rejected promise with an error.
7. **All Settled** – Use `Promise.allSettled` to handle multiple outcomes.
8. **Load Balancer** – Return the fastest promise result.
9. **Divide Function** – Throw an error when dividing by zero.
10. **Guardrail** – Ensure a queue always appends "Guardrail was processed".

---

## Resources
- [JavaScript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

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
