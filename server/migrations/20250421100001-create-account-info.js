"use strict";

/** @type {import('sequelize-cli').Migration} */

export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("account_infos", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "user_id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      phone_number: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: true,
      },
      first_name: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
      },
      last_name: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
      },
      address: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("account_infos");
  },
};
