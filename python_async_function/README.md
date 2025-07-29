# 🌀 Python - Async

[![Project](https://img.shields.io/badge/Project-Holberton-blue)]()
[![Language](https://img.shields.io/badge/Python-3.12.3-blue.svg)]()
[![Style](https://img.shields.io/badge/Code%20Style-pycodestyle%202.5.x-yellowgreen)]()
[![License](https://img.shields.io/badge/License-Holberton-green)]()
[![Score](https://img.shields.io/badge/Score-100%25-brightgreen)]()

---

## 📚 Table of Contents

1. [📖 Description](#-description)
2. [🎯 Learning Objectives](#-learning-objectives)
3. [⚙️ Requirements](#️-requirements)
4. [📁 Project Structure](#-project-structure)
5. [📝 Tasks](#-tasks)
6. [💡 Async Python Syntax Cheat Sheet](#-async-python-syntax-cheat-sheet)
7. [🔗 References](#-references)
8. [🧑‍💻 Author](#-author)
9. [🗒️ Notes](#️-notes)

---

## 📖 Description

This project introduces you to **asynchronous programming** in Python using `asyncio`. You will learn how to use `async` and `await` keywords, manage concurrent coroutines, create tasks, and measure asynchronous execution.

---

## 🎯 Learning Objectives

By the end of this project, you should be able to:

- Use `async` and `await` syntax in Python
- Execute asynchronous programs with `asyncio`
- Run concurrent coroutines
- Create and manage `asyncio` tasks
- Use the `random` module for async delays

---

## ⚙️ Requirements

- A `README.md` file at the root of the project is mandatory
- Allowed editors: `vi`, `vim`, `emacs`
- All code will be interpreted on **Ubuntu 20.04 LTS** using **Python 3.12.3**
- All files must end with a new line and be executable
- The first line of all files should be `#!/usr/bin/env python3`
- Follow `pycodestyle` (version 2.5.x)
- All functions and coroutines must be type-annotated
- All modules and functions must have proper documentation (docstrings)
- Docstrings must be real sentences explaining the purpose of the element

---

## 📁 Project Structure

```text
holbertonschool-web_back_end/
└── python_async_function/
    ├── 0-basic_async_syntax.py
    ├── 1-concurrent_coroutines.py
    ├── 2-measure_runtime.py
    ├── 3-tasks.py
    ├── 4-tasks.py
    ├── tests/
    └── README.md
```

---

## 📝 Tasks

### 0️⃣ The basics of async

Write an asynchronous coroutine `wait_random` that waits for a random delay between 0 and `max_delay` seconds, and returns it.

**Python Example:**
```python
async def wait_random(max_delay: int = 10) -> float:
    """Wait for a random delay and return the value."""
    ...
```
---

### 1️⃣ Execute multiple coroutines at the same time

Write an async routine `wait_n` that spawns `wait_random` n times with the specified `max_delay`, and returns a list of all the delays in ascending order.

**Python Example:**
```python
async def wait_n(n: int, max_delay: int) -> list[float]:
    """Spawn wait_random n times and return delays in ascending order."""
    ...
```
---

### 2️⃣ Measure the runtime

Create a `measure_time` function that measures the total execution time for `wait_n(n, max_delay)`, and returns the average execution time.

**Python Example:**
```python
def measure_time(n: int, max_delay: int) -> float:
    """Return average time for running wait_n."""
    ...
```
---

### 3️⃣ Tasks

Write a function `task_wait_random` that returns an `asyncio.Task` for `wait_random`.

**Python Example:**
```python
def task_wait_random(max_delay: int) -> asyncio.Task:
    """Return an asyncio Task for wait_random."""
    ...
```
---

### 4️⃣ Tasks

Write a function `task_wait_n` similar to `wait_n` but using `task_wait_random`.

**Python Example:**
```python
async def task_wait_n(n: int, max_delay: int) -> list[float]:
    """Spawn task_wait_random n times and return delays in ascending order."""
    ...
```
---

## 💡 Async Python Syntax Cheat Sheet

**Asynchronous Coroutine**
```python
import asyncio

async def my_coroutine():
    await asyncio.sleep(1)
    print("Done")
```

**Running a Coroutine**
```python
asyncio.run(my_coroutine())
```

**Creating and Running Multiple Tasks**
```python
tasks = [asyncio.create_task(my_coroutine()) for _ in range(5)]
await asyncio.gather(*tasks)
```

**Type Annotation for Async Functions**
```python
from typing import List
async def foo() -> int:
    return 42
```

**Using random.uniform**
```python
import random
delay = random.uniform(0, 10)
```

---

## 🔗 References

- [Async IO in Python: A Complete Walkthrough](https://realpython.com/async-io-python/)
- [asyncio - Asynchronous I/O](https://docs.python.org/3/library/asyncio.html)
- [random.uniform](https://docs.python.org/3/library/random.html#random.uniform)

---

## 🧑‍💻 Author

Project developed by Thomas Roncin as part of the Holberton School curriculum.

---

## 🗒️ Notes

- Use `async`/`await` for asynchronous operations
- Use `mypy` and `pycodestyle` for validation
- Always use docstrings with real sentences
