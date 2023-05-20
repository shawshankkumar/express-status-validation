function expressStatusValidate(req, res, next) {
  const sendCopy = res.send;
  res.send = function (data) {
    if ((res.statusCode < 200 && res.statusCode < 600) || typeof res.statusCode != Number) res.status(500);
    sendCopy.apply(res, arguments);
  };
  next();
}

module.exports = expressStatusValidate;
