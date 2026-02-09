# C++ API Reference (wrapper)

The wrapper library provides a convenient C++ interface for the same SQL subset exposed in the CLI.

Include the public header:

```cpp
#include "Crowndb.h"
```

## Class: `CrownDB`

### `register_user(user, pass)`

Registers a new user.

### `login(user, pass)`

Logs in and starts an authenticated session.

In typical usage this returns a boolean success value:

```cpp
if (!db.login("admin", "admin")) {
  std::cerr << db.last_error() << "\n";
}
```

### `execute(sql)`

Executes a statement that does not return a result set (e.g., create/drop, insert, alter).

Typical usage checks a boolean success value:

```cpp
if (!db.execute("CREATE DATABASE demo;")) {
  std::cerr << db.last_error() << "\n";
}
```

### `query(sql)`

Runs a `SELECT ...` and returns the textual result.

```cpp
std::cout << db.query("SELECT * FROM users;");
```

### `use_database(name)`

Selects the active database (equivalent to `USE name;`).

### `last_error()`

Returns the last error message produced by the engine/wrapper.

## Full example

```cpp
#include "Crowndb.h"
#include <iostream>

int main() {
    CrownDB db;

    db.register_user("admin", "admin");
    if (!db.login("admin", "admin")) {
        std::cerr << db.last_error() << "\n";
        return 1;
    }

    if (!db.execute("CREATE DATABASE demo;")) {
        std::cerr << db.last_error() << "\n";
        return 1;
    }

    db.use_database("demo");
    db.execute("CREATE TABLE users (name VARCHAR(50), age INT);");
    db.execute("INSERT INTO users VALUES ('alice', 30);");

    std::cout << db.query("SELECT * FROM users;");
}
```
