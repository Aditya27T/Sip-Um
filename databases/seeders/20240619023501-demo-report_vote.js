const { up, down } = require('../factories/20240619023501-seed-report_vote.cjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const report_votes = await up();
    return queryInterface.bulkInsert('report_votes', report_votes, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('report_votes', null, {});
  }
};