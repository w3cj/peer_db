'use strict';

let domains = require('./standards.json');

exports.seed = function(knex, Promise) {
  return knex('success_criteria').del().then(() => {
    return knex('standard').del();
  }).then(() => {
    return knex('domain').del();
  }).then(() => {
    return Promise.all([
      knex.raw('ALTER SEQUENCE success_criteria_id_seq restart;'),
      knex.raw('ALTER SEQUENCE standard_id_seq restart;'),
      knex.raw('ALTER SEQUENCE domain_id_seq restart;'),
    ]);
  }).then(() => {
    return Promise.all(
      Object.keys(domains).map(name => {
      let domain = domains[name];
      return knex('domain').insert({
        name: name
      }, 'id').then(id => {
        let domain_id = id[0];
        return Promise.all(
          domain.standards.map(standard => {
            let success_criteria = standard.success_criteria;
            standard.domain_id = domain_id;
            delete standard.success_criteria;

            return knex('standard')
            .insert(standard, 'id')
            .then(id => {
              let standard_id = id[0];
              return Promise.all(
                success_criteria.map(success_criterion => {
                success_criterion.standard_id = standard_id;
                return knex('success_criteria').insert(success_criterion);
              }));
            });
          })
        );
      });
    }));
  });
}
