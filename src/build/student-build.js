const Student = require('../models/student');

const findOne = async ( id ) => {
    const student = await Student.findByPk(id);
    return student;
};

const findAll = async () => {
    const student = await Student.findAll({
        where: { status: true },
        attributes: ['firstName', 'lastName', 'age']
    });
    return student;
};

const create = async ( body ) => {
    const student = await Student.create(
        {
            firstName: body.firstName,
            lastName: body.lastName,
            age: body.age,
            email: body.email,
        }
    );
    
    await student.save();
    return student;
};

const update = async ( student, body ) => {

    student.firstName = body.firstName;
    student.lastName = body.lastName;
    student.age = body.age;
    student.email = body.email;
    student.status = body.status;

    await student.save();
    return student;
};

module.exports = {
    create,
    findAll,
    findOne,
    update
};
