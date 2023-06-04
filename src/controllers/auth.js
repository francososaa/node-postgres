const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generar-jwt');
const User = require('../models/user');

const login = async ( req, res ) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne( { email } );
        if( !user ) return res.status(400).send( { status: 400, message: 'Username does not exist' });
        if( !user.status) return res.status(400).send({ status: 400, message: 'Fake status' });

        const validPassword = bcryptjs.compareSync( password, user.password );
        if ( !validPassword ) return res.status(400).send({ status: 400, message: 'Password is incorrect'});

        const token = await generarJWT( user.id );
        res.send({  user, token });

    } catch (error){ res.status(500).send( { status: 500, message: 'Talk to the administrator' } ); }
}

module.exports = {
    login
};
