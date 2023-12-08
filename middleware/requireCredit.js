// check credit in database and not in req.user (on more request but more safe)
const User = require("mongoose").model("users");

module.exports = async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (user.credit < 1) {
    return res.status(403).send("error: not enough credit!");
  }

  next();
};
