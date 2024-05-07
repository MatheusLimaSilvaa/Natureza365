import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      sexo: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      cpf: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
            msg: 'cpf já existe',
          },
        },
      endereco: {
        type: Sequelize.STRING,
        defaultValue: '',    
      },
      email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
              msg: 'E-mail já existe',
            },
            validate: {
                isEmail: {
                    msg: 'E-mail inválido',
                },
            },
        },
      data_de_nascimento: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 18],
            msg: 'Senha precisa ter entre 6 e 18 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
