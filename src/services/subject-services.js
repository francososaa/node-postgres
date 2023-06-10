const build = require('../build/subject-build');

const getSubjects = async () => {
    const subject = await build.findAll();
    return subject;
};

const getSubject = async ( id ) => {
    const subject = await build.findOne(id);
    return subject;
};

const createSubject = async ( body ) => {
    const subject = await build.create(body);
    return subject;
};

const updateSubject = async ( id, body ) => {

    const subject = await build.findOne(id);

    if ( !subject ) return res.status(500).send({ status: 500, message: 'Subject does no exist' });

    const subjectUpdate = await build.update(subject, body);
    return subjectUpdate;
};

const deleteSubject = async ( id ) => {
    const subject = await build.findOne(id);

    if( !subject ) return res.status(500).send({ status: 500, message: 'Subject does no exist' });

    subject.status = false;
    await subject.save();
    return subject;
};

module.exports = {
    getSubjects,
    getSubject,
    createSubject,
    updateSubject,
    deleteSubject,
};


