const service = require('../services/teacher-services');

const list = async (req, res) => {
    const teacher = await service.getTeachers();
    if ( !teacher ) return res.status(404).send({ status: 404, message: 'There are no teachers' });
    return res.status(200).send({ status: 200, teacher: teacher });
};

const retrieve = async (req, res) => {
    const id  = req.params;

    try {
        const teacher = await service.getTeacher(id);
        return res.status(200).send({ status: 200, teacher: teacher, message: "Succesfully Teacher Retrieved" });
    } catch (error){
        return res.status(404).send({ status: 400, message: 'Teacher does not exist' });
    }
    
};

const create = async (req, res) => {

    const body  = req.body;

    try {
        if ( body === {} ) return res.status(500).send({ status: 500, message: 'There is no body in the request' });

        const teacher = await service.createTeacher( body );
        res.status(201).send({ status: 200, teacher: teacher, message: 'Teacher created' });
    } catch {
        res.status(404).send({ status: 400, message: 'Failed' });
    }
};

const update = async (req, res) => {
    const id  = req.params;
    const body  = req.body;
    
    try {
        const teacher = await service.updateTeacher( id, body ) ;
        return res.status(200).send({ status: 200, teacher: teacher, message: 'Updated Teacher' });
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message });
    }
};

const deleteT = async (req, res) => {
    const id  = req.params;

    try {
        const teacher = await service.deleteTeacher( id );

        return res.status(200).send({ status: 200, teacher: teacher, message: 'Teacher Deleted' });
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
