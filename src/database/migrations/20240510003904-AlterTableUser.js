/* eslint-disable no-empty-function */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'users',
      'cpf',
      {
        type: Sequelize.STRING,
        allowNull: false,
      },
    );
  },

  async down() {},
};
