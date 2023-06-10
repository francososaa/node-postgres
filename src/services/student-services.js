const build = require('../build/student-build');

const getStudents = async () => {
    const student = await build.findAll();
    return student;
};

const getStudent = async ( id ) => {
    const student = await build.findOne(id);
    return student;
};

const createStudent = async ( body ) => {
    const student = await build.create(body);
    return student;
};

const updateStudent = async ( id, body ) => {

    const student = await build.findOne(id);

    if (!student) return res.status(500).send({ status: 500, message: 'Student does no exist' });

    const studentUpdate = await build.update(student, body);
    return studentUpdate;
};

const deleteStudent = async ( id ) => {
    const student = await build.findOne(id);

    if( !student ) return res.status(500).send({ status: 500, message: 'Student does no exist' });

    student.status = false;
    await student.save();
    return student;
};

module.exports = {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent,
};


