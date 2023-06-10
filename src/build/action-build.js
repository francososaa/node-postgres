const bcryptjs = require('bcryptjs');
const User = require('../models/user');


const findOne = async ( id ) => {
    const user = await User.findByPk(id);
    return user;
};

const findAll = async () => {
    const user = await User.findAll({
        where: { status: true },
        attributes: ['name', 'email']
    });
    return user;
};


const create = async ( body ) => {
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

const update = async ( user, body ) => {
    if ( body.password ) {
        const salt = bcryptjs.genSaltSync(10);
        user.password = bcryptjs.hashSync(body.password, salt);
    };

    user.name = body.name;
    user.password = body.password;
    user.email = body.email;
    user.status = body.status;

    await user.save();
    return user;
};

module.exports = {
    create,
    findAll,
    findOne,
    update
};
