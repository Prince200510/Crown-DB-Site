# CLI Guide

The CrownDB CLI (`crownDB.exe`) is an interactive terminal.

## Typical session flow

1) Register a user
2) Login
3) Run SQL commands

```sql
REGISTER admin admin;
LOGIN admin admin;
```

## Example session

This is a complete minimal session:

```sql
REGISTER admin admin;
LOGIN admin admin;
CREATE DATABASE demo;
USE demo;
CREATE TABLE users (name VARCHAR(50), age INT);
INSERT INTO users VALUES ('alice', 30);
SELECT * FROM users;
```

## Notes

- You must `USE <db>;` to select the active database before creating tables or inserting/selecting.
- If a command fails, check the wrapper API's `last_error()` (if embedding) or the CLI output.
