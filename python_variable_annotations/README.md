# 🐍 Python - Variable Annotations

[![Project](https://img.shields.io/badge/Project-Holberton-blue)]()
[![Language](https://img.shields.io/badge/Python-3.12.3-blue.svg)]()
[![Style](https://img.shields.io/badge/Code%20Style-pycodestyle%202.7.0-yellowgreen)]()
[![License](https://img.shields.io/badge/License-Holberton-green)]()
[![Score](https://img.shields.io/badge/Score-100%25-brightgreen)]()

---

## 📚 Table of Contents

1. [📖 Description](#-description)
2. [🎯 Learning Objectives](#-learning-objectives)
3. [⚙️ Requirements](#️-requirements)
4. [📁 Project Structure](#-project-structure)
5. [📝 Tasks](#-tasks)
6. [💡 Type Annotation Syntax Cheat Sheet](#-type-annotation-syntax-cheat-sheet)
7. [🔗 References](#-references)
8. [🧑‍💻 Author](#-author)
9. [🗒️ Notes](#️-notes)

---

## 📖 Description

This project introduces and practices **type annotations** in Python 3. You'll learn how to specify variable and function signatures using type hints, explore complex types, and validate code using `mypy`. The project also touches on concepts such as duck typing.

---

## 🎯 Learning Objectives

By the end of this project, you should be able to:

- Explain the purpose and benefits of type annotations in Python 3
- Use type annotations for function parameters and return values
- Annotate variables with specific types
- Understand and apply the concept of duck typing
- Validate code using `mypy`
- Work with complex types using the `typing` module

---

## ⚙️ Requirements

- All code is compiled/interpreted on **Ubuntu 20.04 LTS** using **Python 3.9**
- Use only allowed editors: `vi`, `vim`, or `emacs`
- All files must be executable and end with a new line
- The first line of each file should be exactly `#!/usr/bin/env python3`
- Use `pycodestyle` (version 2.5) for code style
- All modules, classes, and functions must have documentation (docstrings) with real sentences (not just words)
- Each file's length will be tested using `wc`
- A `README.md` file at the root of the project is mandatory

---

## 📁 Project Structure

```
holbertonschool-web_back_end/
└── python_variable_annotations/
	├── 0-add.py
	├── 1-concat.py
	├── 2-floor.py
	├── 3-to_str.py
	├── 4-define_variables.py
	├── 5-sum_list.py
	├── 6-sum_mixed_list.py
	├── 7-to_kv.py
	├── 8-make_multiplier.py
	├── 9-element_length.py
	├── tests/
	└── README.md
```

---

## 📝 Tasks

### 0️⃣ Basic annotations - add

Type-annotated function `add` that takes two floats as arguments and returns their sum as a float.

### 1️⃣ Basic annotations - concat

Type-annotated function `concat` that concatenates two strings and returns a string.

### 2️⃣ Basic annotations - floor

Type-annotated function `floor` that takes a float as argument and returns its floor as an int.

### 3️⃣ Basic annotations - to string

Type-annotated function `to_str` that takes a float and returns its string representation.

### 4️⃣ Define variables

Define and annotate:

- `a`: integer, value = 1
- `pi`: float, value = 3.14
- `i_understand_annotations`: boolean, value = True
- `school`: string, value = "Holberton"

### 5️⃣ Complex types - list of floats

Type-annotated function `sum_list` that takes a list of floats and returns their sum as a float.

### 6️⃣ Complex types - mixed list

Type-annotated function `sum_mixed_list` that takes a list of integers and floats and returns their sum as a float.

### 7️⃣ Complex types - string and int/float to tuple

Type-annotated function `to_kv` that takes a string and an int or float, and returns a tuple: the string, and the square of the int/float (as a float).

### 8️⃣ Complex types - functions

Type-annotated function `make_multiplier` that takes a float and returns a function that multiplies a float by that multiplier.

### 9️⃣ Let's duck type an iterable object

Annotate a function that takes an iterable of sequences and returns a list of tuples, each containing a sequence and its length.

---

## 💡 Type Annotation Syntax Cheat Sheet

### 🔹 Basic Types

```python
def add(a: float, b: float) -> float:
"""Adds two floats and returns a float."""
return a + b
```

### 🔹 String Concatenation

```python
def concat(str1: str, str2: str) -> str:
"""Concatenates two strings."""
return str1 + str2
```

### 🔹 Floor Function

```python
def floor(n: float) -> int:
"""Returns the floor of a float as an int."""
import math
return math.floor(n)
```

### 🔹 To String

```python
def to_str(n: float) -> str:
"""Returns the string representation of a float."""
return str(n)
```

### 🔹 Variable Annotation Example

```python
a: int = 1
pi: float = 3.14
i_understand_annotations: bool = True
school: str = "Holberton"
```

### 🔹 Complex Types (from typing)

```python
from typing import List, Tuple, Union, Callable, Iterable, Sequence
```

```python
def sum_list(input_list: List[float]) -> float:
return sum(input_list)
```

```python
def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
return sum(mxd_lst)
```

```python
def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
return (k, float(v \* v))
```

```python
def make_multiplier(multiplier: float) -> Callable[[float], float]:
def multiplier_func(x: float) -> float:
return x \* multiplier
return multiplier_func
```

```python
def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
return [(i, len(i)) for i in lst]
```

---

## 🔗 References

- Python 3 typing documentation: https://docs.python.org/3/library/typing.html
- MyPy cheat sheet: https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html

---

## 🧑‍💻 Author

Project developed by Thomas Roncin as part of the Holberton School curriculum.

---

## 🗒️ Notes

- Always use appropriate imports from `typing` for complex types.
- Use `mypy` to validate your type annotations: `mypy your_file.py`
- Docstrings must be **real sentences**, not just a word or two.
