const service = require('./service');

module.exports = {
  get: (req, res) => res.json(service.get(req.params.id)),

  list: (req, res) => res.json(service.list()),

  create: (req, res, next) => {
    service.create(req.body)
      .tap(user => res.json(user))
      .catch(next);
  }
};
