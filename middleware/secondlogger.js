//more middleware

const secondLogger = (req, res, next) => {
  console.log(`PARAMS: ${req.params} hey`);
  next();
};

module.exports = secondLogger;
