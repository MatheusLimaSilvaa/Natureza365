import Local from "../models/Local";
import axios from 'axios';

class LocalC {
  //STORE -> CRIAÇÃO
  async store(req, res) {
    try {
      const { cep } = req.body;
      const response = await axios.get(`http://localhost:3000/map/${cep}`).then().catch(e => undefined)
      const reqId = req.userId;


      let novoLocal;
    if (!response) {
       novoLocal = await Local.create({...req.body, user_id: reqId});
    } else {
       novoLocal = await Local.create({...req.body, user_id: reqId, 
        local: response.data.bairro,
        cep: cep,
        localidade: response.data.cidade,
        lat: response.data.lat,
        lon: response.data.lon,
        id_local: response.data.id_local,
        link_google: response.data.link_google
      });
    }
      
      

      const { id, local, localidade, lat, lon, id_local, link_google } = novoLocal;

      return res.json({ id, local, cep, localidade, lat, lon, id_local, link_google });
    } catch (e) {
     console.log(e)
    }
  }

  //INDEX -> LISTAR TODOS
  async index(req, res) {
    try {
      const locals = await Local.findAll({ attributes: ['id', 'local', 'cep', 'localidade', 'lat', 'lon', 'id_local', 'link_google', 'user_id'] });
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

      const { id, local, cep, localidade, lat, lon, id_local, link_google, user_id } = locals;

      return res.json({ id, local, cep, localidade, lat, lon, id_local, link_google, user_id });
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
