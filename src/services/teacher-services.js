const build = require('../build/teacher-build');

const getTeachers = async () => {
    const teacher = await build.findAll();
    return teacher;
};

const getTeacher = async ( id ) => {
    const teacher = await build.findOne(id);
    return teacher;
};

const createTeacher = async ( body ) => {
    const teacher = await build.create(body);
    return teacher;
};

const updateTeacher = async ( id, body ) => {

    const teacher = await build.findOne(id);

    if (!teacher) return res.status(500).send({ status: 500, message: 'Teacher does no exist' });

    const teacherUpdate = await build.update(teacher, body);
    return teacherUpdate;
};

const deleteTeacher = async ( id ) => {
    const teacher = await build.findOne(id);

    if( !teacher ) return res.status(500).send({ status: 500, message: 'Teacher does no exist' });

    teacher.status = false;
    await teacher.save();
    return teacher;
};

module.exports = {
    getTeachers,
    getTeacher,
    createTeacher,
    updateTeacher,
    deleteTeacher,
};


