const db = require('../utils/database');
const { DataTypes } = require('sequelize');

/**
* @openapi
* components:
*   schemas:
*     CreateTable:
*       type: object
*       required:
*         - nameBusiness
*         - closingTime
*         - email
*         - password
*         - areas
*         - categories
*       properties:
*         nameBusiness:
*           type: string
*           description: The name of the business.
*         closingTime:
*           type: string
*           format: time
*           description: The closing time of the business.
*         email:
*           type: string
*           format: email
*           description: The email of the business.
*         password:
*           type: string
*           description: The password of the business.
*         areas:
*           type: array
*           items:
*             type: object
*             properties:
*               name:
*                 type: string
*                 description: The name of the area.
*               numberTables:
*                 type: integer
*                 description: The number of tables of the area.
*         categories:
*           type: array
*           items:
*             type: string
*             description: The categories of the business.      
*       example:
*         nameBusiness: El Ganzo
*         closingTime: 23:00:00
*         email: example@correo.com
*         password: 123456
*         areas:
*           - name: Area 1
*             numberTables: 10
*           - name: Area 2
*             numberTables: 10
*         categories:
*           - Comida
*           - Bebida
*/

const Tables = db.define('tables', {

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
    areaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'area_id',
    },
    servedTime: {
        type: DataTypes.TIME,
        allowNull: false,
        field: 'served_time',
        defaultValue: '00:00:00',
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'empty',
    },
    persons: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    businessId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'business_id',
    },
});

module.exports = Tables;