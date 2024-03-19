const express = require("express");

const emailChange = require('./authFunctions/emailChange')
const login = require('./authFunctions/login')
const passwordChange = require('./authFunctions/passwordChange')
const refreshVerifyToken = require ('./authFunctions/refreshVerifyToken')
const registerUser = require('./authFunctions/register')

const router = express.Router();

router.post('/emailchange', emailChange)
router.post('/login', login)
router.post('/passwordchange', passwordChange)
router.post('/refreshverifytoken', refreshVerifyToken)
router.post('/register', registerUser);

module.exports = router