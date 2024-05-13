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
    
    console.log(email)
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
    console.log(id)
    
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token, user: { nome: user.nome, id, email } });
  }
}

export default new auth();
