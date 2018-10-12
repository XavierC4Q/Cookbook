const express = require('express');
const userRouter = express.Router();
const {loginRequired} = require('../helpers/loginRequired')
const queries = require('../queries/user')

userRouter.get('/all', queries.allUsers)
userRouter.get('/find/:username', queries.getUserByUsername)
userRouter.patch('/editUser', loginRequired, queries.editUser)
userRouter.post('/addFriend', loginRequired, queries.addFriend)
userRouter.patch('/removeFriend', loginRequired, queries.removeFriend)
userRouter.delete('/delete/:_id', loginRequired, queries.deleteUser)

module.exports = userRouter;