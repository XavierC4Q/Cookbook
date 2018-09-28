const User = require('../models/user');

const {login} = require('../helpers/login')

function loginUser(req, res) {
    const {
        username,
        password
    } = req.body
    const isLoggedIn = req.session.passport

    if (!isLoggedIn) {
        Promise.resolve(login(req, username, password))
        .then((user) => {
            return res.json(user)
        }).catch((error) => {
            return res.json(error)
        })
    } else {
        return res.json(null)
    }
}

function registerUser(req, res) {
    const {
        username,
        password,
        email,
        firstName,
        lastName,
        age
    } = req.body

    User.findOne({
        username: username
    }, async (error, user) => {
        if (error) return res.write(`ERROR REGISTER ${error}`)
        if (user) return res.write(new Error('USERNAME TAKEN'))

        let registered = new User({
            username: username,
            email: email,
            firstName: firstName,
            lastName: lastName,
            age: age
        })

        await registered.setPassword(password)
        await registered.save()

        return res.json(registered)
    })
}

function isLoggedIn(req, res) {
    const loggedInUser = req.session.passport
    User.findOne({
        username: loggedInUser.user
    }, (error, user) => {
        if (error) return res.write(error)
        if (!user) return res.write('FALSE USER')

        return res.json(user)
    })
}

function logoutUser(req, res) {
    req.session.destroy()
    return res.send({
        success: true
    })
}

module.exports = {
    loginUser,
    registerUser,
    isLoggedIn,
    logoutUser
}