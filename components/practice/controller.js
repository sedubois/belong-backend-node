const service = require('./service');

module.exports = {
  get: (req, res) => res.json(service.get()),

  update: (req, res, next) => {
    service.update()
      .tap(practice => res.json(practice))
      .catch(next);
  }
};
