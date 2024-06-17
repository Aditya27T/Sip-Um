const { up, down } = require('../factories/20240616170414-seed-user.cjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await up();
    return queryInterface.bulkInsert('Users', users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};