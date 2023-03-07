const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Uniform = db.define('uniform', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    shirts: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    jacket: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    pants: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    shoes: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    hats: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
    },
    businessId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'business_id',
    },
});

module.exports = Uniform;