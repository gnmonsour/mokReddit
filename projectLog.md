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
