const BadRequest = require('./errors').BadRequest;

module.exports = paramName => (req, res, next) => {
  const rawParam = req.params[paramName];
  if (!isInt(rawParam)) {
    return next(new BadRequest(`Expected parameter ${paramName} to be integer but got ${rawParam}`));
  }
  req.params[paramName] = parseInt(req.params[paramName]);
  next();
};

function isInt(param) {
  return /^\+?(0|[1-9]\d*)$/.test(param);
}
