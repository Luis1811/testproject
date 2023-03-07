const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const ProductsInTable = db.define('products_in_table', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    tableId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'table_id',
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'product_id',
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending',
    },
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'total_price',
    },
    creatorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'creator_id',
    },
    businessId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'business_id',
    },
});

module.exports = ProductsInTable;