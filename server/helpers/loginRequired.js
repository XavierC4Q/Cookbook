function loginRequired(req, res, next){
    if(!req.session.passport){
        return res.json(null)
    }
    return next()
};

module.exports = {
    loginRequired
};