import Local from "../models/Local";

class LocalC {
  //STORE -> CRIAÇÃO
  async store(req, res) {
    try {
      const reqId = req.userId;
      const novoLocal = await Local.create({...req.body, user_id: reqId});

      const { id, local, descricao, localidade, coordenadas_geograficas, id_local, user_id } = novoLocal;

      return res.json({ id, local, descricao, localidade, coordenadas_geograficas, id_local, user_id });
    } catch (e) {
      console.log(e)
    }
  }

  //INDEX -> LISTAR TODOS
  async index(req, res) {
    try {
      const locals = await Local.findAll({ attributes: ['id', 'local', 'descricao', 'localidade', 'coordenadas_geograficas', 'id_local'] });
      return res.json(locals);
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }

  //SHOW -> LISTAR 1
  async show(req, res) {
    try {
      const locals = await Local.findByPk(req.params.id);

      if (!locals) {
        return res.status(400).json({
          errors: ['Local não existe.'],
        });
      }

      const { id, local, descricao, localidade, coordenadas_geograficas, id_local } = locals;

      return res.json({ id, local, descricao, localidade, coordenadas_geograficas, id_local });
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
      const { id } = req.params;
      const idUser = req.userId;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não existe'],
        });
      }

      const localAtual = await Local.findByPk(id);

      if (!localAtual) {
        return res.status(400).json({
          errors: ['Local não encontrado'],
        });
      }

      if (localAtual.user_id != idUser) {
        return res.status(400).json({
          errors: ['Local cadastrado por outro usuário'],
        });
      }

      const novosDados = await localAtual.update(req.body);

      return res.json(novosDados)
    

    } catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const { id } = req.params;
      const idUser = req.userId;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não encontrado'],
        });
      }

      const local = await Local.findByPk(id);

      if (!local) {
        return res.status(400).json({
          errors: ['Local não encontrado'],
        });
      }

      if (local.user_id != idUser) {
        return res.status(400).json({
          errors: ['Local cadastrado por outro usuário'],
        });
      }

      await local.destroy();

      return res.json({ info: ['local apagado com sucesso.'] });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new LocalC();
