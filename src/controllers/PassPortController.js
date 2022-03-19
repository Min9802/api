let db = require('../models/index');
let CRUDService = require('../services/CRUDService');

let login = async(req, res) => {
    let message = await CRUDService.loginPassPort(req.body);
    return res.json(message.message);
}
let create = async(req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    return res.json(message);
}
module.exports = {
    login: login,
    create: create
}