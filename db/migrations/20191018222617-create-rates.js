"use strict";
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable("rates", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    baseRate: {
      type: Sequelize.STRING,
      allowNull: false
    },
    quoteRate: {
      type: Sequelize.STRING,
      allowNull: false
    },
    exchangeRate: {
      type: Sequelize.NUMERIC,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn("now")
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn("now")
    }
  });
}
export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable("rates");
}
