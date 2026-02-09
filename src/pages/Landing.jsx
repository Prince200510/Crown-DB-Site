import TerminalBlock from '../components/TerminalBlock.jsx'

function CodePanel({ language, children }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className="flex items-center justify-between border-b border-border bg-background px-4 py-2">
        <div className="font-mono text-xs font-semibold text-muted">{language}</div>
      </div>
      <pre className="m-0 overflow-x-auto bg-terminalBg p-4 font-mono text-sm text-terminalFg">
        <code>{children}</code>
      </pre>
    </div>
  )
}

export default function Landing() {
  return (
    <div className="space-y-14">
      <section className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Embedded / file-based • C++17
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            CrownDB — a small C++17 file-based database
          </h1>

          <p className="max-w-prose text-lg text-muted">
            CrownDB is a lightweight embedded database engine you ship with your application. It stores data on disk using a simple
            folder layout and provides both an interactive CLI terminal (<span className="font-mono">crownDB.exe</span>) and a reusable
            C++ wrapper library (<span className="font-mono">CrownDB</span>).
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/docs/overview"
              className="rounded-md border border-primary bg-primary px-4 py-2 text-sm font-medium text-background hover:opacity-95"
            >
              Read the docs
            </a>
            <a
              href="/#download"
              className="rounded-md border border-accent bg-accent px-4 py-2 text-sm font-semibold text-onAccent hover:opacity-95"
            >
              Download
            </a>
            <span className="text-sm text-muted">
              CLI + library wrapper, static file layout.
            </span>
          </div>

          <div className="rounded-lg border border-border bg-background p-5">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">Highlights</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-text">
              <li>
                Interactive, login-protected CLI terminal (<span className="font-mono">crownDB.exe</span>)
              </li>
              <li>
                Embeddable C++ wrapper library (public header: <span className="font-mono">Crowndb.h</span>)
              </li>
              <li>
                File-based storage: databases under <span className="font-mono">databases/</span>, users under{' '}
                <span className="font-mono">data/users.sys</span>
              </li>
              <li>Small SQL subset for databases, tables, inserts, selects, and aggregates</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <TerminalBlock
            title="CLI vibe"
            lines={[
              'REGISTER admin admin;',
              'LOGIN admin admin;',
              'CREATE DATABASE demo;',
              'USE demo;',
              'CREATE TABLE users (name VARCHAR(50), age INT);',
              "INSERT INTO users VALUES ('alice', 30);",
              'SELECT * FROM users;',
            ]}
          />

          <div className="rounded-lg border border-border bg-background p-4 text-sm text-muted">
            Prompt style is shown as <span className="font-mono text-text">crownDB&gt;</span>.
            <div className="mt-2 text-xs">
              Disclaimer: prompt styling is inspired by classic database terminals only.
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">Quickstart</h2>
        <p className="max-w-prose text-muted">
          Build the CLI with MinGW g++ on Windows (MSYS2), run <span className="font-mono">crownDB.exe</span>, then create a database and table.
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">Build CLI (Windows / MSYS2 MinGW g++)</h3>
            <CodePanel language="sh">{`g++ -std=c++17 -I include -I . \\
  src/main.cpp src/Cli.cpp src/SQLParser.cpp src/Utils.cpp src/Record.cpp \\
  engine/EngineAPI.cpp engine/Database.cpp engine/Table.cpp engine/StorageEngine.cpp engine/UserManager.cpp engine/Session.cpp \\
  -o bin/crownDB.exe`}</CodePanel>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">Example CLI session</h3>
            <CodePanel language="sql">{`REGISTER admin admin;
LOGIN admin admin;
CREATE DATABASE demo;
USE demo;
CREATE TABLE users (name VARCHAR(50), age INT);
INSERT INTO users VALUES ('alice', 30);
SELECT * FROM users;`}</CodePanel>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">Use as a library</h2>
        <p className="max-w-prose text-muted">
          If you want CrownDB inside your app, include <span className="font-mono">Crowndb.h</span> and use the wrapper API to register/login,
          then execute or query SQL.
        </p>
        <CodePanel language="cpp">{`#include "Crowndb.h"
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
}`}</CodePanel>
        <p className="text-sm text-muted">
          Wrapper methods shown here: <span className="font-mono">register_user</span>, <span className="font-mono">login</span>,
          <span className="font-mono">execute</span>, <span className="font-mono">query</span>, <span className="font-mono">last_error</span>.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">Storage model</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-background p-5">
            <h3 className="mb-2 font-semibold">Where data lives</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-text">
              <li>
                Databases are stored under <span className="font-mono">databases/&lt;name&gt;.db/</span>
              </li>
              <li>
                Tables are stored as binary <span className="font-mono">.tbl</span> files inside the database folder
              </li>
              <li>
                Users are stored in <span className="font-mono">data/users.sys</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-background p-5">
            <h3 className="mb-2 font-semibold">What to expect</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-text">
              <li>Designed for local / embedded usage where a file tree is acceptable.</li>
              <li>Table files are binary; treat them as implementation details.</li>
              <li>Back up by copying the <span className="font-mono">databases/</span> and <span className="font-mono">data/</span> directories while the engine is not writing.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Disclaimers</h2>
        <div className="rounded-lg border border-border bg-background p-5 text-sm text-text">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              CrownDB is <span className="font-semibold">not MySQL-compatible</span>. The CLI prompt style is inspired by classic database terminals only.
            </li>
            <li>
              CrownDB supports a <span className="font-semibold">SQL subset only</span>. See the docs for the exact supported statements.
            </li>
            <li>
              Table storage uses a <span className="font-semibold">binary format</span> (files ending in <span className="font-mono">.tbl</span>). Treat it as internal.
            </li>
          </ul>
        </div>
      </section>

      <section id="download" className="space-y-5 scroll-mt-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Download</h2>
            <p className="mt-1 max-w-prose text-muted">
              Grab the ready-to-browse project outputs as ZIP files. These are static downloads served by the site.
            </p>
          </div>
          <div className="hidden font-mono text-xs text-muted sm:block">/public/downloads</div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-background p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-semibold">Library + headers</div>
                <div className="mt-1 font-mono text-xs text-muted">crown_db_output/</div>
              </div>
              <a
                href="/downloads/crown_db_output.zip"
                className="rounded-md border border-accent bg-accent px-4 py-2 text-sm font-semibold text-onAccent hover:opacity-95"
              >
                Download ZIP
              </a>
            </div>
            <p className="mt-3 text-sm text-muted">
              Includes the wrapper header (<span className="font-mono">include/Crowndb.h</span>), libs, and runtime folders.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-background p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-semibold">CLI terminal binary</div>
                <div className="mt-1 font-mono text-xs text-muted">crown_db_terminal/</div>
              </div>
              <a
                href="/downloads/crown_db_terminal.zip"
                className="rounded-md border border-primary bg-primary px-4 py-2 text-sm font-medium text-background hover:opacity-95"
              >
                Download ZIP
              </a>
            </div>
            <p className="mt-3 text-sm text-muted">
              Includes <span className="font-mono">crownDB.exe</span>.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-background p-5 text-sm text-muted">
          Note: downloads are provided “as is”. The SQL engine is a subset and the on-disk table format is binary.
        </div>
      </section>
    </div>
  )
}
