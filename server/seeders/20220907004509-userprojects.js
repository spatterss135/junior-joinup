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
   await queryInterface.bulkInsert('user_projects', [
    {
      'user_id': 1,
      'project_id': 1,
      "role": 'creator'
    },
    {
      'user_id': 2,
      'project_id':2,
      "role": 'creator'
    },
    {
      'user_id': 3,
      'project_id': 3,
      "role": 'creator'
    },
    {
      'user_id': 3,
      'project_id': 2,
      "role": 'participant'
    },
    {
      'user_id': 2,
      'project_id': 1,
      "role": 'participant'
    },
    {
      'user_id': 1,
      'project_id': 3,
      "role": 'participant'
    },])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user_projects', null, {})
  }
};
