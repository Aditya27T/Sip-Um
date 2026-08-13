require("dotenv").config();

module.exports = {
    app: {
        name: process.env.APP_NAME || "SIP API",
        port: process.env.APP_PORT || 3000,
        env: process.env.APP_ENV || "",
        url: process.env.APP_URL || "",
    }
};