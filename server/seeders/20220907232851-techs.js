"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("techs", [
      {
        name: "JavaScript",
        language: "JavaScript",
      },
      {
        name: "React",
        language: "JavaScript",
      },
      {
        name: "Node.js",
        language: "JavaScript",
      },
      {
        name: "Java",
        language: "Java",
      },
      {
        name: "HTML",
        language: "HTML",
      },{
        name: "CSS",
        language: "CSS",
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('techs', null, {})
  },
};
