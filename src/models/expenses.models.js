const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Expenses = db.define('expenses', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    paymentType: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'payment_type',
    },
    expensesType: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'expenses_type',
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
    },
    invoice: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    vendorId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'vendor_id',
    },
    businessId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'business_id',
    },
});

module.exports = Expenses;