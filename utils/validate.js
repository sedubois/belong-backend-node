const Joi = require('joi');
const Promise = require('bluebird');

const validate = Promise.promisify(Joi.validate);

module.exports = (json, schema) => {
  if (!json) {
    return Promise.reject("Invalid JSON");
  }
  return validate(json, schema);
};
