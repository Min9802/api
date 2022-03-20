const db = require('../../models/index');
const bcrypt = require('bcrypt');
const Helper = require('../../Utils/Helper');
const jwt = require('jsonwebtoken');
const salt = 10;
const authMethod = require('./auth.methods');
const randToken = require('rand-token');


let createNewUser = async(data) => {
    let hashPassword = await HashUserPassword(data.password);
    let token = await Helper.token(15);
    const newUser = {
        username: data.username,
        fullname: data.fullname,
        email: data.email,
        password: hashPassword,
        role: data.role,
        token: token,
    };
    const user = await db.User.findOne({
        where: {
            username: data.username,
        },
        rows: true,
    });
    return new Promise(async(resolve, reject) => {
        try {
            if (user) {
                resolve({
                    code: 409,
                    message: "Username is already taken !"
                });
            } else {
                await db.User.create(newUser);
                resolve({
                    code: 200,
                    message: "Create success"
                });
            }

        } catch (err) {
            reject({
                code: 500,
                message: err.message
            });
        }
    })

}
let loginPassPort = async(data) => {
    const hashPassword = await HashUserPassword(data.password);
    const username = data.username;
    const password = data.password;
    const accessTokenLife = process.env.ACCESS_TOKEN_LIFE || Helper.jwtVariable.accessTokenLife;
    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || Helper.jwtVariable.accessTokenSecret;
    const refreshTokenSize = process.env.REFRESH_TOKEN_SIZE || Helper.jwtVariable.refreshTokenSize;

    return new Promise(async(resolve, reject) => {
        try {
            await db.User.findOne({
                where: {
                    username: username,
                }
            }).then((user) => {
                if (user) {
                    bcrypt.compare(password, user.password, async(err, result) => {
                        if (err) {
                            resolve({
                                code: 401,
                                message: err.message
                            });
                        }
                        if (result) {

                            const accessToken = await authMethod.generateToken(
                                user.username,
                                accessTokenSecret,
                                accessTokenLife,
                            );

                            if (!accessToken) {
                                resolve({
                                    code: 401,
                                    message: 'Password incorrect !'
                                });
                            }
                            let refreshToken = randToken.generate(refreshTokenSize); // tạo 1 refresh token ngẫu nhiên
                            if (!user.refreshToken) {
                                // Nếu user này chưa có refresh token thì lưu refresh token đó vào database
                                updateRefreshToken(username, refreshToken)
                            } else {
                                // Nếu user này đã có refresh token thì lấy refresh token đó từ database
                                refreshToken = user.refreshToken;
                            }
                            resolve({
                                code: 200,
                                message: "Login Successful !",
                                accessToken: accessToken,
                                user: user
                            });

                        } else {
                            resolve({
                                code: 401,
                                message: 'Password incorrect !'
                            });
                        }
                    })
                } else {
                    resolve({
                        code: 401,
                        message: "Account not found !"
                    })
                }

            })
        } catch (err) {
            reject({
                code: 401,
                message: 'No Account Found!'
            })
        }
    })
}
let updateRefreshToken = (username, refreshToken) => {
    return new Promise(async(resolve, reject) => {
        try {

            let user = db.User.findOne({
                where: {
                    username: username
                }
            });
            let values = {
                refreshToken: refreshToken
            };
            let condition = {
                where: {
                    username: username
                }
            };
            if (user) {
                await db.User.update(
                    values,
                    condition,
                );
            }
            resolve(refreshToken);
        } catch (err) {
            reject(err);
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