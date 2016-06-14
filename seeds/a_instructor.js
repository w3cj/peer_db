
module.exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('instructor').del(),

    knex('instructor').insert({
      id: 1,
      email: 'cj.reynolds@galvanize.com',
      first_name: 'CJ',
      last_name: 'Reynolds',
      DSI: false,
      WDI: true,
    }),

    knex('instructor').insert({
      id: 2,
      email: 'lionel.lints@galvanize.com',
      first_name: 'Lionel',
      last_name: 'Lints',
      DSI: false,
      WDI: true,
    }),

    knex('instructor').insert({
      id: 3,
      email: 'chris.burkhart@galvanize.com',
      first_name: 'Chris',
      last_name: 'Burkhart',
      DSI: false,
      WDI: true,
    }),

    knex('instructor').insert({
      id: 4,
      email: 'adam.lichty@galvanize.com',
      first_name: 'Adam',
      last_name: 'Lichty',
      DSI: false,
      WDI: true,
    })
  );
};
