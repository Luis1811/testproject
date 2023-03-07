const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Areas = db.define('areas', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numberTables: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'number_tables',
    },
    businessId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'business_id',
    },
});

module.exports = Areas;