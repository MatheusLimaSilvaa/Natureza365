import User from "../models/User";
import Local from "../models/Local";

class UserC {
  //STORE -> CRIAÇÃO
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);

      const { id, nome, sexo, cpf, endereco, email, data_de_nascimento } = novoUser;

      return res.json({ id, nome, sexo, cpf, endereco, email, data_de_nascimento });
    } catch (e) {
      console.log(e.message)
      return res.status(400).json({
        errors: e.message,
      });
    }
  }

  //INDEX -> LISTAR TODOS
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'sexo', 'cpf', 'endereco', 'email', 'data_de_nascimento'],
      order: [['id', 'DESC'], ['id', 'DESC']],
      include: {
        model: Local,
      },
       });
      return res.json(users);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.message,
      });
    }
  }

  //SHOW -> LISTAR 1
  async show(req, res) {
    try {
      const { id } = req.params;
      console.log(id)
      const user = await User.findByPk(id, {
        include: {
          model: Local,
        },
      });

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      return res.json(user);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.message,
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const id = req.userId;

      const user = await User.findByPk(id);
      console.log(id)
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const novosDados = await user.update(req.body);
      const { nome, sexo, cpf, endereco, email, data_de_nascimento } = novosDados;
      return res.json({ nome, sexo, cpf, endereco, email, data_de_nascimento });
    } catch (e) {
      return res.status(400).json({
        errors: e.message,
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const id = req.userId;
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await user.destroy();
      return res.json({ info: ['Usuário apagado com sucesso.'] });
    } catch (e) {
      return res.status(400).json({
        errors: e.message,
      });
    }
  }
}

export default new UserC();
