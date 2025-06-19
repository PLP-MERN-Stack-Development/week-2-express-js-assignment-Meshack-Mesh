module.exports = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== '12345') {
    return res.status(403).json({ error: 'Forbidden - Invalid API Key' });
  }
  next();
};
