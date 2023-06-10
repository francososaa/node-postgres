const service = require('../services/student-services');

const list = async (req, res) => {
    const student = await service.getStudents();
    if ( !student ) return res.status(404).send({ status: 404, message: 'There are no students' });
    return res.status(200).send({ status: 200, student: student });
};

const retrieve = async (req, res) => {
    const id  = req.params;

    try {
        const student = await service.getStudent(id);
        return res.status(200).send({ status: 200, student: student, message: "Succesfully Student Retrieved" });
    } catch (error){
        return res.status(404).send({ status: 400, message: 'Student does not exist' });
    }
    
};

const create = async (req, res) => {

    const body  = req.body;

    try {
        if ( body === {} ) return res.status(500).send({ status: 500, message: 'There is no body in the request' });

        const student = await service.createStudent( body );
        res.status(201).send({ status: 200, student: student, message: 'Student created' });
    } catch {
        res.status(404).send({ status: 400, message: 'Failed' });
    }
};

const update = async (req, res) => {
    const id  = req.params;
    const body  = req.body;
    
    try {
        const student = await service.updateStudent( id, body ) ;
        return res.status(200).send({ status: 200, student: student, message: 'Updated student' });
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message });
    }
};

const deleteT = async (req, res) => {
    const id  = req.params;

    try {
        const student = await service.deleteStudent( id );

        return res.status(200).send({ status: 200, student: student, message: 'Student Deleted' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    list,
    retrieve,
    create,
    update,
    deleteT
};
