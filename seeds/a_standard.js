
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('standard').del(),

     //Inserts seed entries
    knex('standard').insert({
      id: 1,
      description: 'use cold calling to improve learning',
      name: 'cold calling',
      domain: 'questions',
      DSI: true,
      WDI: true
    })
  );
};
