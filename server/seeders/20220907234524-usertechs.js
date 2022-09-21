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
   await queryInterface.bulkInsert('user_techs',[
    {
      'user_id': 1,
      'tech_id': 1,
      'competency': 5
    },
    {
      'user_id': 2,
      'tech_id': 1,
      'competency': 6
    },
    {
      'user_id': 3,
      'tech_id': 1,
      'competency': 9
    },
    {
      'user_id': 1,
      'tech_id': 2,
      'competency': 2
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user_techs', null, {})
  }
};
