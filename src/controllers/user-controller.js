const user = require('../services/user-services');


const list = async (req, res) => {
    const data = await user.getUsers();
    if (!data) return res.status(404).send({ status: 404, message: 'There are no users' });
    res.status(200).send({ status: 200, data: data });
};

const retrieve = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await user.getUser(id);
        res.status(200).send({ status: 200, data: data, message: "Succesfully Users Retrieved" });

    } catch {
        res.status(404).send({ status: 400, message: 'User does not exist' })
    }
};

const create = async (req, res) => {
    const { body } = req.body;
    try{
        if( !req.body ) return  res.status(500).send({ status: 500, message: 'There is no body in the request' });
        const data = await user.createUser( body );
        res.status(201).send({ status: 200, data: data, message: 'User created' });
    } catch {
        res.status(404).send({ status: 400, message: 'Failed' })
    }
};

const update = async (req, res) => {
    const { id } = req.params;
    const { body} = req.body;

    try {
        const data = await user.updateUser( id, body)
        res.status(200).send({ status: 200, data: data, message: 'Updated user' });
    } catch (error) {
        res.status(500).send({ status: 500, message: error.message });
    }
};

const deleteU = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await user.deleteUser(id);
        res.status(200).send({ status: 200, data: data, message: 'User Deleted' });
    } catch (error) {
        res.status(500).send({ status: 500, message: error.message });
    }
};

 module.exports = {
    list,
    retrieve,
    create,
    update,
    deleteU
};
