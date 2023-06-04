const { response } = require('express');
const service = require('../services/user-services');


const list = async (req, res) => {
    const user = await service.getUsers();
    if ( !user ) return res.status(404).send({ status: 404, message: 'There are no users' });
    return res.status(200).send({ status: 200, data: data });
};

const retrieve = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await service.getUser(id);
        return res.status(200).send({ status: 200, data: user, message: "Succesfully Users Retrieved" });
    } catch {
        return res.status(404).send({ status: 400, message: 'User does not exist' })
    }
};

// CREA EL USUARIO, LA CONDICION SI EL BODY ESTA VACIO SE CUMPLE Y NO RETORNA UN 500, SIGUE CON LA PROXIMA INSTRUCCION
const create = async (req, res = response ) => {

    const body  = req.body;

    try {
        if ( body === {} ) return res.status(500).send({ status: 500, message: 'There is no body in the request' });

        const user = await service.createUser( body );
        res.status(201).send({ status: 200, data: user, message: 'User created' });
    } catch {
        res.status(404).send({ status: 400, message: 'Failed' })
    }
};

// ERROR DE CONFLICTO CON LOS SEND
const update = async (req, res) => {
    const { id } = req.params;
    const body = req.body;

    try {
        const user = await service.updateUser( id, body ) ;
        return res.status(200).send({ status: 200, data: user, message: 'Updated user' });
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message });
    }
};

const deleteU = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await service.deleteUser( id );

        // UNA VEZ QUE RETORNA EL USUARIO ELIMINADO, SE PRODUCE EL ERROR POR LOS SEND
        return res.status(200).send({ status: 200, data: user, message: 'User Deleted' });
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message });
    }
};

 module.exports = {
    list,
    retrieve,
    create,
    update,
    deleteU
};
