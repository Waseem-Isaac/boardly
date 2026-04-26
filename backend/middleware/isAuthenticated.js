const jwt = require('jsonwebtoken');

/**
 * Middleware that verifies the JWT sent in the Authorization header.
 * Expects:  Authorization: Bearer <token>
 * On success, attaches the decoded payload to req.user and calls next().
 * On failure, responds with 401.
 */
function isAuthenticated(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authorization token required' });
  }

  const token = authHeader.slice(7); // strip "Bearer "

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

module.exports = isAuthenticated;
