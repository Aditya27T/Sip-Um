require('dotenv').config();

const development = {
    client: 'mysql',
    connection: {
        host: process.env.DEV_DB_HOST,
        user: process.env.DEV_DB_USER,
        password: process.env.DEV_DB_PASS,
        database: process.env.DEV_DB_NAME
    },
    pool: { min: 0, max: 7 },
    jwt: {
        secret: process.env.JWT_TOKEN_SECRET,
        expiresIn: process.env.JWT_TOKEN_EXPIRES_IN
    }
};

const production = {
    client: 'mysql',
    connection: {
        host: process.env.PROD_DB_HOST,
        user: process.env.PROD_DB_USER,
        password: process.env.PROD_DB_PASS,
        database: process.env.PROD_DB_NAME
    },
    pool: { min: 0, max: 7 },
    jwt: {
        secret: process.env.JWT_TOKEN_SECRET,
        expiresIn: process.env.JWT_TOKEN_EXPIRES_IN
    }
};

if (process.env.APP_ENV === 'production') {
    module.exports = production;
} else {
    module.exports = development;
}