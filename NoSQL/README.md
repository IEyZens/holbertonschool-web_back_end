# NoSQL Project

## Description
This project focuses on learning and practicing NoSQL databases, specifically **MongoDB**, both through shell commands and Python integration with the **PyMongo** library.
It covers the differences between SQL and NoSQL, data modeling concepts, and CRUD operations on document-oriented databases.

---

## Learning Objectives
By the end of this project, you should be able to explain the following concepts without external help:
- What NoSQL means
- Differences between SQL and NoSQL
- What ACID properties are
- What a document storage is
- The main types of NoSQL databases
- Benefits of using NoSQL
- How to query data from a NoSQL database
- How to insert, update, and delete data in a NoSQL database
- How to use MongoDB in the shell and with Python

---

## Requirements
- **Environment:** Ubuntu 20.04 LTS
- **MongoDB version:** 4.4
- **Python version:** 3.9
- **PyMongo version:** 4.8.0
- All files must end with a new line
- Python files must follow **pycodestyle** (version 2.5.*)

---

## Tasks Overview
1. **List all databases** in MongoDB using shell commands.
2. **Create or use a database** from the MongoDB shell.
3. **Insert a document** into a collection.
4. **List all documents** from a collection.
5. **Filter documents** matching a specific value.
6. **Count the number of documents** in a collection.
7. **Update documents** by adding a new attribute.
8. **Delete documents** matching specific criteria.
9. **List all documents in Python** using `pymongo`.
10. **Insert a document in Python** using dynamic fields.
11. **Update topics** in a school document.
12. **Find schools by topic**.
13. **Analyze Nginx logs** in MongoDB and display statistics.

---

## Resources
- [NoSQL Databases Explained](https://www.mongodb.com/nosql-explained)
- [What is NoSQL?](https://aws.amazon.com/nosql/)
- [MongoDB with Python Crash Course](https://www.youtube.com/watch?v=E-1xI85Zog8)
- [MongoDB Shell Methods](https://www.mongodb.com/docs/manual/reference/method/)

---

## Installation
### Install MongoDB 4.4 on Ubuntu 20.04:
```bash
sudo apt update
sudo apt install -y mongodb
```
Follow the [official MongoDB installation guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/).

### Install Python dependencies:
```bash
pip install pymongo==4.8.0
```

---

## Usage
- For MongoDB shell tasks:
```bash
cat script.js | mongo my_database
```
- For Python tasks:
```bash
python3 script.py
```

---

## Author
Project created as part of **Holberton School Web Back End Curriculum**.

---
