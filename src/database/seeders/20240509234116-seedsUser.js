const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Matheus',
          sexo: 'Masculino',
          cpf: '11111111111',
          endereco: 'jose mendes',
          email: 'matheus@teste.com',
          data_de_nascimento: '1995-08-18',
          password_hash: await bcryptjs.hash('123123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Gabriel',
          sexo: 'Masculino',
          cpf: '22222222222',
          endereco: 'são jose',
          email: 'gabriel@teste.com',
          data_de_nascimento: '2005-10-12',
          password_hash: await bcryptjs.hash('123123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Anderson',
          sexo: 'Masculino',
          cpf: '33333333333',
          endereco: 'garopaba',
          email: 'anderson@teste.com',
          data_de_nascimento: '1992-06-06',
          password_hash: await bcryptjs.hash('123123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Kaue',
          sexo: 'Masculino',
          cpf: '44444444444',
          endereco: 'pantanal',
          email: 'kaue@teste.com',
          data_de_nascimento: '2000-09-19',
          password_hash: await bcryptjs.hash('123123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

      {},
    );
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
