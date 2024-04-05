const User = require("../../models/user");
const AppError = require("../../controlError/AppError");
// superadmin middleware
module.exports.verifySuperAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId);
  if (user && user.role == "superAdmin") {
    return next();
  } else {
    return next(new AppError("Unauthorized user!",403));
  }
};

// admin middleware
module.exports.admin = async (req, res, next) => {
  const user = await User.findById(req.userId);
  if (user && (user.role == "admin" || user.role == "superAdmin")) {
    return next();
  } else {
    return next(new AppError("Unauthorized user!",403));
  }
};
