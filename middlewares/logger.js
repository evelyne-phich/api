const expressLogger = (isDebugging) => (req, res, next) => {
  const currentDatetime = new Date();
  const datetimeLog = `${currentDatetime.getFullYear()}-${
    currentDatetime.getMonth() + 1
  }-${currentDatetime.getDate()} ${currentDatetime.getHours()}:${currentDatetime.getMinutes()}:${currentDatetime.getSeconds()}`;

  console.log(`[API] ${datetimeLog} ${req.url}`);

  if (isDebugging) {
    console.log({
      params: req.params,
      query: req.query,
      body: req.body,
    });
  }

  next();
};

module.exports = {
  expressLogger,
};
