const User = require('../models/user.model');

module.exports = async (req, res, next) => {
  try {
    console.log(req.headers.token);
    //is token present in headers or not
    if (!req.headers.token) {
      return res.status(401).send({
        message: 'Operation not allowed.',
      });
    }

    const [id, mail, pass] = req.headers.token.trim().split(':');

    //all three present in the token or not
    if (!id || !mail || !pass) {
      return res.status(401).send({
        message: 'Operation not allowed.',
      });
    }

    //find the user using id
    const user = await User.findById(id).lean().exec();

    //check the user exist or not
    if (!user) {
      return res.status(401).send({
        message: 'You are not registred, register yourself first.',
      });
    }

    //check mail and password are same or not
    if (user.email !== mail || user.password !== pass) {
      return res.status(401).send({
        message: 'Either Email or Password is incorrect.',
      });
    }

    //proceed to next/route
    next();
  } catch (e) {
    return res.status(500).send(e.message);
  }
};
