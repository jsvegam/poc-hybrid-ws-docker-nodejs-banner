const express = require('express');
const user = require('../controllers/user.controller');
const router = express.Router();

router.route('/').get(function (req, res) {
    return res.status(200).json({ mesaage: 'Home ws miuss'})
})

router.route('/api/perfil').get(user.perfil)

module.exports = router;