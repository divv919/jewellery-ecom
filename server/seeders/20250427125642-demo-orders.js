"use strict";

// const { default: Product } = require("../models/Product");

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
    await queryInterface.bulkInsert("orders", [
      {
        user_id: 8,
        product_id: 170,
        quantity: 2,
        order_status: "Pending",
      },
      {
        user_id: 8,
        product_id: 171,
        quantity: 1,
        order_status: "Completed",
      },
      {
        user_id: 8,
        product_id: 172,
        quantity: 1,
        order_status: "Failed",
      },
      {
        user_id: 8,
        product_id: 173,
        quantity: 3,
        order_status: "Completed",
      },
      {
        user_id: 8,
        product_id: 172,
        quantity: 1,
        order_status: "Pending",
      },
      {
        user_id: 8,
        product_id: 174,
        quantity: 1,
        order_status: "Pending",
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
    await queryInterface.bulkDelete("orders", null, {});
  },
};
