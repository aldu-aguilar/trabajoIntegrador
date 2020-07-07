const express = require ('express');
const router = express.Router();
const autosControllers = require('../controllers/autosControllers')

router.get('/', autosControllers.index);
//router.get('/:marcas', autosControllers.id);
//router.get('/:marcas/dato', autosControllers.dato);


module.exports = router;