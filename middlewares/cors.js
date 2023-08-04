const allowedCors = [
  'https://films.mvtt.nomoredomains.xyz',
  'http://films.mvtt.nomoredomains.xyz',
  'https://api.films.mvtt.nomoredomains.xyz',
  'http://api.films.mvtt.nomoredomains.xyz',
  'https://localhost:3001',
  'http://localhost:3001',
];

module.exports = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  res.header('Access-Control-Allow-Credentials', true);

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);

    return res.end();
  }

  next();
};
