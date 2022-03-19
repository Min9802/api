let token = (length) => {
    return Math.random().toString(length).substring(2, length);
}
module.exports = {
    token: token,
}