const Joi = require('joi');

const validate = require('../../utils/validate');

const schema = Joi.object().keys({
  name: Joi.string().required()
});

const users = [];

module.exports = {
  get: userId => users[userId],

  list: () => users,

  // TODO persist
  create: user => validate(user, schema)
    .then(user => {
      user.id = users.length;
      users.push(user);
      return user;
    })
};
