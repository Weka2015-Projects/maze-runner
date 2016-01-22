# API

# Dependencies that have been installed

```
npm i koa koa-resource-router koa-better-body koa-knex --save-dev
npm i pg --save
```

# Installation

1. create your database with `createdb maze_runner_development`
2. install knex globally `npm i -g knex`
3. npm install `npm i`
4. copy the knex.js.example file to knex.js and change the username and password. The username should be apprentice and the password ''.
4. migrate your data with `knex migrate:latest` - this will setup your database schema.
5. run `knex seed:run` to populate db with test data.
6. install nodemon globally `npm install -g nodemon`
6. run `nodemon` within api directory to launch the koa server