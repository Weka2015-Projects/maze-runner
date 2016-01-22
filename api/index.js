'use strict'
const koa = require('koa')
const Resource = require('koa-resource-router')
const koaBody = require('koa-better-body')
const knex = require('koa-knex')
const PORT = 4000

// Export the app for use in tests
const app = module.exports = koa()

// Add the body parser to parse both multipart forms and JSON
app.use(koaBody({
  extendTypes: {
    json: [ 'application/x-javascript' ]
  }
}))

// Requests with a body must be type JSON
app.use(function *(next) {
  let noBody = this.method === 'GET' ||
    this.method === 'DELETE' ||
    this.method === 'OPTION'

  if (noBody || this.is('application/json')) {
    yield next
  } else {
    this.status = 400
  }
})

// Requests with JSON response must accept JSON
app.use(function *(next) {
  let noResponse = this.method === 'PUT' ||
    this.method === 'DELETE' ||
    this.method === 'OPTION'

  if (noResponse || this.accepts('application/json')) {
    yield next
  } else {
    this.status = 400
  }
})

// Setup Connection To Database

const dbName = `maze_runner_development`

app.use(knex({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    port     : '5432',
    database : dbName
  },
  searchPath: 'public'
}))

const scores = new Resource('scores', {

  // GET /scores
  index: function *(next) {
    this.body = yield { scores: this.knex('scores') }
  },

  // POST /scores
  create: function *(next) {
    try {
      const res = yield this.knex('scores').returning('*').insert({
        name: this.request.body.fields.name,
        score: this.request.body.fields.score
      })

      this.type = 'application/json'
      this.status = 201
      this.set('Location', `/scores/${res[0].id}`)
      this.body = { scores: res[0] }
    } catch (e) {
      this.status = 422
    }
  }
})

app.use(scores.middleware())

// Start the application up on port PORT
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} . . .`)
})
