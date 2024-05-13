/* eslint-disable no-empty-function */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'locals',
      'user_id',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    );
  },

  async down() {},
};