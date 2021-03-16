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

### Postgresql

- updated postgresql to 13.2
- reviewed mikro-orm website, seems to be active and getting ahead of typeorm

- create role 'gnm' in postgresql server
- created database on postgresql 'mokreddit' owned by 'gnm'
- had real difficulties with using server because of port number that was cached for version 12
- added a port number to the mikro-orm config after updating the port number in pgAdmin

-

### Mikro-ORM

- installed mikro-orm

```cmd
  npm i -S @mikro-orm/cli @mikro-orm/core @mikro-orm/migrations @mikro-orm/postgresql pg
```

- created a 'Post' entity that will become a table in mokreddit db
- created successful migration after adjustments in pgAdmin for server port and roles
- added code to create a post to verify workflow

### GraphQL

- installed packages: 'apollo-server-express', 'express', 'graphql', 'type-graphql' and '@types/express'
- added an express server with simple endpoint for verification
- added ApolloServer and configured it with 'buildSchema' from 'type-graphql'
- added a resolver for the schema for a simple setup and verification
- seeing a lot of decorators
- added a 'Post' resolver
- added types.ts for a type to use in 'Post' resolver
  - used as connection context for queries destructured it as 'em'
- added the Query decorator defining a Post array return
- added the get posts query that returns a promise
- added the PostResolver to the ApolloServer schema
- joined the connection context from the orm to the ApolloServer
- updated the Post entity to ensure qraphql types are defined with @Field() decorator
- installed the 'reflect-metadata' package for graphQL messages and type handling

- added CRUD to the post resolver and tested with success on each
