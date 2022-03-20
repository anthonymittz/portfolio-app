function errorHandler (err, req, res, next) {
  res.status(500);
  return res.send('Server error');
};

module.exports = errorHandler;