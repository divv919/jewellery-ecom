"use strict";

/** @type {import('sequelize-cli').Migration} */
export default {
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
    await queryInterface.bulkInsert("favorites", [
      {
        user_id: 8,
        product_id: 91,
      },
      {
        user_id: 8,
        product_id: 92,
      },
      {
        user_id: 8,
        product_id: 93,
      },
      {
        user_id: 8,
        product_id: 94,
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
    await queryInterface.bulkDelete("favorites", null, {});
  },
};
