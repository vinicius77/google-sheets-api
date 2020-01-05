// @desc GET Login Page
// @route GET /auth
// @access Public
exports.isAuthenticated = async (req, res, next) => {
  return res.render('auth', { title: '' });
};
