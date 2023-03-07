const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');


const Owners = db.define('owners', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
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
        }
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'phone_number'
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "active"
    }
}, {
    hooks: {
        beforeCreate: (data, options) => {
            const { password } = data;
            const hash = bcrypt.hashSync(password, 8);
            data.password = hash;
        }
    }
});

module.exports = Owners;