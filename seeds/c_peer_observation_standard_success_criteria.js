
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('peer_observation_standard').del(),

    // Inserts seed entries
    knex('peer_observation_standard').insert({
      id: 1,
      peer_observation_id: 1,
      standard_id: 1,
      mastery_evidence: 'lionel used cold calling as a way to certify that the students were learning the jquery queries.',
      growth_opportunity: 'lionel can still better offer time to students to think about the question before the cold call',
      score: 2
    }),
    knex('peer_observation_standard').insert({
      id: 2,
      peer_observation_id: 2,
      standard_id: 1,
      mastery_evidence: 'chris used cold calling as a way to certify that the students were learning the jquery queries.',
      growth_opportunity: 'chris can still better offer time to students to think about the question before the cold call',
      score: 2
    }),
    knex('peer_observation_standard').insert({
      id: 3,
      peer_observation_id: 3,
      standard_id: 1,
      mastery_evidence: 'adam used cold calling as a way to certify that the students were learning the jquery queries.',
      growth_opportunity: 'adam can still better offer time to students to think about the question before the cold call',
      score: 2
    })
  );
};
