'use strict'

module.export = function getRandomWord(object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  return {word: randomProp};
};

//move to lib folder
