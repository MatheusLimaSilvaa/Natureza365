import Local from "../models/Local";
import axios from 'axios';

class LocalC {
  //STORE -> CRIAÇÃO
  async store(req, res) {
    try {
      const { cep2 } = req.body;
      const { id2 } = req.userId
      const response = await axios.get(`http://localhost:3000/map/${cep2}`)
      
      const reqId = req.userId;
      const novoLocal = await Local.create({...req.body, user_id: reqId, 
        local: response.data.bairro,
        cep: cep2,
        localidade: response.data.cidade,
        lat: response.data.lat,
        lon: response.data.lon,
        id_local: response.data.id_local,
        user_id: id2,
        link_google: response.data.link_googl
      });

      const { id, local, cep, localidade, lat, lon, id_local, user_id, link_google } = novoLocal;

      return res.json({ id, local, cep, localidade, lat, lon, id_local, user_id, link_google });
    } catch (e) {
      console.log(e)
    }
  }

  //INDEX -> LISTAR TODOS
  async index(req, res) {
    try {
      const locals = await Local.findAll({ attributes: ['id', 'local', 'cep', 'localidade', 'lat', 'lon', 'id_local', 'user_id', 'link_google'] });
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

      const { id, local, cep, localidade, lat, lon, id_local, user_id, link_google } = locals;

      return res.json({ id, local, cep, localidade, lat, lon, id_local, user_id, link_google });
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
