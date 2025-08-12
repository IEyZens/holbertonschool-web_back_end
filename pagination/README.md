# 📄 Pagination

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
6. [💡 Pagination Concepts Cheat Sheet](#-pagination-concepts-cheat-sheet)
7. [🔗 References](#-references)
8. [🧑‍💻 Author](#-author)
9. [🗒️ Notes](#️-notes)

---

## 📖 Description

This project covers **Pagination** in Python by implementing helper functions, simple pagination, hypermedia pagination, and deletion-resilient pagination strategies.

---

## 🎯 Learning Objectives

By the end of this project, you should be able to:

- Implement pagination with `page` and `page_size` parameters
- Return paginated datasets with **hypermedia metadata**
- Create **deletion-resilient** pagination logic
- Work with CSV datasets
- Validate inputs and handle out-of-range requests gracefully

---

## ⚙️ Requirements

- Python 3.12.3
- All code is executed on **Ubuntu 20.04 LTS**
- Use `pycodestyle` **2.7.0**
- All files executable, ending with a newline
- All functions must be **type-annotated** and **documented**
- Dataset file: `Popular_Baby_Names.csv`

---

## 📁 Project Structure

```
pagination/
├── 0-simple_helper_function.py
├── 1-simple_pagination.py
├── 2-hypermedia_pagination.py
├── 3-hypermedia_del_pagination.py
├── Popular_Baby_Names.csv
└── README.md
```

---

## 📝 Tasks

### 0️⃣ Simple helper function
**File:** `0-simple_helper_function.py`
Function `index_range(page, page_size)` returns tuple `(start_index, end_index)`.

```python
def index_range(page: int, page_size: int) -> tuple[int, int]:
    return ((page - 1) * page_size, page * page_size)
```

---

### 1️⃣ Simple pagination
**File:** `1-simple_pagination.py`
Implements `Server.get_page(page, page_size)` to return rows from CSV.

---

### 2️⃣ Hypermedia pagination
**File:** `2-hypermedia_pagination.py`
Adds `Server.get_hyper(page, page_size)` to return metadata:

```python
{
  "page_size": int,
  "page": int,
  "data": list,
  "next_page": int or None,
  "prev_page": int or None,
  "total_pages": int
}
```

---

### 3️⃣ Deletion-resilient hypermedia pagination
**File:** `3-hypermedia_del_pagination.py`
Uses an indexed dataset to avoid skipping items when rows are deleted.

---

## 💡 Pagination Concepts Cheat Sheet

- **Simple Pagination:** Uses `page` & `page_size` to slice data
- **Hypermedia Pagination:** Includes metadata to allow easy navigation
- **Deletion-resilient Pagination:** Maintains item continuity even after deletions

```mermaid
graph LR
A[Client Request: page=2, size=10] --> B[Server: Calculate start/end]
B --> C[Return rows 10-19]
C --> D[Include next/prev page metadata]
```

---

## 🔗 References

- [REST API Design: Pagination](https://restfulapi.net/pagination/)
- [HATEOAS](https://restfulapi.net/hateoas/)

---

## 🧑‍💻 Author

Thomas Roncin
Holberton School

---

## 🗒️ Notes

- Use `assert` to validate inputs
- Always handle empty results gracefully
