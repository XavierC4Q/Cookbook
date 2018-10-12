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

function addFriend(req, res){
    const {
        id,
        friend
    } = req.body

    User.findByIdAndUpdate(id, { $push: {friends: friend} }, {new: true},(error, success) => {
        if(error) {
            res.write(error)
            return res.end()
        }
        if(!success) {
            return res.write('not added')
        }

        return res.json(success)
    })
}

function removeFriend(req, res){
    const {
        id,
        friend
    } = req.body

    User.findByIdAndUpdate(id, { $pull: { friends: friend } }, {new: true}, (error, success) => {
        if(error) {
            res.write(error)
            return res.end()
        }
        if(!success) {
            return res.write('not removed')
        }

        return res.json(success)
    })
}

module.exports = {
    allUsers,
    getUserByUsername,
    editUser,
    addFriend,
    removeFriend,
    deleteUser
};