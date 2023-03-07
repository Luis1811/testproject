const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const qrCode = () => Number(new Date()) + 'L';

/**
* @openapi
* components:
*   schemas:
*     products:
*       type: object
*       properties:
*         id:
*           type: integer
*           description: The auto-generated id of the product.
*         name:
*           type: string
*           description: The name of the product.
*         price:
*           type: float
*           description: The price of the product.
*         categoryId:
*           type: integer
*           description: The category id of the product.
*         stock:
*           type: integer
*           description: The stock of the product.
*         preparationTime:
*           type: integer
*           description: The preparation time of the product.
*         codeQr:
*           type: string
*           description: The code qr of the product.
*         isVisibleTo:
*           type: string
*           description: The is visible to of the product.
*         descrition:
*           type: string
*           description: The descrition of the product.
*         businessId:
*           type: integer
*           description: The business id of the product.
*       example:
*         id: 1
*         name: 'Coca Cola'
*         price: 1.5
*         categoryId: 1
*         stock: 10
*         preparationTime: 10
*         codeQr: '123456789'
*         isVisibleTo: 'all'
*         descrition: 'Coca Cola'
*         businessId: 1
*     createProduct:
*       type: object
*       required:
*         - name
*         - price
*         - categoryId
*         - isVisibleTo
*         - businessId
*       properties:
*         name:
*           type: string
*           description: The name of the product.
*         price:
*           type: float
*           description: The price of the product.
*         categoryId:
*           type: integer
*           description: The category id of the product.
*         stock:
*           type: integer
*           description: The stock of the product.
*         preparationTime:
*           type: integer
*           description: The preparation time of the product.
*         codeQr:
*           type: string
*           description: The code qr of the product.
*         isVisibleTo:
*           type: string
*           description: The is visible to of the product.
*         descrition:
*           type: string
*           description: The descrition of the product.
*         businessId:
*           type: integer
*           description: The business id of the product.
*       example:
*         name: 'Coca Cola'
*         price: 1.5
*         categoryId: 1
*         stock: 10
*         preparationTime: 10
*         codeQr: '123456789'
*         isVisibleTo: 'all'
*         descrition: 'Coca Cola'
*         businessId: 1
*     createProductsMultiples:
*       type: array
*       items:
*         type: object
*         required:
*           - name
*           - price
*           - categoryId
*           - isVisibleTo
*           - businessId
*         properties:
*           name:
*             type: string
*             description: The name of the product.
*           price:
*             type: float
*             description: The price of the product.
*           categoryId:
*             type: integer
*             description: The category id of the product.
*           stock:
*             type: integer
*             description: The stock of the product.
*           preparationTime:
*             type: integer
*             description: The preparation time of the product.
*           codeQr:
*             type: string
*             description: The code qr of the product.
*           isVisibleTo:
*             type: string
*             description: The is visible to of the product.
*           descrition:
*             type: string
*             description: The descrition of the product.
*           businessId:
*             type: integer
*             description: The business id of the product.
*         example:
*           name: 'Coca Cola'
*           price: 1.5
*           categoryId: 1
*           stock: 10
*           preparationTime: 10
*           codeQr: '123456789'
*           isVisibleTo: 'all'
*           descrition: 'Coca Cola'
*           businessId: 1
*     updateProduct:
*       type: object
*       properties:
*         name:
*           type: string
*           description: The name of the product.
*         price:
*           type: float
*           description: The price of the product.
*         categoryId:
*           type: integer
*           description: The category id of the product.
*         stock:
*           type: integer
*           description: The stock of the product.
*         preparationTime:
*           type: integer
*           description: The preparation time of the product.
*         isVisibleTo:
*           type: string
*           description: The is visible to of the product.
*         descrition:
*           type: string
*           description: The descrition of the product.
*       example:
*         name: 'Coca Cola'
*         price: 1.5
*         categoryId: 1
*         stock: 10
*         preparationTime: 10
*         isVisibleTo: 'all'
*         descrition: 'Coca Cola'
*     deleteProduct:
*       type: object
*       properties:
*         id:
*           type: integer
*           description: The id of the product.
*       example:
*         id: 1
*/

const Products = db.define('products', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id',
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    preparationTime: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'preparation_time',
    },
    codeQr: {
        type: DataTypes.STRING,
        field: 'code_qr',
        defaultValue: qrCode(),
        unique: true,
    },
    isVisibleTo: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'is_visible_to',
    },
    descrition: {
        type: DataTypes.STRING,
        allowNull: true,

    },
    businessId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'business_id',
    },
});

module.exports = Products;