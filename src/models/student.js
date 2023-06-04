const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');


const Student = sequelize.define('student',
    {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    age: { type: DataTypes.INTEGER, allowNull: false },
    email: { type: DataTypes.STRING, unique: true },
    status: { type: DataTypes.BOOLEAN, defaultValue: true },
    }, {
        timestamps: false
    }
);

module.exports = Student;