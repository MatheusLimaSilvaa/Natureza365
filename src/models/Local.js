import Sequelize, { Model } from 'sequelize';

export default class Local extends Model {
  static init(sequelize) {
    super.init({
      local: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
            len: {
              args: [4, 30],
              msg: 'o local precisa ter entre 4 e 30 caracteres.',
            },
          },
      },
      descricao: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 30],
            msg: 'a descricao precisa ter entre 4 e 30 caracteres.',
          },
        },
      },
      localidade: {
        type: Sequelize.STRING,
        defaultValue: '',
          validate: {
            len: {
              args: [4, 30],
              msg: 'a localidade precisa ter entre 4 e 30 caracteres.',
            },
          },
      },
      coordenadas_geograficas: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      id_local: {
        type: Sequelize.INTEGER,
        defaultValue: '',
      },
    }, {
        sequelize,
      });

      return this;

    }
  }