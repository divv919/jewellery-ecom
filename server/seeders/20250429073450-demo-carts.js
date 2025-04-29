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
    queryInterface.bulkInsert("carts", [
      {
        user_id: 8,
        product_id: 64,
        quantity: 1,
      },
      {
        user_id: 8,
        product_id: 65,
        quantity: 3,
      },
      {
        user_id: 8,
        product_id: 66,
        quantity: 2,
      },
      {
        user_id: 8,
        product_id: 67,
        quantity: 5,
      },
      {
        user_id: 8,
        product_id: 68,
        quantity: 2,
      },
      {
        user_id: 8,
        product_id: 69,
        quantity: 5,
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
    await queryInterface.bulkDelete("carts", null, {});
  },
};
