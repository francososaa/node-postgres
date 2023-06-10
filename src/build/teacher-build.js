const Teacher = require('../models/teacher');

const findOne = async ( id ) => {
    const teacher = await Teacher.findByPk(id);
    return teacher;
};

const findAll = async () => {
    const teacher = await Teacher.findAll({
        where: { status: true },
        attributes: ['firstName', 'lastName', 'age']
    });
    return teacher;
};

const create = async ( body ) => {
    const teacher = await Teacher.create(
        {
            firstName: body.firstName,
            lastName: body.lastName,
            age: body.age,
            email: body.email,
        }
    );
    
    await teacher.save();
    return teacher;
};

const update = async ( teacher, body ) => {

    teacher.firstName = body.firstName;
    teacher.lastName = body.lastName;
    teacher.age = body.age;
    teacher.email = body.email;
    teacher.status = body.status;

    await teacher.save();
    return teacher;
};

module.exports = {
    create,
    findAll,
    findOne,
    update
};
