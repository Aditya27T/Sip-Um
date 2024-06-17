require("dotenv").config();

module.exports = {
    app: {
        name: process.env.APP_NAME,
        port: process.env.APP_PORT,
        env: process.env.APP_ENV,
        url: process.env.APP_URL
    }
};