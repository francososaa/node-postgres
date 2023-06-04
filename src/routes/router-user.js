const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

const user = require('../controllers/user-controller');


//PATH
router.get('/users/', validarJWT, user.list);
router.post('/user/create', validarJWT , user.create);
router.get('/user/:id/detail',validarJWT, user.retrieve);
router.put('/user/:id/update', validarJWT, user.update);
router.delete('/user/:id/delete', validarJWT, user.deleteU);


module.exports = router;