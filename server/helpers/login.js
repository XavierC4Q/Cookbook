const User = require('../models/user');

function login(req, username, password){
    return new Promise(function(resolve, reject){
        User.authenticate()(username, password, (error, user) => {
            if(error) reject(error)
            if(!user) reject(new Error('FALSE USER'))

            req.login(user, (error) => {
                if(error) reject(error)
                resolve(user)
            })
        })
    })
}

module.exports = {
    login
}