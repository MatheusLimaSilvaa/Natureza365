const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'locals',
      [
        {
          local: 'Rua Jerônimo José Dias',
          descricao: 'josé maria da luz',
          localidade: 'Florianopolis',
          coordenadas_geograficas: '-27.61464, -48.54388',
          id_local: '1063416260',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          local: 'Rua Venidiomar Krug',
          descricao: 'Estreito',
          localidade: 'Florianopolis',
          coordenadas_geograficas: '-27.58983, -48.58162',
          id_local: '120711821',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          local: 'Avenida Professor Othon Gama deça',
          descricao: 'centro',
          localidade: 'Florianópolis',
          coordenadas_geograficas: '-27.58777, -48.55152',
          id_local: '328177205',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          local: 'Rua Apóstolo Paschoal',
          descricao: 'Canasvieiras',
          localidade: 'Florianopolis',
          coordenadas_geograficas: '-27.42982, -48.45884',
          id_local: '585779741',
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
