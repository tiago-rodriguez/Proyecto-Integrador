const { validateToken } = require("../config/token");

const validateUser = (req, res, next) => {
  const { token } = req.body;
  if (!token) return res.send(400);
  const { user } = validateToken(token);
  if (!user) return res.send(400);

  req.user = user;
  next();
};
// Este middleware se encarga de validar que el usuario que hace una solicitud a la aplicación
// tenga permisos de administrador. Primero, verifica si el usuario tiene un token de autenticación válido.
//  Luego, extrae los datos del usuario a partir del token y verifica si el usuario tiene permisos de administrador.
//  Si el usuario es un administrador, se establece el objeto user en el objeto de solicitud req para que otros middlewares o
//  controladores puedan acceder a los datos del usuario autenticado. Si el usuario no tiene permisos de administrador o no se
//  proporciona un token válido, se devuelve una respuesta de estado de error.

function validateAdmin(req, res, next) {
  const token = req.body.token; //body es el objeto que le paso

  if (!token) return res.sendStatus(401);

  const { user } = validateToken(token);
  console.log(user);
  if (!user) return res.sendStatus(401);
  if (!user.admin) return res.sendStatus(405);

  req.user = user;

  next();
}

module.exports = { validateUser, validateAdmin };
