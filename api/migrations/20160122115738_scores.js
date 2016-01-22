exports.up = function (knex, Promise) {
  return knex.schema.dropTableIfExists('scores').then(function () {
    return knex.schema.createTable('scores', function (table) {
      table.increments()
      table.string('name')
      table.integer('score')
    })
  }).then(function () {
    console.log('Score table was created.')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('scores').then(function () {
    console.log('Score table was dropped.')
  })
}
