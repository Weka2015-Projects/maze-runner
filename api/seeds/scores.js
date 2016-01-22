exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('scores').del(),

    // Inserts seed entries
    knex('scores').insert({
      id: 1,
      name: 'Player 1',
      score: 1000
    }),
    knex('scores').insert({
      id: 2,
      name: 'Player 2',
      score: 2000
    }),
    knex('scores').insert({
      id: 3,
      name: 'Player 3',
      score: 3000
    }),
    knex('scores').insert({
      id: 4,
      name: 'Player 4',
      score: 4000
    }),
    knex('scores').insert({
      id: 5,
      name: 'Player 5',
      score: 5000
    })
  )
}
