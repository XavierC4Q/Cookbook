const User = require('../models/user');

function allUsers(req, res){
    User.find({}, (error, users) => {
        if (error) return res.write(error)
        if (!users) return res.write(new Error('CANNOT GET USERS'))

        return res.json(users)
    })
};

function getUserByUsername(req, res){
    User.findByUsername(req.params.username, (error, user) => {
        if (error) return res.write(error)
        if (!user) return res.write(null)

        return res.json(user)
    })
};

function editUser(req, res){
    const {
        _id,
        username,
        password,
        email,
        firstName,
        lastName
    } = req.body

    User.findByIdAndUpdate(_id, { $set: { username, email, firstName, lastName } }, { new: true }, async (error, user) => {
        if (error) return res.write(error)
        if (!user) return res.write(null)

        if(password){
           await user.setPassword(password)
        }
        await user.save()
        return res.json(true)
    })
};

function deleteUser(req, res){
    const {
        _id
    } = req.params
    User.findByIdAndDelete(_id, (error, removed) => {
        if(error) return res.write(error)
        if(!removed) return res.write('FAILED REMOVAL')

        return res.json(removed)
    })
};

module.exports = {
    allUsers,
    getUserByUsername,
    editUser,
    deleteUser
};