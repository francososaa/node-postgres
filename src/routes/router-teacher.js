const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

const teacher = require('../controllers/teacher-controller');


//PATH
router.get('/teacher', validarJWT,  teacher.list);
router.post('/teacher', validarJWT,  teacher.create);
router.get('/teacher/:id/detail', validarJWT, teacher.retrieve);
router.put('/teacher/:id/update', validarJWT,  teacher.update);
router.delete('/teacher/:id/delete', validarJWT,  teacher.deleteT);


module.exports = router;