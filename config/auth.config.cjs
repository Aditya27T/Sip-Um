require("dotenv").config();

module.exports = {
  secret: process.env.JWT_TOKEN_SECRET,
  expiresIn: process.env.JWT_TOKEN_EXPIRES_IN,
  oauth: {
    google: {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirectUri: process.env.GOOGLE_CALLBACK_URL,
    },
  },
  mailer: {},
};
