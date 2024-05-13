import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 30],
            msg: 'O nome precisa ter entre 4 e 30 caracteres.',
          },
        },
      },
      sexo: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 20],
            msg: 'preencha o seu sexo',
          },
        }  
        
      },
      cpf: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
            msg: 'cpf já existe',
          },
          validate: {
            len: {
              args: [11, 11],
              msg: 'O CPF precisa ter 11 numeros.',
            },
          },
        },
      endereco: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 100],
            msg: 'preencha o endereço.',
          },
        }  
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
        validate: {
          len: {
            args: [3, 20],
            msg: 'preencha sua data de nascimento',
          },
        }  
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

  static associate(models) {
    this.hasMany(models.Local, { foreignKey: 'user_id' });
  }
}
