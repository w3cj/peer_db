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
    ])
  }).then(() => {
    let domainInserts = [];
    let domainNames = Object.keys(domains);
    for (var i = 0; i < domainNames.length; i++) {
      let domain = domains[domainNames[i]];
      domainInserts.push(knex('domain').insert({
        name: domainNames[i]
      }, 'id').then(id => {
        id = id[0];
        let standardInserts = [];
        for (var j = 0; j < domain.standards.length; j++) {
          let standard = domain.standards[j];
          let success_criteria = standard.success_criteria;
          standard.domain_id = id;
          delete standard.success_criteria;

          standardInserts.push(knex('standard').insert(standard, 'id').then(id => {
            id = id[0];
            let successCriteriaInserts = [];
            for (var k = 0; k < success_criteria.length; k++) {
              let success_criterion = success_criteria[k];
              success_criterion.standard_id = id;
              successCriteriaInserts.push(knex('success_criteria').insert(success_criterion))
            }
            return Promise.all(successCriteriaInserts);
          }));
        }
        return Promise.all(standardInserts);
      }))
    }
    return Promise.all(domainInserts);
  })
};
