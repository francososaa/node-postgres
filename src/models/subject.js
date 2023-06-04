const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');
const Teacher = require('../models/teacher');
const Student = require('../models/student');


const Subject = sequelize.define('subject',
    {
    name: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.BOOLEAN, defaultValue: true },
    }, {
        timestamps: false
    }
);

Subject.hasMany(Teacher, { foreignKey: 'subjectID', sourceKey: 'id' });
Teacher.belongsToMany(Subject, { through: 'TeacherSubject' });

Subject.belongsToMany(Student, { through: 'SubjectStudent' });
Student.belongsToMany(Subject, { through: 'SubjectStudent' });



module.exports = Subject;