const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

const teacher = require('../controllers/teacher-controller');


//PATH
router.get('/teacher', validarJWT,  teacher.list);
router.get('/teacher/:id', validarJWT, teacher.retrieve);
router.post('/teacher', validarJWT,  teacher.create);
router.put('/teacher/:id', validarJWT,  teacher.update);
router.delete('/teacher/:id', validarJWT,  teacher.deleteT);


module.exports = router;