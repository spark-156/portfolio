const basicAuth = require('express-basic-auth')
const adminEnv = process.env;

const {
    ADMIN_EMAIL,
    ADMIN_PASSWORD
} = adminEnv;

module.exports = basicAuth({
    users: { [ADMIN_EMAIL]: ADMIN_PASSWORD }
})
