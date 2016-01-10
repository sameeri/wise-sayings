var allPrinciples = require('./principles.json');


function all(){
  return allPrinciples;
}

function random(){
  return allPrinciples[1];
}

var api = {
  all: all,
  random: random
}

module.exports = api;
