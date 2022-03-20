let token = (length) => {
    return Math.random().toString(length).substring(2, length);
}
let jwtVariable = () => {
    let jwt = {
        accessTokenSecret: "access-token-secret-Min",
        accessTokenLife: "10m",
        refreshTokenSize: 100,
    }
    return jwt;
}
module.exports = {
    token: token,
    jwtVariable: jwtVariable,
}