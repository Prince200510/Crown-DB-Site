# Overview

CrownDB is a small **C++17 file-based database engine** designed for embedded/local usage.

It ships in two forms:

- **CLI terminal**: `crownDB.exe` (interactive, login-protected)
- **C++ wrapper library**: `CrownDB` (public header: `Crowndb.h`)

## Authentication model (CLI)

The CLI requires you to register and then log in before running SQL.

```sql
REGISTER user pass;
LOGIN user pass;
```

## Supported SQL subset

This documentation only covers the SQL subset CrownDB supports:

- Databases: `CREATE DATABASE name;`, `DROP DATABASE name;`, `USE name;`
- Tables: `CREATE TABLE t (col TYPE, ...);`, `DROP TABLE t;`, `TRUNCATE TABLE t;`,
  `ALTER TABLE t ADD col TYPE;`, `ALTER TABLE t DROP col;`
- Inserts: `INSERT INTO t VALUES (...);`
- Selects:
  - `SELECT * FROM t;`
  - `SELECT col1, col2 FROM t;`
  - `SELECT * FROM t WHERE col = value;` (plus other operators implemented by the parser)
  - Aggregates: `COUNT(*)`, `SUM(col)`, `AVG(col)`, `MIN(col)`, `MAX(col)`
  - Grouped aggregate pattern (implicit grouping): `SELECT name, MAX(age) FROM users;`

## Non-goals / disclaimers

- CrownDB is **not MySQL compatible**.
- The SQL engine supports a **subset only** (listed above).
- Tables are stored as **binary `.tbl` files**; treat the on-disk format as an internal implementation detail.
