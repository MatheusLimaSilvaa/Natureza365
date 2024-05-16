const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'locals',
      [
        {
          local: 'R. Manoel Pedro Oliveira',
          cep: '88067-079',
          localidade: 'Pântano do Sul',
          lat: '-27.7790083',
          lon: '-48.506409',
          id_local: '328706946',
          user_id: '1',
          link_google: 'https://www.google.com/maps?q=-27.7790083,-48.506409',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          local: 'Sv.Manuel T. Brito',
          cep: '88056-750',
          localidade: 'Lagoinha do Norte',
          lat: '-27.3939524',
          lon: '-48.4249167',
          id_local: '328706678',
          user_id: '2',
          link_google: 'https://www.google.com/maps?q=-27.3939524,-48.4249167',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          local: 'Av. Campeche',
          cep: '88063-301',
          localidade: 'Lagoa Pequena',
          lat: '-27.6614782',
          lon: '-48.47993074',
          id_local: '328706926',
          user_id: '3',
          link_google: 'https://www.google.com/maps?q=-27.6614782,-48.47993074',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          local: 'Campeche Leste',
          cep: '88060-000',
          localidade: 'Campeche',
          lat: '-27.6830514',
          lon: '-48.4909959',
          id_local: '328706799',
          user_id: '3',
          link_google: 'https://www.google.com/maps?q=-27.6830514,-48.4909959',
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
