'use strict';

module.exports = function postRandomWord(word, object) {
  if (object.hasOwnProperty(word)) {
    return {msg: 'This word is already in existense within our generator. Please try again.'};
  } else {
    object[word] = true;
    return {msg: 'Thanks for the new word ' + word + '. It has been added to the generator'};
  }
};
