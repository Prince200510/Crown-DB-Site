# Storage Format (high-level)

This page describes the CrownDB on-disk layout at a high level.

## Directories and files

- Databases are stored under:
  - `databases/<name>.db/`
- Tables are stored as:
  - binary `.tbl` files inside the database folder
- Users are stored in:
  - `data/users.sys`

## Practical notes

- `.tbl` files are binary; do not edit them manually.
- Treat the on-disk structure as an internal detail.
- For backups, copy the `databases/` and `data/` directories while the engine is not writing.
