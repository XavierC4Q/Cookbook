const express = require('express');
const authRouter = express.Router();
const {loginRequired} = require('../helpers/loginRequired')
const queries = require('../queries/auth')

authRouter.get('/logout', loginRequired, queries.logoutUser)
authRouter.post('/login', queries.loginUser)
authRouter.post('/register', queries.registerUser)
authRouter.get('/isLoggedIn', loginRequired, queries.isLoggedIn)

module.exports = authRouter
