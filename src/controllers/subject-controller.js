const service = require('../services/subject-services');

const list = async (req, res) => {
    const subject = await service.getSubjects();
    if ( !subject ) return res.status(404).send({ status: 404, message: 'There are no subjects' });
    return res.status(200).send({ status: 200, subject: subject });
};

const retrieve = async (req, res) => {
    const id  = req.params;

    try {
        const subject = await service.getSubject(id);
        return res.status(200).send({ status: 200, subject: subject, message: "Succesfully subject Retrieved" });
    } catch (error){
        return res.status(404).send({ status: 400, message: 'Subject does not exist' });
    }
    
};

const create = async (req, res) => {

    const body  = req.body;

    try {
        if ( body === {} ) return res.status(500).send({ status: 500, message: 'There is no body in the request' });

        const subject = await service.createSubject( body );
        res.status(201).send({ status: 200, subject: subject, message: 'Subject created' });
    } catch {
        res.status(404).send({ status: 400, message: 'Failed' });
    }
};

const update = async (req, res) => {
    const id  = req.params;
    const body  = req.body;
    
    try {
        const subject = await service.updateSubject( id, body ) ;
        return res.status(200).send({ status: 200, subject: subject, message: 'Updated subject' });
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message });
    }
};

const deleteT = async (req, res) => {
    const id  = req.params;

    try {
        const subject = await service.deleteSubject( id );

        return res.status(200).send({ status: 200, subject: subject, message: 'Subject Deleted' });
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
