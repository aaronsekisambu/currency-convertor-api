"use strict";
export default (sequelize, DataTypes) => {
  const rates = sequelize.define(
    "rates",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      baseRate: {
        type: DataTypes.STRING,
        allowNull: false
      },
      quoteRate: {
        type: DataTypes.STRING,
        allowNull: false
      },
      exchangeRate: {
        type: DataTypes.NUMERIC,
        allowNull: false
      },
      reciprocal: {
        type: DataTypes.NUMERIC,
        allowNull: false
      }
    },
    {}
  );
  rates.associate = function(models) {
    // associations can be defined here
  };
  return rates;
};
