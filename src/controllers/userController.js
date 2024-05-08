import User from "../models/User";

class UserC {
  //STORE -> CRIAÇÃO
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);

      const { id, nome, sexo, cpf, endereco, email, data_de_nascimento } = novoUser;

      return res.json({ id, nome, sexo, cpf, endereco, email, data_de_nascimento });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  //INDEX -> LISTAR TODOS
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'sexo', 'cpf', 'endereco', 'email', 'data_de_nascimento'] });
      return res.json(users);
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }

  //SHOW -> LISTAR 1
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      const { id, nome, sexo, cpf, endereco, email, data_de_nascimento } = user;

      return res.json({ id, nome, sexo, cpf, endereco, email, data_de_nascimento });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const novosDados = await user.update(req.body);
      const { id, nome, sexo, cpf, endereco, email, data_de_nascimento } = novosDados;
      return res.json({ id, nome, sexo, cpf, endereco, email, data_de_nascimento });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserC();
