const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

/**
* @openapi
*  components:
*      schemas:
*          User:
*              type: object
*              properties:
*                  id:
*                      type: integer
*                      description: The user's id
*                  name:
*                      type: string
*                      description: The user's name
*                  surname:
*                      type: string
*                      description: The user's surname
*                  password:
*                      type: string
*                      description: The user's password
*                  email:
*                      type: string
*                      description: The user's email
*                  phoneNumber:
*                      type: string
*                      description: The user's phone number
*                  dni:
*                      type: string
*                      description: The user's dni
*                  roleId:
*                      type: integer
*                      description: The user's role id
*                  salary:
*                      type: float
*                      description: The user's salary
*              example:
*                  id: 1
*                  name: "Luis"
*                  surname: "Uzcategui"
*                  password: "123456"
*                  email: "example@correo.com"
*                  phoneNumber: "123456789"
*                  dni: "12345678A"
*                  roleId: 1
*                  salary: 1000
*          CreateUser:
*            type: object
*            required:
*              - name
*              - surname
*              - password
*              - email
*              - phoneNumber
*              - salary
*            properties:
*              name:
*                type: string
*                description: The user's name
*              surname:
*                type: string
*                description: The user's surname
*              password:
*                type: string
*                description: The user's password
*              email:
*                type: string
*                description: The user's email
*              phoneNumber:
*                type: string
*                description: The user's phone number
*              dni:
*                type: string
*                description: The user's dni
*              roleId:
*                type: integer
*                description: The user's role id
*              salary:
*                type: float
*                description: The user's salary
*            example:
*              name: "Luis"
*              surname: "Uzcategui"
*              password: "123456"
*              email: "example@correo.com"
*              phoneNumber: "123456789"
*              dni: "12345678A"
*              roleId: 1
*              salary: 1000
*          LoginUser:
*            type: object
*            required:
*              - email
*              - password
*            properties:
*              email:
*                type: string
*                description: The user's email
*              password:
*                type: string
*                description: The user's password
*            example:
*              email: "example@correo.com"
*              password: "123456"
*          GetAllUsers:
*            type: object
*            properties:
*              id:
*                type: integer
*                description: The auto-generated id of the user
*              name:
*                type: string
*                description: The user's name
*              surname:
*                type: string
*                description: The user's surname
*              email:
*                type: string
*                description: The user's email
*              phoneNumber:
*                type: string
*                description: The user's phone number
*              dni:
*                type: string
*                description: The user's dni
*              roleId:
*                type: integer
*                description: The user's role id
*              salary:
*                type: float
*                description: The user's salary
*            example:
*              id: 1
*              name: "Luis"
*              surname: "Uzcategui"
*              email: "example@correo.com"
*              phoneNumber: "123456789"
*              dni: "12345678A"
*              roleId: 1
*              salary: 1000
*          UpdateUser:
*            type: object
*            required:
*              - userId
*            properties:
*              userId:
*                type: integer
*                description: The user's id
*              name:
*                type: string
*                description: The user's name
*              surname:
*                type: string
*                description: The user's surname
*              email:
*                type: string
*                description: The user's email
*              phoneNumber:
*                type: string
*                description: The user's phone number
*              salary:
*                type: float
*                description: The user's salary
*            example:
*              name: "Luis"
*              surname: "Uzcategui"
*              email: "example@correo.com"
*              phoneNumber: "123456789"
*              salary: 1000
*          UpdateUserRole:
*            type: object
*            required:
*              - userId
*              - role
*            properties:
*              userId:
*                type: integer
*                description: The user's id
*              role:
*                type: integer
*                description: The user's role id
*            example:
*              userId: 1
*              role: 1
*          UpdateUserPassword:
*            type: object
*            required:
*              - oldPassword
*              - newPassword
*              - passwordRepeat
*            properties:
*              oldPassword:
*                type: string
*                description: The user's old password
*              newPassword:
*                type: string
*                description: The user's new password
*              passwordRepeat:
*                type: string
*                description: The user's new password confirmation
*            example:
*              oldPassword: "123456"
*              newPassword: "12345678"
*              passwordRepeat: "12345678"
*          DeleteUser:
*            type: object
*            required:
*              - userId
*            properties:
*              userId:
*                type: integer
*                description: The user's id
*            example:
*              userId: 1
*      securitySchemes:
*        bearerAuth:
*          type: http
*          scheme: bearer
*          bearerFormat: JWT
*/

const Users = db.define('users', {

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
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        },
        unique: true,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'phone_number',
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'role_id',
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'Activo',
    },
    salary: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    businessId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'business_id',
    },
}, {
    hooks: {
        beforeCreate: (data, options) => {
            const { password } = data;
            const hash = bcrypt.hashSync(password, 8);
            data.password = hash;
        },
    },
});

module.exports = Users;