export default {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('rates', 'reciprocal', {
    type: Sequelize.STRING,
    allowNull: false,
  }),

  down: queryInterface => queryInterface.removeColumn('rates', 'reciprocal')
};