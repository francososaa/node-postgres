const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

const student = require('../controllers/student-controller');


//PATH
router.get('/student', validarJWT,  student.list);
router.post('/student', validarJWT,  student.create);
router.get('/student/:id/detail', validarJWT, student.retrieve);
router.put('/student/:id/update', validarJWT,  student.update);
router.delete('/student/:id/delete', validarJWT,  student.deleteT);


module.exports = router;