
const {verifyToken} = require('../services/tokenService');

const auth = async (req, res, next) => {
  try {
    
    const auth = req.headers.authorization || "";
    if (!auth) return res.sendStatus(401);

    const [, token] = auth.split(" ");
    if (!token) return res.status(401).json({ msg: 'No token' });

    req.user = await verifyToken(token);

    return next();
  } catch (err) {
    console.log("error", err)
    return res.status(401).json({ msg: 'Token invalid' });
  }
};

module.exports = {
  auth
}