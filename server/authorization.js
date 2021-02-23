const dotenv = require("dotenv")
const basicAuth = require('express-basic-auth')

dotenv.config()

module.exports = basicAuth({
    users: { [process.env.ADMIN_EMAIL]: process.env.ADMIN_PASSWORD }
})
