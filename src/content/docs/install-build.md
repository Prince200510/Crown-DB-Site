# Install / Build (Windows + MinGW g++)

This page documents building the CrownDB CLI with **MSYS2 MinGW g++** on Windows.

## Build the CLI

Run the following command from your project root (paths match the CrownDB source layout):

```sh
g++ -std=c++17 -I include -I . \
  src/main.cpp src/Cli.cpp src/SQLParser.cpp src/Utils.cpp src/Record.cpp \
  engine/EngineAPI.cpp engine/Database.cpp engine/Table.cpp engine/StorageEngine.cpp engine/UserManager.cpp engine/Session.cpp \
  -o bin/crownDB.exe
```

It produces:

- `bin/crownDB.exe`

## Run

Start the CLI:

- Run `bin/crownDB.exe`

Then register + login before running SQL.
