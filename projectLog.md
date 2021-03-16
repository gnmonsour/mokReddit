# MokReddit

## 2021/03/15

Set up project

- npm init
- log and notes file
- add 'typescript'
- add '@types/node'
- add 'ts-node'
- add 'src' folder
- add file 'index.ts'
- ran `tsc --init`, to create configuration file for typescript 'tsconfig.json'
- tested tsc is working with direct call on index.ts
  - it generated an index.js within the folder
- tested ts-node
  - it output the program without transpiling a file
- to grok behaviour and setup, added scripts for:

  - watch, dev, start and start-ts (see package.json)

- start-ts alone will compile and output without transpiled file

      - does not see output path of tsconfig

      - won't be used much but does show tsc functioning

- watch has cascade impact on [start,dev] scripts generating transpiled file in output path specified in tsconfig

---

GOTCHA - Avoid side effects in development

- run watch before other scripts to ensure synchronization to newest change

---

- added git scm
- first commit

### Mikro-ORM

- installing mikro-orm

```cmd
  npm i -S @mikro-orm/cli @mikro-orm/core @mikro-orm/migrations @mikro-orm/postgresql pg
```

- updated postgresql to 13.2
- reviewed mikro-orm website, seems to be active and getting ahead of typeorm

- created database on postgresql 'mokreddit' owned by 'postgres'

```sql
  CREATE ROLE gnm WITH
    LOGIN
    NOSUPERUSER
    CREATEDB
    CREATEROLE
    INHERIT
    NOREPLICATION
    CONNECTION LIMIT -1
    PASSWORD 'xxxxxx';
  COMMENT ON ROLE gnm IS 'this will be the db owner for the mokreddit db';
```
