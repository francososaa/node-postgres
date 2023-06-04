const build = require('../build/action-build');

const getUsers = async () => {
    const user = await build.findAll();
    return user;
};

const getUser = async ( id ) => {
    const user = await build.findOne(id);
    return user;
};

const createUser = async ( body ) => {
    const user = await build.create(body);
    return user;
};

const updateUser = async ( id, body ) => {

    const user = await build.findOne(id);

    // CUANDO NO EXISTE EL USUARIO NO RETORNA, SIGUE LA SIGUIENTE INSTRUCCION
    if (!user) return res.status(500).send({ status: 500, message: 'User does no exist' });

    const userUpdate = await build.update(user, body);
    return userUpdate;
};

const deleteUser = async ( id ) => {
    const user = await build.findOne(id);

    // CUANDO NO EXISTE EL USUARIO NO RETORNA, SIGUE LA SIGUIENTE INSTRUCCION
    if( !user ) return res.status(500).send({ status: 500, message: 'User does no exist' });

    // SI EXISTE EL USUARIO CAMBIA EL ESTADO A FALSE Y RETORNA BIEN
    user.status = false;
    await user.save();
    return user;
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
