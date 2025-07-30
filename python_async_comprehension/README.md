# ⚡ Python - Async Comprehension

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
6. [💡 Async Comprehension Syntax Cheat Sheet](#-async-comprehension-syntax-cheat-sheet)
7. [🔗 References](#-references)
8. [🧑‍💻 Author](#-author)
9. [🗒️ Notes](#️-notes)

---

## 📖 Description

This project introduces you to **asynchronous generators** and **async comprehensions** in Python. You will learn how to write async generators, use async comprehensions, and properly type-annotate async functions and generators.

---

## 🎯 Learning Objectives

By the end of this project, you should be able to:

- Write asynchronous generators using `async def` and `yield`
- Use async comprehensions to collect values from async generators
- Type-annotate async generators and comprehensions

---

## ⚙️ Requirements

- Allowed editors: `vi`, `vim`, `emacs`
- All code will be interpreted on **Ubuntu 20.04 LTS** using **Python 3.12.3**
- All files should end with a new line and be executable
- The first line of all files should be `#!/usr/bin/env python3`
- A `README.md` file at the root of the project is mandatory
- Your code should use the `pycodestyle` style (version 2.5.x)
- All functions and coroutines must be type-annotated
- All modules and functions must have proper documentation (docstrings, real sentences)

---

## 📁 Project Structure

```text
holbertonschool-web_back_end/
└── python_async_comprehension/
    ├── 0-async_generator.py
    ├── 1-async_comprehension.py
    ├── 2-measure_runtime.py
    ├── tests/
    └── README.md
```

---

## 📝 Tasks

### 0️⃣ Async Generator

Write a coroutine `async_generator` that yields a random number between 0 and 10, after waiting 1 second, 10 times.

**Python Example:**
```python
import asyncio
import random
from typing import AsyncGenerator

async def async_generator() -> AsyncGenerator[float, None]:
    """Yield a random float 10 times, waiting 1 second each time."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
```
---

### 1️⃣ Async Comprehensions

Write a coroutine `async_comprehension` that collects 10 random numbers from `async_generator` using an async comprehension and returns them as a list.

**Python Example:**
```python
from typing import List

async def async_comprehension() -> List[float]:
    """Collect 10 random numbers using async comprehension."""
    return [i async for i in async_generator()]
```
---

### 2️⃣ Run time for four parallel comprehensions

Write a coroutine `measure_runtime` that runs `async_comprehension` four times in parallel with `asyncio.gather`, measures the total run time, and returns it.

**Python Example:**
```python
import asyncio
import time

async def measure_runtime() -> float:
    """Run async_comprehension four times in parallel and return total run time."""
    start = time.perf_counter()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    return time.perf_counter() - start
```
---

## 💡 Async Comprehension Syntax Cheat Sheet

**Async Generator**
```python
async def my_gen() -> AsyncGenerator[int, None]:
    for i in range(5):
        await asyncio.sleep(1)
        yield i
```

**Async Comprehension**
```python
values = [i async for i in my_gen()]
```

**Running Multiple Coroutines**
```python
await asyncio.gather(*[async_comprehension() for _ in range(4)])
```

**Type-hint for Async Generator**
```python
from typing import AsyncGenerator
async def gen() -> AsyncGenerator[float, None]:
    ...
```

---

## 🔗 References

- [PEP 530 – Asynchronous Comprehensions](https://peps.python.org/pep-0530/)
- [What’s New in Python: Asynchronous Comprehensions / Generators](https://docs.python.org/3/whatsnew/3.6.html#pep-530-asynchronous-comprehensions)
- [Type-hints for generators](https://docs.python.org/3/library/typing.html#typing.Generator)

---

## 🧑‍💻 Author

Project developed by Thomas Roncin as part of the Holberton School curriculum.

---

## 🗒️ Notes

- Use async generators and comprehensions for efficient asynchronous iteration.
- Type-hint all generators and coroutines.
- Use proper docstrings and coding style.
