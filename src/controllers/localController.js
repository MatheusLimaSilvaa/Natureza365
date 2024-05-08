import Local from "../models/Local";

class LocalC {
  //STORE -> CRIAÇÃO
  async store(req, res) {
    try {
      console.log(req.body);
      const novoLocal = await Local.create(req.body);

      const { id, local, descricao, localidade, coordenadas_geograficas, id_local } = novoLocal;

      return res.json({ id, local, descricao, localidade, coordenadas_geograficas, id_local });
    } catch (e) {
      console.log(e)
    }
  }

  //INDEX -> LISTAR TODOS
  async index(req, res) {
    try {
      const locals = await local.findAll({ attributes: ['id, local', 'descricao', 'localidade', 'coordenadas_geograficas', 'id_local'] });
      return res.json(locals);
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }

  //SHOW -> LISTAR 1
  async show(req, res) {
    try {
      const locals = await locals.findByPk(req.params.id);

      if (!locals) {
        return res.status(400).json({
          errors: ['Local não existe.'],
        });
      }

      const { id, local, descricao, localidade, coordenadas_geograficas, id_local } = local;

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
      const locals = await local.findByPk(req.localId);

      if (!locals) {
        return res.status(400).json({
          errors: ['Local não existe'],
        });
      }

      const novosDados = await local.update(req.body);
      const { id, local, descricao, localidade, coordenadas_geograficas, id_local } = novosDados;
      return res.json({ id, local, descricao, localidade, coordenadas_geograficas, id_local });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const locals = await local.findByPk(req.localId);

      if (!locals) {
        return res.status(400).json({
          errors: ['Local não existe'],
        });
      }

      await local.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new LocalC();
