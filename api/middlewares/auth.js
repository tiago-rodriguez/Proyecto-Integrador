const { validateToken } = require("../config/token");

const validateUser = (req, res, next) => {
  const { token } = req.body;
  if (!token) return res.send(400);
  const { user } = validateToken(token);
  if (!user) return res.send(400);

  req.user = user;
  next();
};

function validateAdmin(req, res, next) {
  const { token } = req.body; //body es el objeto que le paso
  console.log(token);
  if (!token) return res.sendStatus(401);

  const { user } = validateToken(token);
  console.log(user);
  if (!user) return res.sendStatus(401);
  if (!user.admin) return res.sendStatus(405);

  req.user = user;

  next();
}

module.exports = { validateUser, validateAdmin };
