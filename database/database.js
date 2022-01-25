const Sequelize = require('sequelize');


const connection = new Sequelize('guiaperguntas', 'gabriel', 'Gabriel123456.', {
	host: 'localhost',
	dialect: 'mysql'
});

module.exports = connection;