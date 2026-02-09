# Troubleshooting

## "Login required" / commands rejected

The CLI is login-protected. The typical flow is:

```sql
REGISTER admin admin;
LOGIN admin admin;
```

## "Unknown database" / table commands fail

Select an active database before creating tables or querying:

```sql
CREATE DATABASE demo;
USE demo;
```

## Build errors with g++

- Confirm you are using a C++17-capable compiler.
- Ensure include paths match your tree (notably `-I include -I .`).
- Verify all listed source files exist at the specified paths.

## CLI starts but cannot find/create files

CrownDB uses relative directories such as `databases/` and `data/users.sys`. If you launch the CLI from a different working directory, file paths may not resolve where you expect.

## Wrapper returns false / empty result

If `login()` or `execute()` fails, print `last_error()` to see why:

```cpp
if (!db.execute("CREATE DATABASE demo;")) {
  std::cerr << db.last_error() << "\n";
}
```
