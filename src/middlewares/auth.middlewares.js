const authMethod = require('../services/auth/auth.methods');
const userModle = require('../models/user');
let isAuth = async(req, res, next) => {
    // Lấy access token từ header
    const accessTokenFromHeader = req.headers.x_authorization;
    if (!accessTokenFromHeader) {
        return res.json({
            status: 401,
            message: 'Not find Access token'
        });
    }
    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

    const verified = await authMethod.verifyToken(
        accessTokenFromHeader,
        accessTokenSecret,
    );
    if (!verified) {
        return res
            .status(401)
            .send('Bạn không có quyền truy cập vào tính năng này!');
    }

    const user = await userModle.getUser(verified.payload.username);
    req.user = user;

    return next();
};
module.exports = {
    isAuth: isAuth
}