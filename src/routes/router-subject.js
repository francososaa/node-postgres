const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

const subject = require('../controllers/subject-controller');


//PATH
router.get('/subject', validarJWT,  subject.list);
router.post('/subject', validarJWT,  subject.create);
router.get('/subject/:id/detail', validarJWT, subject.retrieve);
router.put('/subject/:id/update', validarJWT,  subject.update);
router.delete('/subject/:id/delete', validarJWT,  subject.deleteT);



module.exports = router;