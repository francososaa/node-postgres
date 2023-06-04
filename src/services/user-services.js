const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const getUsers = async () => {
    return user = await User.findAll({
        where: { status: true },
        attributes: ['name', 'email']
    });
};

const getUser = async ( id ) => {
    return user = await User.findByPk(id);
};

const createUser = async ( body ) => {
    const user = await User.create(
        {
            name: body.name,
            email: body.email,
            password: body.password
        }
    );

    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(body.password, salt);
    await user.save();
    return user;
};

const updateUser = async ( id, body ) => {

    if (body.password) {
        const salt = bcryptjs.genSaltSync(10);
        data.password = bcryptjs.hashSync(body.password, salt);
    };

    const data = await User.findByPk(id);
    data.name = body.name;
    data.password = body.password;
    data.email = body.email;
    data.status = body.status;

    await data.save();
    return data;
};

const deleteUser = async ( id ) => {
    const deleteuser = await User.findByPk(id);
    deleteuser.status = false;
    await deleteuser.save();
    return deleteuser;
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};
