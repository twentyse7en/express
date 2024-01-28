const Sequelize = require("sequelize");

console.log('proces env', process.env.DATABASE);

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
      dialect: 'postgres',
    },
  );

module.exports = sequelize;
