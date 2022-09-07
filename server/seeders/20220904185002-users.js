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
      await queryInterface.bulkInsert('users', [{
        name: 'Sam',
        password: "b",
        email: "sam@example.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Billy',
        password: "c",
        email: "billy@example.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Jay',
        password: "g",
        email: "jay@example.com",
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
     await queryInterface.bulkDelete('users', null, {});
  }
};
