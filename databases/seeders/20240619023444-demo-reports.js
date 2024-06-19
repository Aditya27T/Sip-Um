'use strict';
const { up, down } = require('../factories/20240619023444-seed-reports.cjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const reports = await up();
    return queryInterface.bulkInsert('reports', reports, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reports', null, {});
  }
};