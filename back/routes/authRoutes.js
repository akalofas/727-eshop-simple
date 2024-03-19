const express = require("express");
const registerUser = require('./authFunctions/register')

const router = express.Router();

router.post('/register', registerUser);

module.exports = router