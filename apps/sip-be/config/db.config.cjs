require("dotenv").config();

const dbConfig = {
    development: {
        username: process.env.DEV_DB_USER || "root",
        password: process.env.DEV_DB_PASSWORD || "",
        database: process.env.DEV_DB_NAME || "sip",
        port: process.env.DEV_DB_PORT || 3306,
        host: process.env.DEV_DB_HOST || "localhost",
        dialect: process.env.DEV_DB_DIALECT || "mysql",
        operatorsAliases: 0,
        dialectOptions: {
            bigNumberStrings: true
        },
        logging: false
    },
    test: {
        username: process.env.DEV_DB_USER,
        password: process.env.TEST_DB_PASSWORD,
        database: process.env.TEST_DB_NAME,
        port: process.env.TEST_DB_PORT,
        host: process.env.TEST_DB_HOST,
        dialect: process.env.TEST_DB_DIALECT,
        dialectOptions: {
            bigNumberStrings: true
        },
        logging: false
    },
    production: {
        username: process.env.DEV_DB_USER,
        password: process.env.PROD_DB_PASSWORD,
        database: process.env.PROD_DB_NAME,
        port: process.env.PROD_DB_PORT,
        host: process.env.PROD_DB_HOST,
        dialect: process.env.PROD_DB_DIALECT || "mysql",
        dialectOptions: {
            bigNumberStrings: true
        },
        logging: false
    }
}

module.exports = dbConfig;