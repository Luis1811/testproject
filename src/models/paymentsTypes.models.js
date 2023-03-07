const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const PaymentsTypes = db.define('payments_types', {

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
    businessId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'business_id',
    },
});

module.exports = PaymentsTypes;