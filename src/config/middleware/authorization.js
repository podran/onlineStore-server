const jwt = require('jsonwebtoken');
const config = require('../Enviorment/index')

module.exports = (req, res, next) => {
    try {
        req.user = jwt.verify(req.headers.authorization, config.secret);
    } catch(e) {
        res.status(403).send()
        return;
    }
    next();
}