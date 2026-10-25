---
title: SQL
year: 1974
era: 1970s
designers: [Donald D. Chamberlin, Raymond F. Boyce]
paradigms: [declarative, set-oriented]
typing: static, strong
summary: The declarative language for relational databases, and probably the most widely used programming language in the world.
links:
  - label: ISO/IEC 9075-1:2023 (SQL standard, Framework)
    url: https://www.iso.org/standard/76583.html
  - label: PostgreSQL SQL language documentation
    url: https://www.postgresql.org/docs/current/sql.html
  - label: SQLite SQL syntax reference
    url: https://sqlite.org/lang.html
  - label: Codd's 1970 paper "A Relational Model of Data for Large Shared Data Banks"
    url: https://dl.acm.org/doi/10.1145/362384.362685
---

## Hello, World!

```sql
SELECT 'Hello, World!' AS greeting;
```

## About

SQL ("Structured Query Language") lets you describe *what* data you want from tables, using `SELECT`, `JOIN`, `WHERE` and `GROUP BY`, while the database's query planner decides *how* to retrieve it. The same language defines schemas, enforces constraints, controls transactions and manages permissions. Although every vendor adds extensions, the core is standardised and is understood by PostgreSQL, MySQL, SQLite, Oracle, SQL Server, DB2 and most analytic engines, making SQL an essential skill for developers, analysts and data scientists alike.

## History

Edgar F. Codd published the relational model at IBM in 1970. Donald Chamberlin and Raymond Boyce designed SEQUEL ("Structured English Query Language") in 1974 to query IBM's System R prototype; the name was shortened to SQL for trademark reasons. Relational Software (now Oracle) shipped the first commercial implementation in 1979, ahead of IBM's own SQL/DS and DB2. ANSI standardised SQL in 1986 and ISO in 1987, with major revisions in 1992 (SQL-92), 1999, 2003, 2011, 2016 (JSON) and 2023 (property graph queries). Despite repeated predictions of its demise, SQL's influence has only grown.
