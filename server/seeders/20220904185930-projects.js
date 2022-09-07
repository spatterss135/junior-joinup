'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('projects', [{
        name: 'Ebay Clone',
        status: "Started",
        creator_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Netflix Clone',
        status: "Cancelled",
        creator_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The new Internet',
        status: "pending",
        creator_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('projects', null, {});
  }
};
