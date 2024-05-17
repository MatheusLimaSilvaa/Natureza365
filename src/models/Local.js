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
      cep: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 9],
            msg: 'o cep',
          },
        },
      },
      localidade: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 50],
            msg: 'localidade',
          },
        },
      },
      lat: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      lon: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      id_local: {
        type: Sequelize.INTEGER,
        defaultValue: '',
      },
      link_google: {
        type: Sequelize.INTEGER,
        defaultValue: '',
      },
    }, {
      sequelize,
    });

    return this;

  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}