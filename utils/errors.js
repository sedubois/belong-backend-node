module.exports = {

  BadRequest: function(msg) {
    return buildError(400, msg);
  },

  NotFound: function(url, method) {
    return buildError(404, `URL ${method.toUpperCase()} ${url} not found`);
  }
};

function buildError(status, msg) {
  const error = new Error(msg);
  error.status = status;
  return error;
}
