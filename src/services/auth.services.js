const { Users, Owners } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class AuthServices {
  static async authenticate(credentials) {
    try {
      const { email, password } = credentials;
      const user = await Users.findOne({
        where: { email },
      });

      const owner = await Owners.findOne({
        where: { email },
      });

      const result = user || owner;
      
      if (result) {
        const isValid = bcrypt.compareSync(password, result.password);
        return isValid ? { isValid, result } : isValid;
      } else {
        return result;
      }
    } catch (error) {
      throw error;
    }
  }
  static genToken(data) {
    try {
      const expirationTime = process.env.EXPIRATION_TIME || '24h';
      const token = jwt.sign(data, process.env.SECRET_KEY, {
        expiresIn: expirationTime,
        algorithm: "HS512",
      });
      
      return {token, expirationTime};
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthServices;