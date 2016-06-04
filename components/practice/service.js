const Joi = require('joi');

const validate = require('../../utils/validate');

const schema = Joi.object().keys({
  totalSeconds: Joi.number().integer().required(),
  remainingSeconds: Joi.number().integer().required(),
  started: Joi.boolean().required()
});

let storedPractice;

module.exports = {
  get: () => storedPractice,

  // TODO persist
  update: practice => validate(practice, schema)
    .then(practice => storedPractice = practice)
    .then(practice => {
      if (practice.started) {
        console.log("TODO start timer");
      }
    })
};

module.exports.update({
  totalSeconds: 6,
  remainingSeconds: 6,
  started: false
});
