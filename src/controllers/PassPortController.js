const db = require('../models/index');
const Passport = require('../services/auth/PassportService');

let login = async(req, res) => {
    let message = await Passport.loginPassPort(req.body);
    // if (res.message.code === 200) {
    //     req.session.secret = res.message.token;
    // }
    res.setHeader('x_authorization', message.accessToken);
    return res.json(message);
}
let create = async(req, res) => {
    let message = await Passport.createNewUser(req.body);
    return res.json(message);
}
module.exports = {
    login: login,
    create: create
}