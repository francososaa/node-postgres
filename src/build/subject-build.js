const Subject = require('../models/subject');

const findOne = async ( id ) => {
    const subject = await Subject.findByPk(id);
    return subject;
};

const findAll = async () => {
    const subject = await Subject.findAll({ where: { status: true } });
    return subject;
};

const create = async ( body ) => {
    const subject = await Subject.create(
        {
            name: body.name
        }
    );
    
    await subject.save();
    return subject;
};

const update = async ( subject, body ) => {

    subject.name = body.name;;
    subject.status = body.status;

    await subject.save();
    return subject;
};

module.exports = {
    create,
    findAll,
    findOne,
    update
};
