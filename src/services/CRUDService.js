let db = require('../models/index');
let bcrypt = require('bcrypt');
let Helper = require('../Utils/Helper');
let jwt = require('jsonwebtoken');
const salt = 10;


let createNewUser = async(data) => {
    let hashPassword = await HashUserPassword(data.password);
    let token = await Helper.token(15);
    return new Promise(async(resolve, reject) => {
        try {
            await db.User.create({
                username: data.username,
                fullname: data.fullname,
                email: data.email,
                password: hashPassword,
                role: data.role,
                token: token,
            });
            resolve({
                code: 200,
                message: "Create success"
            });
        } catch (err) {
            reject({
                code: 500,
                message: err.message
            });
        }
    })

}
let loginPassPort = async(data) => {
    let hashPassword = await HashUserPassword(data.password);
    let username = data.username;
    let password = data.password;
    return new Promise(async(resolve, reject) => {
        try {
            await db.User.findOne({
                where: {
                    username: username,
                }
            }).then((user) => {
                if (user) {
                    bcrypt.compare(password, user.password, function(err, result) {
                        if (err) {
                            resolve({
                                code: 500,
                                message: err.message
                            });
                        }
                        if (result) {
                            let token = jwt.sign({
                                    username: user.username,
                                },
                                'verySecretValue', {
                                    expiresIn: '12h',
                                }
                            );
                            resolve({
                                message: "Login Successfully !",
                                token: token,
                                user: user
                            });
                        } else {
                            resolve({
                                code: 500,
                                message: 'Password does not match !'
                            });
                        }
                    })
                } else {
                    resolve({
                        code: 500,
                        message: "Account not found !"
                    })
                }

            })
        } catch (err) {
            reject({
                code: 500,
                message: 'No Account Found!'
            })
        }
    })
}
let HashUserPassword = (password) => {
    return new Promise(async(resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    loginPassPort: loginPassPort,
    createNewUser: createNewUser
}