module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    // Access the user variable from any point in the code
    res.locals.user = req.session.user

    return next()
  }

  return res.redirect('/')
}
