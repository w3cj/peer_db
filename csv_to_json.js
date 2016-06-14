'use strict';

const fs = require('fs');
const csv = require('csv');

fs.readFile('./seeds/standards_and_success_criteria.csv', (error, data) => {
  csv.parse(data, (error, data) => {
    let domains = {};
    for (var i = 1; i < data.length; i++) {
      let row = data[i];
      let domainName = row[0];
      domains[domainName] = domains[domainName] || { standards: [] };
      let domain = domains[domainName];

      let standard = {
        name: row[1],
        description: row[2],
        success_criteria: []
      }

      for (var j = 3; j < row.length; j++) {
        if(row[j]) {
          standard.success_criteria.push({
            description: row[j],
            order: j - 3
          })
        } else {
          break;
        }
      }

      domain.standards.push(standard);
    }
    fs.writeFile('./seeds/standards.json', JSON.stringify(domains), (error) => {
      console.log('standards.json created');
    });
  });
});
