# SQL Reference

This reference documents only the SQL subset supported by CrownDB.

## Databases

### CREATE DATABASE

```sql
CREATE DATABASE demo;
```

### DROP DATABASE

```sql
DROP DATABASE demo;
```

### USE

```sql
USE demo;
```

## Tables

### CREATE TABLE

```sql
CREATE TABLE users (name VARCHAR(50), age INT);
```

### DROP TABLE

```sql
DROP TABLE users;
```

### TRUNCATE TABLE

```sql
TRUNCATE TABLE users;
```

### ALTER TABLE ADD

```sql
ALTER TABLE users ADD email VARCHAR(120);
```

### ALTER TABLE DROP

```sql
ALTER TABLE users DROP email;
```

## Inserts

### INSERT INTO ... VALUES

```sql
INSERT INTO users VALUES ('alice', 30);
```

## Selects

### SELECT all columns

```sql
SELECT * FROM users;
```

### Projection (select specific columns)

```sql
SELECT name, age FROM users;
```

### WHERE filtering

```sql
SELECT * FROM users WHERE age = 30;
```

The documentation guarantees support for `WHERE col = value;` and the engine may support additional comparison operators as implemented by the parser.

## Aggregates

Supported aggregates:

- `COUNT(*)`
- `SUM(col)`
- `AVG(col)`
- `MIN(col)`
- `MAX(col)`

Examples:

```sql
SELECT COUNT(*) FROM users;
SELECT MAX(age) FROM users;
```

### Grouped aggregate pattern (implicit grouping)

The following pattern is supported (implicit grouping by the non-aggregate column):

```sql
SELECT name, MAX(age) FROM users;
```

## Termination

Statements are terminated with a semicolon (`;`).
