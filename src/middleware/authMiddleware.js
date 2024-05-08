import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login necessário'],
    });
  }

  // eslint-disable-next-line no-unused-vars
  const [bearer, auth] = authorization.split(' ');

  try {
    const dados = jwt.verify(auth, process.env.SECRET_JWT);
    const { id, email } = dados;

    //Para nova verificação na base de dados, caso o usuario muda o e-mail;
    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
