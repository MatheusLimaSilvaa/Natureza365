import jwt from "jsonwebtoken";
import User from "../models/User";

class auth {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais Inválidas'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário ou senha inválida'],
      });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({
        errors: ['Usuário ou Senha inválida'],
      });
    }

    const { id } = user;
    const auth = jwt.sign({ id, email }, process.env.SECRET_JWT, {
      expiresIn: process.env.SECRET_JWT,
    });

    return res.json({ auth, user: { nome: user.nome, id, email } });
  }
}

export default new auth();
