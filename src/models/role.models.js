const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Role = db.define('role', {

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
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    permissions: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    },
    businessId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'business_id',
    },
});

module.exports = Role;