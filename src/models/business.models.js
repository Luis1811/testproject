const db = require('../utils/database');
const { DataTypes } = require('sequelize');

/**
* @openapi
* components:
*   schemas:
*     Business:
*       type: object
*       properties:
*         business:
*           type: object
*           properties:
*             id:
*               type: integer
*               description: The auto-generated id of the business.
*             nameBusiness:
*               type: string
*               description: The name of the business.
*             owner:
*               type: string
*               description: The owner of the business.
*             coin:
*               type: string
*               description: The currency of the business.
*             closingTime:
*               type: string
*               format: time
*               description: The closing time of the business.
*         owner:
*           type: object
*           properties:
*             id:
*               type: integer
*               description: The auto-generated id of the user.
*             name:
*               type: string
*               description: The name of the user.
*             surname:
*               type: string
*               description: The surname of the user.
*             email:
*               type: string
*               format: email
*               description: The email of the user.
*             password:
*               type: string
*               description: The password of the user.
*             phoneNumber:
*               type: string
*               description: The phone number of the user.
*             roleId:
*               type: integer
*               description: The role of the user.
*             businessId:
*               type: integer
*               description: The business id of the user.
*             dni:
*               type: string
*               description: The dni of the user.
*             salary:
*               type: string
*               description: The salary of the user.
*             photo:
*               type: string
*               description: The photo of the user.
*             status:
*               type: string
*               description: The status of the user.
*     createBusiness:
*       type: object
*       required:
*         - nameBusiness
*         - owner
*         - closingTime
*         - email
*         - password
*         - phoneNumber
*         - areas
*         - categories
*       properties:
*         nameBusiness:
*           type: string
*           description: The name of the business.
*         owner:
*           type: string
*           description: The owner of the business.
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
*         phoneNumber:
*           type: string
*           description: The phone number of the business.
*         coin:
*           type: string
*           description: The coin uses for the business
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
*         nameBusiness: 'El Ganzo'
*         owner: 'Luis Uzcategui'
*         closingTime: '23:00:00'
*         email: 'example@correo.com'
*         password: '123456'
*         phoneNumber: '+593 999999999'
*         coin: '$'
*         areas:
*           - name: 'Area 1'
*             numberTables: 10
*           - name: 'Area 2'
*             numberTables: 10
*         categories:
*           - 'Comida'
*           - 'Bebida'
*     getBusiness:
*       type: object
*       properties:
*         id:
*           type: integer
*           description: The auto-generated id of the business.
*         nameBusiness:
*           type: string
*           description: The name of the business.
*         owner:
*           type: string
*           description: The owner of the business.
*         moneda:
*           type: string
*           description: The currency of the business.
*         closingTime:
*           type: string
*           format: time
*           description: The closing time of the business.
*     updateBusiness:
*       type: object
*       properties:
*         nameBusiness:
*           type: string
*           description: The name of the business.
*         owner:
*           type: string
*           description: The owner of the business.
*         coin:
*           type: string
*           description: The currency of the business.
*         closingTime:
*           type: string
*           format: time
*           description: The closing time of the business.
*       example:
*         nameBusiness: 'El Ganzo'
*         owner: 'Luis Uzcategui'
*         moneda: '$'
*         closingTime: '23:00:00'
*     updatedBusiness:
*       type: object
*       properties:
*         message:
*           type: string
*           description: The message of the business.
*       example:
*         message: 'Business updated successfully'
*     deleteBusiness:
*       type: object
*       properties:
*         message:
*           type: string
*           description: The message of the business.
*       example:
*         message: 'Business deleted successfully'
*/

const Business = db.define('business', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nameBusiness: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'name_business',
        unique: true,
    },
    ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'owner_id',
    },
    coin: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '$',
    },
    closingTime: {
        type: DataTypes.TIME,
        allowNull: false,
        field: 'closing_time',
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        field: "is_active"
    }
});

module.exports = Business;