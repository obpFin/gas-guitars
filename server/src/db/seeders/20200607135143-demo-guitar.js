'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Guitars', [{
        make: 'Gibson',
        model: 'SG Standard',
        year: 1961,
        condition: "Good",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Guitars', null, {});
  }
};